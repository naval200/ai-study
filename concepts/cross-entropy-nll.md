---
title: Cross-entropy and negative log likelihood
target: explain
level: aware
last_check: fragile
last_checked: 2026-10-07
review_step: 0
next_review: 2026-10-08
related_days: 2
---

# Cross-entropy and negative log likelihood

## My explanation (in my own words)
Negative log likelihood is the cross-entropy between outputs and expected outputs. Logs turn a product of small probabilities into a sum. The gradient is steep when the model is very wrong.

## Evidence
| Date | Task | Support | Observation |
|---|---|---|---|
| 2026-10-07 | Loss for p = 0.01 and p = 0.5; why NLL; cross-entropy with a one-hot target | independent | Knew `-log(p)` and the log-sum reason. Gave the values with a negative sign (sure, but wrong: they are +4.6 and +0.7). Could not link one-hot cross-entropy to NLL (said "not sure"). |

## Angles already used
- Numeric loss at p = 0.01 and p = 0.5
- NLL versus squared error
- One-hot target in the cross-entropy sum

## Gaps to close
- Loss is positive: `-log(0.01) = 4.6`, `-log(0.5) = 0.7`.
- With a one-hot target, every term with `y_i = 0` is zero. Only `-log(p_true)` stays. So cross-entropy equals NLL.
- Gradient: `-1/p` is large when p is small, so a confident wrong answer gets a big push. Squared error gives a small push there.
