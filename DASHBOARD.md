# Dashboard — AI Study Plan — Days 1–47

> Generated 2026-10-15 by study-coach. Don't edit by hand — run `/study-coach status`.

## Where you are

- **Day 11 of 47** · Thu 2026-10-15 · Week 1: Sampling · KV cache (start)
- **Overall:** █░░░░░░░░░░░░░░░░░░░ 7% (15/206 required items)
- **Pace:** 🔴 **Behind** — 28 item(s) owed across 7 day(s)
- **Streak:** 0 day(s) logged in a row
- ⚠️ **5 days missed in a row** — plan rule: cut scope, don't add hours.
- **Exit test:** 0/9 (pass ≥ 7)
- **Online:** https://naval200.github.io/ai-study/

## Reviews due

- 🔁 Cross-entropy and negative log likelihood — due 2026-10-08 (last: fragile)
- 🔁 Backprop and gradient accumulation — due 2026-10-10 (last: solid)
- 🔁 Eval → repair loops and rules-first gates — due 2026-10-11
- 🔁 Model cascades and routing — due 2026-10-11
- 🔁 Structured outputs and tool schemas — due 2026-10-12

## Today

**Sampling · KV cache (start)** — `days/day09.md`

Start with (from Day 3's log): _Build the sliding-window dataset and embedding layer. Save the code in `projects/w1-gpt/text-data/`._

- [ ] **Learn:** Build a Reasoning Model ch. 2, Generating Text with a Pre-trained LLM.
- [ ] **Build:** temperature, top-k and top-p sampling, and a sampling comparison table.
- [ ] **Rust:** rustlings 91–96 (done).
- [ ] **Post:** "Temperature, top-k, top-p: same model, three personalities."
- [ ] the model writes coherent three-sentence stories, and you have a sampling comparison table.

## Catch-up queue (goes to Sunday)

- Day 0 · **Repo:** GitHub monorepo ai-study/ with w1-gpt/, w2-inference/, w3-retrieval/, w4-ask-fiqa/, rust/ (here: …
- Day 0 · **Accounts:** GPU cloud (RunPod or Modal), OpenAI or Anthropic API, Hugging Face — all with spend caps.
- Day 0 · **Budget:** ~$15–25 of rented GPU time (Days 16–18) plus a few dollars of API calls.
- Day 2 · **Post:** "An LLM is a next-token probability table. Here's the smallest one."
- Day 2 · your bigram model samples name-like strings, and you can explain why cross-entropy is the loss.
- Day 3 · **Build:** the sliding-window dataset and embedding layer from ch. 2.
- Day 3 · **Rust:** rustlings 76–80.
- Day 3 · **Rust:** Comprehensive Rust Day 1 afternoon.
- Day 3 · the sliding-window loader yields (input, target) pairs shifted by one token.
- Day 4 · **Learn:** Jay Alammar, The Illustrated Transformer.
- Day 4 · **Learn:** Raschka ch. 3, Coding Attention Mechanisms.
- Day 4 · **Build:** scaled dot-product attention with a causal mask, with shape asserts in a test file.
- Day 4 · **Rust:** rustlings 81–85.
- Day 5 · **Learn:** Paper: Attention Is All You Need, section 3 only.
- Day 5 · **Learn:** Karpathy, Let's build GPT (1h56m).
- …and 13 more

## Weekly scorecard

| Week | Days done | Logged | Items | Hours (target 30-35) | Posts | Commits |
|---|---|---|---|---|---|---|
| 1 | 1/12 | 3 | 11/53 | 0 | 0 | 21 |
| 2 | 0/11 | 0 | 0/47 | 0 | 0 | – |
| 3 | 0/10 | 0 | 0/45 | 0 | 0 | – |
| 4 | 0/14 | 0 | 0/54 | 0 | 0 | – |

## Calendar

✅ done · 🟡 partial · ❌ missed · 👉 today · · upcoming

- **Setup:** 🟡 0
- **Week 1:** ✅ 1  🟡 2  🟡 3  ❌ 4  ❌ 5  ❌ 6  ❌ 7  ❌ 8  👉 9  · 10  · 11  · 14
- **Week 2:** · 12  · 13  · 15  · 16  · 17  · 18  · 19  · 20  · 21  · 22  · 28
- **Week 3:** · 23  · 24  · 25  · 26  · 27  · 29  · 30  · 31  · 32  · 35
- **Week 4:** · 33  · 34  · 36  · 37  · 38  · 39  · 40  · 41  · 42  · 43  · 44  · 45  · 46  · 47

## Courses & books

- `█░░░░░░░░░░░` Comprehensive Rust (Google) — 1/11 parts
- `██████░░░░░░` Karpathy — Neural Networks: Zero to Hero — 2/4 parts
- `█████████░░░` rustlings — 75/96 exercises
- `░░░░░░░░░░░░` Build a Reasoning Model (From Scratch) (Raschka) — 0/4 chapters
- `░░░░░░░░░░░░` Build a Large Language Model (From Scratch) (Raschka) — 0/4 chapters
- `░░░░░░░░░░░░` Introduction to Information Retrieval (Manning, Raghavan & Schütze) — 0/2 chapters
- `█████░░░░░░░` LLM Engineer's Handbook (Iusztin & Labonne) — 4/10 chapters

## Concept mastery

| Concept | Level | Target | Last checked | Next review |
|---|---|---|---|---|
| Backprop and gradient accumulation | explain ✅ | explain | 2026-10-07 (solid) | 2026-10-10 |
| Cross-entropy and negative log likelihood | aware ⚠️ | explain | 2026-10-07 (fragile) | 2026-10-08 |
| Eval → repair loops and rules-first gates | aware ⚠️ | explain |  | 2026-10-11 |
| Layered entity resolution (alias → fuzzy → LLM) | aware ⚠️ | explain |  | 2026-10-18 |
| Model cascades and routing | aware ⚠️ | explain |  | 2026-10-11 |
| Structured outputs and tool schemas | aware ⚠️ | explain |  | 2026-10-12 |

## Recent log

- **Day 3** (2026-10-09) — done: Learn — Raschka ch. 2, Working with Text Data. · blocked: The Build part (sliding-window dataset, embedding layer) is open. The notebook in the repo has no such code yet. Rust items are open.
- **Day 2** (2026-10-06) — done: Learn — makemore part 1. Build — bigram character model. · blocked: Raschka ch. 2 and its Build part (sliding-window dataset, embedding layer) not done yet. Rust (rustlings 76–80, Comprehensive Rust Day 1 afternoon) and Post not done yet.
- **Day 1** (2026-10-05) — done: Learn — micrograd video; worked through it on paper. Build — Value class with autograd and a tiny MLP on a toy dataset. Rust — rustlings 71–75; Comprehensive Rust Day 1 morning. · blocked: nothing.

## Plan changes

- 7 change(s) logged · last: 2026-10-08 — All dates from Day 3 shifted +2 days (Day 3 = Fri 9 Oct; Day 47 = Sun 22 Nov). Days 1–2 unchanged. Roadmap dates shifted +2 days
- 4 proposal(s) waiting for the next review

## Collected

- Ideas in inbox: 0 · Parking lot: 12 · Articles/papers noted: 0 · Concepts checked: 6 · Misses logged: 2
