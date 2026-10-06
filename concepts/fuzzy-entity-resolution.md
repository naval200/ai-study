---
title: Layered entity resolution (alias → fuzzy → LLM)
target: explain
level: aware
last_check:
last_checked:
review_step: 0
next_review: 2026-10-18
related_days: 15, 16
---

# Layered entity resolution (alias → fuzzy → LLM)

Source: used in Forksome (April 2026). Status: claimed, not yet checked. A quick `check` moves it up.

## Refresher in brief
- Layer 1: exact alias lookup on normalized text (lowercase, trim, remove diacritics). Free.
- Layer 2: RapidFuzz scores (e.g. `WRatio`, `token_set_ratio`). Above the accept threshold → match; in the middle band → suggest to the user.
- Layer 3: queue the rest; batch by frequency; one LLM call resolves many terms off the hot path.
- Memory: write new aliases, store rejects (non-food) so you never pay twice, promote aliases as evidence grows.
- Link to Week 3: fuzzy matching is lexical, like BM25. Embeddings would catch synonyms with no shared letters (ghia ↔ bottle gourd).

## My explanation (in my own words)

## Evidence
| Date | Task | Support | Observation |
|---|---|---|---|

## Angles already used
-

## Gaps to close
- Why does `token_set_ratio` behave differently from `ratio` for multi-word names?
- Where would an embedding layer fit, and what would it cost?
