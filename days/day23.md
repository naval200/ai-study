---
day: 23
date: 2026-10-27
week: 4
title: Late interaction (ColBERT)
type: core
hours: 0
---

# Day 23 · Tue 27 Oct — Late interaction (ColBERT)

## Plan
- [ ] **Learn:** ColBERT paper, sections 1–3. Qdrant tutorials: Multivectors and Late Interaction and Hybrid Search with Reranking.
- [ ] **Build:** a ColBERT rescoring stage inside one Qdrant query (hybrid prefetch 50 → ColBERT top 10) using FastEmbed's ColBERT. Compare with the cross-encoder on quality, latency and index size.
- [ ] **Rust:** make the scorer match ranx to 4 decimal places.
- [ ] **Post:** "Cross-encoder vs ColBERT: speed vs quality, measured."

## Done when
- [ ] the results table has every retrieval config you've tried, sorted by nDCG@10.

## Log
- **Done:**
- **Blocked:**
- **Tomorrow's first task:**

## Notes
