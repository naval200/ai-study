---
day: 2
date: 2026-10-06
week: 1
title: What a language model predicts
type: core
hours: 0
---

# Day 2 · Tue 6 Oct — What a language model predicts

## Plan
- [x] **Learn:** Karpathy, makemore part 1 (1h57m). Raschka ch. 2, Working with Text Data.
- [x] **Build:** a bigram character model; then the sliding-window dataset and embedding layer from ch. 2.
- [ ] **Rust:** rustlings 76–80; Comprehensive Rust Day 1 afternoon.
- [ ] **Post:** "An LLM is a next-token probability table. Here's the smallest one."

## Done when
- [ ] your bigram model samples name-like strings, and you can explain why cross-entropy is the loss.

## Log
- **Done:** Learn — makemore part 1 and Raschka ch. 2. Build — bigram character model, then the sliding-window dataset and embedding layer.
- **Blocked:** Rust (rustlings 76–80, Comprehensive Rust Day 1 afternoon) and Post not done yet.
- **Tomorrow's first task:** open days/day03.md and start the Learn item. Do the Day 2 Rust items in the Sunday catch-up.

## Notes
Learner note: we use negative log likelihood with one-hot encoding to find the best weights for the network. Negative log likelihood is the cross-entropy between outputs and expected outputs.
Check 2026-10-07: the bigram model part is ticked by the learner. The cross-entropy explanation is fragile (sign error on the loss; no link from one-hot cross-entropy to NLL). Done-when stays open. Retry with a fresh question in the next warm-up.
