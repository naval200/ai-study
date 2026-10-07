---
title: Backprop and gradient accumulation
target: explain
level: explain
last_check: solid
last_checked: 2026-10-07
review_step: 1
next_review: 2026-10-10
related_days: 1
---

# Backprop and gradient accumulation

## My explanation (in my own words)
Each node adds `other.data * out.grad` to its input gradients. A node used twice is updated twice.

## Evidence
| Date | Task | Support | Observation |
|---|---|---|---|
| 2026-10-05 | Write `_backward` for `c = a * b`; `L = a * a`; missing zero_grad | independent | Mechanics correct (both lines, `2 * a`). Gave the wrong reason for `+=`. Stale-gradient effect correct. |
| 2026-10-07 | Review: a.grad for L = (a+b)+(a*c); why `+=` | guided | Got 5.0 and the fan-out reason without help. Needed one hint: L.grad is 1 (thought it depends on the error). |

## Angles already used
- `_backward` for a product node
- `L = a * a` fan-out
- Missing zero_grad in a training loop
- Two paths from one node: (a+b)+(a*c)

## Gaps to close
- L.grad starts at 1 (dL/dL). The error size enters through the local derivatives, not through L.grad.
- Reason for `+=`: a node feeds several paths and gradients sum. It is not about training samples.
- `_backward` is a closure made inside `__mul__`.
