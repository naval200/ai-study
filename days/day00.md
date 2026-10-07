---
day: 0
date: 2026-10-04
week: 0
title: Setup (weekend before Day 1, ~3 hrs)
type: setup
hours: 0
---

# Day 0 · Sat 3 – Sun 4 Oct — Setup

## Plan
- [ ] **Repo:** GitHub monorepo ai-study/ with w1-gpt/, w2-inference/, w3-retrieval/, w4-ask-fiqa/, rust/ (here: `projects/`).
- [x] **Python:** Python 3.11+ via uv, then PyTorch with MPS. Check `torch.backends.mps.is_available()`.
- [x] **Tools:** Ollama and Docker Desktop (for Qdrant in Week 3).
- [ ] **Accounts:** GPU cloud (RunPod or Modal), OpenAI or Anthropic API, Hugging Face — all with spend caps.
- [ ] **Budget:** ~$15–25 of rented GPU time (Days 16–18) plus a few dollars of API calls.
- [x] **RAM check:** find out the M1's RAM and write it into STUDY.md.

## Done when
- [x] `torch.backends.mps.is_available()` is True and `ollama run` answers a prompt.

## Log
- **Done:** uv env (Python 3.11.9, torch 2.14.1) with MPS True; Ollama 0.35.1 + qwen2.5:3b answers; Docker 20.10 running; RAM is 16 GB.
- **Blocked:** repo not pushed to GitHub yet; accounts and spend caps still to do (by hand).
- **Tomorrow's first task:** open Karpathy's micrograd video and create projects/w1-gpt/micrograd/.

## Notes
- Python env lives at the repo root: `uv sync`, then `uv run python …` (or `.venv/bin/python`).
- Docker Desktop is 4.9 (2022) — fine for Qdrant; update before Week 3 if it misbehaves.
- Ollama isn't a background service: run `ollama serve` (or `brew services start ollama` to start at login).
