# Launch drafts: Show HN + Product Hunt

Links
- Skill: https://github.com/naval200/study-coach
- My progress (live): https://naval200.github.io/ai-study/
- Workspace I run it on: https://github.com/naval200/ai-study

Facts to keep honest: I'm on day 1 of 30 and currently behind pace. The page shows that. Update numbers before posting.

---

## Show HN

**Title** (≤80 chars)

    Show HN: Study-coach – a Claude Code skill that runs your self-study plan

**URL:** https://github.com/naval200/study-coach

**First comment** (post this right after submitting)

I kept abandoning self-study plans. The plan was fine; what failed was that nothing told me, at 7am, what to do today, whether I was actually behind, or whether I understood what I'd read.

study-coach is a Claude Code skill that treats a curriculum as a plain-markdown workspace (STUDY.md, days/, courses/, concepts/, posts/) and coaches you through it:

- `/study-coach` says what to do today
- `/study-coach log` ticks off the day and writes the log
- a generated dashboard shows day N of M, pace, streak and a catch-up queue; a missed-run alert triggers the scope-cut rule you wrote into your plan
- `/study-coach check <concept>` quizzes you up a ladder (aware → explain → apply → teach). Answers are graded on correctness × confidence, so a confident wrong answer ("misconception") gets fixed first. Concepts come back for review on a 1/3/7/16/35-day schedule
- `/study-coach adapt` triages "I found a great paper" so plan changes name what comes out, and get logged
- `/study-coach share` turns your real logs into a blog post and LinkedIn/X/etc. variants

Everything is markdown you own and can commit. The dashboard and concept scheduler are dependency-free Node scripts (18+); the coaching itself is the skill prompt.

I'm using it on a 30-day plan: build a GPT from scratch, then inference, retrieval, and a deployed, evaluated RAG app, with Rust alongside. It's public and updates as I log each day, including the days I fall behind: https://naval200.github.io/ai-study/

The workspace repo has `npm run fresh`, which wipes my plan and installs the skill, so you can start your own from scratch.

Limits: it's a Claude Code skill, so it needs Claude Code. Grading answers is only as good as the model's judgement; the review schedule is fixed rather than adaptive. I'd like feedback on the depth ladder and on the plan-change rules.

---

## Product Hunt

**Name:** study-coach

**Tagline** (≤60 chars): A coach for your self-study plan, inside Claude Code

**Description** (≤260 chars)

Turn any curriculum into a markdown workspace. study-coach tells you what to do today, tracks if you're behind, quizzes you until you really understand, and turns your progress into posts.

**Topics:** Developer Tools, Education, Artificial Intelligence, Productivity

**Links:** https://github.com/naval200/study-coach

**Maker's first comment**

Hi PH, I'm Naval. I built study-coach because I'm a serious self-study person with a poor record of finishing plans.

What it does:
- **Today:** one command tells you what to do, including due review warm-ups
- **Honest pace:** a dashboard shows if you're ahead or behind, your streak, and a catch-up queue
- **Real understanding:** concept checks grade correctness × confidence and fix confident-but-wrong answers first, then schedule spaced reviews
- **A plan that can change:** every addition says what it replaces, and every change is logged
- **Learn in public:** `share` writes a blog plus platform-specific posts from your actual logs, no video needed

It's open source (MIT) and all plain markdown, so you keep your data.

I'm eating my own cooking: here's my live 30-day LLM engineering progress, behind-pace days included: https://naval200.github.io/ai-study/

Would love to know: what would make you trust a coach's quiz grade?

**Gallery ideas:** screenshot of the progress page; terminal of `/study-coach` today view; a concept check Q&A; the DASHBOARD.md.

---

## Posting tips
- Show HN: post Tue–Thu morning US time, reply to every comment, don't ask for upvotes.
- Product Hunt: schedule for 12:01am PT, line up a short demo GIF first.
- Refresh the progress numbers (`npm run dashboard`, push) right before posting.
