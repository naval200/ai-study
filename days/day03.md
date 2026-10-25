---
day: 3
date: 2026-10-21
week: 1
title: Finish Day 2: text data and embeddings
type: core
hours: 0
---

# Day 3 · Wed 21 Oct — Finish Day 2: text data and embeddings

## Plan
- [x] **Learn:** Raschka ch. 2, Working with Text Data.
- [x] **Build:** the sliding-window dataset and embedding layer from ch. 2.
- [x] **Rust:** rustlings 76–80.
- [ ] **Rust:** Comprehensive Rust Day 1 afternoon.

## Done when
- [x] the sliding-window loader yields (input, target) pairs shifted by one token.

## Log
- **Done:** Learn — Raschka ch. 2. Build — sliding-window dataset, DataLoader and token plus position embedding, in `projects/w1-gpt/text-data/ch02_text_data.ipynb`. The notebook tests pass (sliding window, dataloader, embedding). Rust — rustlings 76–80 (80/94).
- **Blocked:** Comprehensive Rust Day 1 afternoon is open.
- **Tomorrow's first task:** Run the self-attention review. Then start Day 4 Build: scaled dot-product attention with a causal mask. Print `scores.shape`.

## Notes

Note 2026-10-15: The learner started Day 3 late and asked to pause advancing days until they catch up. The coach made no date change. The progress page export ticked Build and Done-when, but the repo has no matching code. Both stay open until the code is saved.

Note 2026-10-16: The learner is away 16–20 Oct. Day 3 restarts Wed 21 Oct. The Build item and the Done-when item stay open. The learner may swap the Day 4 Learn item for the DeepLearning.AI course "How Transformer LLMs Work". The coach made no plan change for this swap yet.

Note 2026-10-23: The learner read Jay Alammar, The Illustrated Transformer, and checked self-attention. Result: misconception on the score matrix shape (see `concepts/self-attention-and-causal-mask.md`). The Day 3 Build stays open. The learner continues it on 24 Oct. The Day 4 Learn item stays unticked.

Note 2026-10-24: The learner pasted the rustlings output: 80/94 done, current exercise threads2.rs. The rustlings 76–80 item is done. The tool shows 94 exercises, so the course total changed from 96 to 94. The Build and Comprehensive Rust items stay open.

Note 2026-10-26: Evidence for the Build tick: the notebook cell prints ok for sliding window, dataloader and embedding, then ALL TESTS PASSED. The cell still has the comment `# I AM NOT DONE`. Remove it.
