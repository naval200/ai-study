#!/usr/bin/env node
// Builds report-data.js for report.html (concept scorecard + weekly report card).
// Reads progress.js (written by the dashboard), concepts/*.md, concepts/_misses.md, reviews/week-N.md.
// Usage: node scripts/report.mjs   (run it after the dashboard)
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => (fs.existsSync(path.join(root, p)) ? fs.readFileSync(path.join(root, p), "utf8") : "");
const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());

const ctx = { window: {} };
vm.runInNewContext(read("progress.js"), ctx);
const progress = ctx.window.STUDY_PROGRESS;
if (!progress) throw new Error("progress.js missing: run the dashboard first");

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) out[kv[1]] = kv[2].replace(/\s+#.*$/, "").trim();
  }
  return out;
}

// ---- concept scorecard ----
const RANK = { aware: 1, explain: 2, apply: 3, teach: 4 };
const misses = read("concepts/_misses.md")
  .split("\n")
  .filter((l) => /^\|\s*M\d+/.test(l))
  .map((l) => l.split("|").map((c) => c.trim()))
  .map((c) => ({ id: c[1], concept: c[2], type: c[3], note: c[4], count: Number(c[5]) || 1, last: c[6] }));

const concepts = [];
for (const f of fs.readdirSync(path.join(root, "concepts")).sort()) {
  if (!f.endsWith(".md") || f.startsWith("_")) continue;
  const slug = f.replace(/\.md$/, "");
  const fm = frontmatter(read(`concepts/${f}`));
  const level = fm.level || "aware";
  const target = fm.target || "explain";
  const last = fm.last_check || "";
  let group;
  if (!last) group = "untested";
  else if (last === "misconception" || last === "gap") group = "fix";
  else if (last === "fragile") group = "fragile";
  else group = (RANK[level] || 1) >= (RANK[target] || 2) ? "reliable" : "building";
  concepts.push({
    slug,
    title: fm.title || slug,
    level, target, last, group,
    lastChecked: fm.last_checked || "",
    next: fm.next_review || "",
    overdue: !!fm.next_review && fm.next_review < today,
    misses: misses.filter((m) => m.concept === slug).map((m) => ({ note: m.note, count: m.count })),
  });
}

// ---- weekly report card ----
function review(n) {
  const text = read(`reviews/week-${n}.md`);
  if (!text) return null;
  const sections = {};
  let cur = null;
  for (const line of text.replace(/^---\n[\s\S]*?\n---\n/, "").split("\n")) {
    const h = line.match(/^##\s+(.*)$/);
    if (h) { cur = h[1].trim().toLowerCase(); sections[cur] = []; continue; }
    if (cur && line.trim()) sections[cur].push(line.replace(/^\s*[-*]\s*/, "").trim());
  }
  const pick = (k) => (Object.entries(sections).find(([key]) => key.startsWith(k)) || [, []])[1].filter((x) => x);
  return { worked: pick("what worked"), didnt: pick("what didn"), catchup: pick("catch-up"), change: pick("one change") };
}

const weeks = [];
const weekNums = [...new Set(progress.days.filter((d) => d.week >= 1).map((d) => d.week))].sort((a, b) => a - b);
for (const n of weekNums) {
  const days = progress.days.filter((d) => d.week === n);
  const dates = days.map((d) => d.date).sort();
  const req = days.flatMap((d) => (d.items || []).filter((i) => !i.optional));
  const done = req.filter((i) => i.state === "done").length;
  weeks.push({
    week: n,
    title: (progress.weeks[n] || {}).title || "",
    goal: (progress.weeks[n] || {}).goal || "",
    start: dates[0],
    end: dates[dates.length - 1],
    state: today < dates[0] ? "upcoming" : today > dates[dates.length - 1] ? "past" : "current",
    days: days.length,
    daysDone: days.filter((d) => d.status === "done").length,
    daysLogged: days.filter((d) => d.log && (d.log.done || d.log.blocked)).length,
    items: req.length,
    itemsDone: done,
    hours: days.reduce((s, d) => s + (d.hours || 0), 0),
    review: review(n),
  });
}

const data = { generated: today, concepts, weeks };
fs.writeFileSync(path.join(root, "report-data.js"), "window.STUDY_REPORT = " + JSON.stringify(data, null, 1) + ";\n");
console.log(`report-data.js: ${concepts.length} concepts, ${weeks.length} weeks`);
