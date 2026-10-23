# Miss log

Recurring mistakes across checks. One row per distinct miss; bump `count` instead of adding duplicates. `count ≥ 2` puts it on the dashboard watchlist.
type: `confusion` (mixes up A and B — drill as A-vs-B) · `trap` (falls for a specific wrong move — drill as a fresh scenario).

| ID | Concept | Type | Note | Count | Last seen |
|---|---|---|---|---|---|
| M1 | backprop-gradient-accumulation | trap | Says `+=` is for many training samples. Real reason: fan-out sums path gradients. Fixed on 2026-10-07. | 1 | 2026-10-05 |
| M2 | cross-entropy-nll | trap | Sure of a negative loss value. Loss from -log(p) is positive. | 1 | 2026-10-07 |
| M3 | self-attention-and-causal-mask | confusion | Said the attention score matrix is vocab-sized and not tied to input length. Real shape: seq_len × seq_len per head. Vocab size is the output logits. Mask idea (no peeking at future tokens in training) was right. | 1 | 2026-10-23 |
