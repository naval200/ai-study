---
title: Backprop and gradient accumulation
target: explain
level: explain
last_check: fragile
last_checked: 2026-10-05
review_step: 0
next_review: 2026-10-06
related_days: 1
---

# Backprop and gradient accumulation

## My explanation (in my own words)
Each node adds `other.data * out.grad` to its input gradients. A node used twice is updated twice.

## Evidence
| Date | Task | Support | Observation |
|---|---|---|---|
| 2026-10-05 | Write `_backward` for `c = a * b`; `L = a * a`; missing zero_grad | independent | Mechanics correct (both lines, `2 * a`). Gave the wrong reason for `+=`. Stale-gradient effect correct. |

## Angles already used
- `_backward` for a product node
- `L = a * a` fan-out
- Missing zero_grad in a training loop

## Gaps to close
- Reason for `+=`: a node feeds several paths and gradients sum. It is not about training samples.
- `_backward` is a closure made inside `__mul__`.
