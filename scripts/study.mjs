#!/usr/bin/env node
// Helpers for starting a fresh study workspace: setup | reset | fresh | doctor
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { createInterface } from "node:readline/promises";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SKILL_REPO = "https://github.com/naval200/study-coach.git";
const SKILLS_DIR = join(root, ".claude", "skills");
const SKILL_DIR = join(SKILLS_DIR, "study-coach");
const args = process.argv.slice(3);
const yes = args.includes("--yes") || args.includes("-y");

// Personal content that reset wipes (the plan, logs, notes, code, generated progress).
const WIPE_DIRS = ["days", "courses", "books", "articles", "concepts", "ideas", "posts", "reviews", "curriculum", "projects"];
const WIPE_FILES = ["STUDY.md", "DASHBOARD.md", "progress.js", "private.md"];

const log = (m) => console.log(m);

function setup() {
  if (existsSync(SKILL_DIR) && !args.includes("--update")) {
    log("study-coach skill already installed (.claude/skills/study-coach). Use `npm run setup -- --update` to refresh.");
    return;
  }
  const tmp = mkdtempSync(join(tmpdir(), "study-coach-"));
  try {
    log(`Fetching ${SKILL_REPO} ...`);
    execFileSync("git", ["clone", "--depth", "1", "--quiet", SKILL_REPO, tmp], { stdio: "inherit" });
    for (const name of readdirSync(join(tmp, "skills"))) {
      const dest = join(SKILLS_DIR, name);
      rmSync(dest, { recursive: true, force: true });
      mkdirSync(SKILLS_DIR, { recursive: true });
      cpSync(join(tmp, "skills", name), dest, { recursive: true });
    }
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
  log("Installed skills → .claude/skills/ (study-coach, study-planner)");
}

async function reset() {
  const targets = [...WIPE_DIRS.map((d) => d + "/"), ...WIPE_FILES].filter((p) => existsSync(join(root, p)));
  log("Reset will delete (a copy goes to .backup/<timestamp>/):\n  " + (targets.join("\n  ") || "(nothing)"));
  if (!yes) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    const a = (await rl.question('Type "reset" to continue: ')).trim();
    rl.close();
    if (a !== "reset") { log("Aborted."); process.exit(1); }
  }
  if (targets.length) {
    const backup = join(root, ".backup", new Date().toISOString().replace(/[:.]/g, "-"));
    for (const p of targets) {
      cpSync(join(root, p), join(backup, p), { recursive: true });
      rmSync(join(root, p), { recursive: true, force: true });
    }
    log(`Backed up to ${backup.replace(root + "/", "")}`);
  }
  for (const d of WIPE_DIRS) {
    mkdirSync(join(root, d), { recursive: true });
    writeFileSync(join(root, d, ".gitkeep"), "");
  }
  cpSync(join(root, "scripts", "index.template.html"), join(root, "index.html"));
  log("Restored the initial index.html and empty workspace folders.");
}

function doctor() {
  const checks = [
    ["Node 18+", Number(process.versions.node.split(".")[0]) >= 18],
    ["git installed", tryRun("git", ["--version"])],
    ["claude CLI installed", tryRun("claude", ["--version"])],
    ["study-coach skill installed", existsSync(join(SKILL_DIR, "SKILL.md"))],
    ["study-planner skill installed", existsSync(join(SKILLS_DIR, "study-planner", "SKILL.md"))],
    ["STUDY.md present (run `npm run plan`, then `npm run init`)", existsSync(join(root, "STUDY.md"))],
    ["index.html present", existsSync(join(root, "index.html"))],
    ["progress.js generated (run `npm run dashboard`)", existsSync(join(root, "progress.js"))],
  ];
  for (const [name, ok] of checks) log(`${ok ? "✓" : "✗"} ${name}`);
  process.exitCode = checks.slice(0, 5).every(([, ok]) => ok) ? 0 : 1;
}

function tryRun(cmd, a) {
  try { execFileSync(cmd, a, { stdio: "ignore" }); return true; } catch { return false; }
}

const cmd = process.argv[2];
if (cmd === "setup") setup();
else if (cmd === "reset") await reset();
else if (cmd === "fresh") { await reset(); setup(); log("\nNext: `npm run plan` (no plan yet) or `npm run init` (have one) — then `npm run dashboard` and `npm run page`."); }
else if (cmd === "doctor") doctor();
else { log("usage: study.mjs setup [--update] | reset [--yes] | fresh [--yes] | doctor"); process.exit(1); }
