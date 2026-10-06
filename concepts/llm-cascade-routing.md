---
title: Model cascades and routing
target: explain
level: aware
last_check:
last_checked:
review_step: 0
next_review: 2026-10-11
related_days: 13
---

# Model cascades and routing

Source: used in Forksome (April 2026). Status: claimed, not yet checked. A quick `check` moves it up.

## Refresher in brief
- Cascade: call the cheap model first; escalate to the strong model only when a check fails (schema, eval, confidence).
- Router: decide the model before the call, from features of the input (rules or a small classifier).
- Cascade cost = cheap cost + (escalation rate × strong cost). It saves money only while the escalation rate stays low.
- A cascade adds latency on every escalated request (two calls in series).
- Measure three numbers: escalation rate, quality vs always-strong, cost per request. Forksome had none of these.

## My explanation (in my own words)

## Evidence
| Date | Task | Support | Observation |
|---|---|---|---|

## Angles already used
-

## Gaps to close
- At what escalation rate does a mini → 4o cascade cost more than always-4o? (Use real per-token prices.)
- When is a router better than a cascade?
