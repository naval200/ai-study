---
title: Eval → repair loops and rules-first gates
target: explain
level: aware
last_check:
last_checked:
review_step: 0
next_review: 2026-10-11
related_days: 19, 24
---

# Eval → repair loops and rules-first gates

Source: used in Forksome (April 2026). Status: claimed, not yet checked. A quick `check` moves it up.

## Refresher in brief
- Eval first, then repair: the repair prompt gets the original output plus the exact failed checks, not "try again".
- Cap the repair attempts (1–2). After that, reject or flag. This prevents loops that cost money.
- Rules-first gate: deterministic checks accept or reject clear cases free. Send only the borderline band to an LLM judge.
- The thresholds of the band set the cost. Tune them on a labelled sample, not by feel.
- Gap from Forksome: no golden set and no pass-rate numbers. Days 19 and 24 add both.

## My explanation (in my own words)

## Evidence
| Date | Task | Support | Observation |
|---|---|---|---|

## Angles already used
-

## Gaps to close
- What do you log per item so you can compute the repair rate and the cost of repairs?
- How do you pick the borderline band without a labelled set?
