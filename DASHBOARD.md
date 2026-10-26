# Dashboard — AI Study Plan — Days 1–47

> Generated 2026-10-26 by study-coach. Don't edit by hand — run `/study-coach status`.

## Where you are

- **Day 4 of 47** · Mon 2026-10-26 · Week 1: Attention (1 of 2)
- **Overall:** ██░░░░░░░░░░░░░░░░░░ 9% (19/206 required items)
- **Pace:** 🔴 **Behind** — 6 item(s) owed across 3 day(s)
- **Streak:** 4 day(s) logged in a row
- **Exit test:** 0/9 (pass ≥ 7)
- **Online:** https://naval200.github.io/ai-study/

## Reviews due

- 🔁 Cross-entropy and negative log likelihood — due 2026-10-08 (last: fragile)
- 🔁 Backprop and gradient accumulation — due 2026-10-10 (last: solid)
- 🔁 Eval → repair loops and rules-first gates — due 2026-10-11
- 🔁 Model cascades and routing — due 2026-10-11
- 🔁 Structured outputs and tool schemas — due 2026-10-12
- 🔁 Layered entity resolution (alias → fuzzy → LLM) — due 2026-10-18
- 👀 Repeat miss: self-attention-and-causal-mask — Said the attention score matrix is vocab-sized and not tied to input length. Real shape: seq_len × seq_len per head. Vocab size is the output logits. Mask idea (no peeking at future tokens in training) was right. (×2)

## Today

**Attention (1 of 2)** — `days/day04.md`

Start with (from Day 3's log): _Run the self-attention review. Then start Day 4 Build: scaled dot-product attention with a causal mask. Print `scores.shape`._

- [x] **Learn:** Jay Alammar, The Illustrated Transformer.
- [ ] **Learn:** Raschka ch. 3, Coding Attention Mechanisms.
- [ ] **Build:** scaled dot-product attention with a causal mask, with shape asserts in a test file.
- [ ] **Rust:** rustlings 81–85.

## Catch-up queue (goes to Sunday)

- Day 0 · **Repo:** GitHub monorepo ai-study/ with w1-gpt/, w2-inference/, w3-retrieval/, w4-ask-fiqa/, rust/ (here: …
- Day 0 · **Accounts:** GPU cloud (RunPod or Modal), OpenAI or Anthropic API, Hugging Face — all with spend caps.
- Day 0 · **Budget:** ~$15–25 of rented GPU time (Days 16–18) plus a few dollars of API calls.
- Day 2 · **Post:** "An LLM is a next-token probability table. Here's the smallest one."
- Day 2 · your bigram model samples name-like strings, and you can explain why cross-entropy is the loss.
- Day 3 · **Rust:** Comprehensive Rust Day 1 afternoon.

## Weekly scorecard

| Week | Days done | Logged | Items | Hours (target 30-35) | Posts | Commits |
|---|---|---|---|---|---|---|
| 1 | 1/12 | 3 | 15/53 | 0 | 0 | 34 |
| 2 | 0/11 | 0 | 0/47 | 0 | 0 | – |
| 3 | 0/10 | 0 | 0/45 | 0 | 0 | – |
| 4 | 0/14 | 0 | 0/54 | 0 | 0 | – |

## Calendar

✅ done · 🟡 partial · ❌ missed · 👉 today · · upcoming

- **Setup:** 🟡 0
- **Week 1:** ✅ 1  🟡 2  🟡 3  👉 4  · 5  · 6  · 7  · 8  · 9  · 10  · 11  · 14
- **Week 2:** · 12  · 13  · 15  · 16  · 17  · 18  · 19  · 20  · 21  · 22  · 28
- **Week 3:** · 23  · 24  · 25  · 26  · 27  · 29  · 30  · 31  · 32  · 35
- **Week 4:** · 33  · 34  · 36  · 37  · 38  · 39  · 40  · 41  · 42  · 43  · 44  · 45  · 46  · 47

## Courses & books

- `█░░░░░░░░░░░` Comprehensive Rust (Google) — 1/11 parts
- `██████░░░░░░` Karpathy — Neural Networks: Zero to Hero — 2/4 parts
- `██████████░░` rustlings — 80/94 exercises
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
| self attention and causal mask | explain ✅ | explain | 2026-10-26 (fragile) | 2026-10-27 |
| Structured outputs and tool schemas | aware ⚠️ | explain |  | 2026-10-12 |

## Recent log

- **Day 3** (2026-10-21) — done: Learn — Raschka ch. 2. Build — sliding-window dataset, DataLoader and token plus position embedding, in `projects/w1-gpt/text-data/ch02_text_data.ipynb`. The notebook tests pass (sliding window, dataloader, embedding). Rust — rustlings 76–80 (80/94). · blocked: Comprehensive Rust Day 1 afternoon is open.
- **Day 2** (2026-10-06) — done: Learn — makemore part 1. Build — bigram character model. · blocked: Raschka ch. 2 and its Build part (sliding-window dataset, embedding layer) not done yet. Rust (rustlings 76–80, Comprehensive Rust Day 1 afternoon) and Post not done yet.
- **Day 1** (2026-10-05) — done: Learn — micrograd video; worked through it on paper. Build — Value class with autograd and a tiny MLP on a toy dataset. Rust — rustlings 71–75; Comprehensive Rust Day 1 morning. · blocked: nothing.

## Plan changes

- 10 change(s) logged · last: 2026-10-26 — All dates from Day 4 shifted +4 days (Day 4 = Mon 26 Oct; Day 47 = Tue 8 Dec). Days 1–3 unchanged. Roadmap dates shifted +4 days. STUDY.md `start` is now 2026-10-23, `end` is 2026-12-08. Day 4 Learn stays ticked; no later day pulled forward
- 4 proposal(s) waiting for the next review

## Collected

- Ideas in inbox: 0 · Parking lot: 12 · Articles/papers noted: 1 · Concepts checked: 7 · Misses logged: 3
