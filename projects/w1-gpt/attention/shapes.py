"""Trace every shape in single-head causal self-attention.

Run: uv run python projects/w1-gpt/attention/shapes.py
"""
import torch

T, d_in, d_out = 4, 6, 3  # T = context_size (tokens in the sequence)
torch.manual_seed(0)

x = torch.randn(T, d_in)          # one row per token
Wq = torch.randn(d_in, d_out)     # weights do NOT depend on T
Wk = torch.randn(d_in, d_out)
Wv = torch.randn(d_in, d_out)

Q, K, V = x @ Wq, x @ Wk, x @ Wv
scores = Q @ K.T                  # every query against every key
mask = torch.triu(torch.ones(T, T), diagonal=1).bool()
scores = scores.masked_fill(mask, float("-inf"))
weights = torch.softmax(scores / d_out**0.5, dim=-1)
context = weights @ V

steps = [
    ("x", x, "one d_in vector per token"),
    ("Wq/Wk/Wv", Wq, "d_in x d_out, shared by all tokens"),
    ("Q = x @ Wq", Q, "one query (d_out) per token"),
    ("K = x @ Wk", K, "one key (d_out) per token"),
    ("V = x @ Wv", V, "one value (d_out) per token"),
    ("scores = Q @ K.T", scores, "token i vs token j: T x T"),
    ("weights = softmax", weights, "each row sums to 1; upper triangle is 0"),
    ("context = weights @ V", context, "each token: weighted mix of values"),
]
for name, t, note in steps:
    print(f"{name:24} {str(tuple(t.shape)):10} {note}")

assert Q.shape == K.shape == V.shape == (T, d_out)
assert scores.shape == weights.shape == (T, T)
assert context.shape == (T, d_out)
assert torch.allclose(weights.sum(-1), torch.ones(T))
print("\nweights:\n", weights.round(decimals=2))
