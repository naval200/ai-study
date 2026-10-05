# Miss log

Recurring mistakes across checks. One row per distinct miss; bump `count` instead of adding duplicates. `count ≥ 2` puts it on the dashboard watchlist.
type: `confusion` (mixes up A and B — drill as A-vs-B) · `trap` (falls for a specific wrong move — drill as a fresh scenario).

| ID | Concept | Type | Note | Count | Last seen |
|---|---|---|---|---|---|
| M1 | backprop-gradient-accumulation | trap | Says `+=` is for many training samples. Real reason: fan-out sums path gradients. | 1 | 2026-10-05 |
