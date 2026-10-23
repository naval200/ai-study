---
title: The Illustrated Transformer
type: article
url: https://jalammar.github.io/illustrated-transformer/
author: Jay Alammar
date_read: 2026-10-23
for_day: 4
---

# The Illustrated Transformer

## Why I read it

It is the Day 4 Learn item. I read it early, during Day 3, to understand the transformer architecture better.

## Key ideas (my words)
- Self-attention: multiply Query and Key, normalise, then multiply by Value.

## Notes

The learner reports a better understanding of the architecture. The Day 4 Learn item stays open until the self-attention review on 24 Oct is passed.

## Q&A (answered after reading)
**Q:** What does the model do with the query and key of two tokens, and with the value?
**A:** "Multiplies Query and Key to find a number, which it then normalises. Multiplies it to value." Correction: score each token against all keys (dot product), scale by √d_k, apply the causal mask in GPT, softmax into weights, then add up the value vectors with those weights. The output is a new, context-aware vector for the token. Grade: fragile.

**Q:** What shape is the score matrix for 8 tokens, and what does the causal mask do?
**A:** The learner said the matrix is vocab-sized and not tied to input length. Correction: it is seq_len × seq_len (8 × 8) per head. Vocab size belongs to the output logits. The mask answer was right: it stops the model from reading future tokens during training. Grade: misconception.

## Open questions
- Why does the model need a position embedding? (Answer in the Day 3 notebook.)
