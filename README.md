# ai-study — learning LLM engineering in public

**[→ My progress](https://naval200.github.io/ai-study/)**

30 days (Mon 5 Oct → Tue 3 Nov 2026) from a GPT written from scratch to **Ask FiQA**, a deployed, evaluated retrieval app. Then Days 31–112 cover agents, durable runtimes, MCP and sandboxing. Rust runs alongside, 1.5h a day.

- **Progress:** [the progress page](https://naval200.github.io/ai-study/) (GitHub Pages, live) · [DASHBOARD.md](DASHBOARD.md), both regenerated every time I log a day
- **The plan:** [curriculum/plan.md](curriculum/plan.md) · the exit test: [curriculum/exit-test.md](curriculum/exit-test.md)
- **Daily logs:** [days/](days/), one file per day: checklist, done-when, log
- **Code:** [projects/](projects/) — w1-gpt, w2-inference, w3-retrieval, w4-ask-fiqa, rust/
- **Writing:** [posts/](posts/) · plan changes: [curriculum/changes.md](curriculum/changes.md)

Run with the [study-coach](https://github.com/naval200/study-coach) Claude Code skill.

## Start your own

Fork or clone this repo, then:

```bash
npm run fresh      # wipes my plan/progress (backed up to .backup/), restores the blank index.html, installs the study-coach and study-planner skills
npm run plan       # opens Claude Code: /study-planner — build a plan from your end goal (skip if you have one)
npm run init       # opens Claude Code: /study-coach init — turn the plan into a workspace
npm run dashboard  # regenerate DASHBOARD.md + progress.js
npm run page       # view the progress page locally
```

Want your own online progress page like mine? Run `npm run online`. Claude walks you through a free GitHub account, sign-in and GitHub Pages, one step at a time — no git knowledge needed. After that, every `/study-coach log` saves and publishes on its own (`sync: auto` in `STUDY.md`). `npm run save` publishes by hand. Guide: [Go online](https://naval200.github.io/study-coach/online.html).

Other shortcuts: `npm run doctor` (check setup) · `npm run today` · `npm run status` · `npm run save` (publish now) · `npm run online` (set up the web page) · `npm run setup -- --update` (refresh the skill) · `npm run reset` (reset only) · `npm run py -- <file>` · `npm run sync`
