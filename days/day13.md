---
day: 13
date: 2026-10-17
week: 2
title: Mini SLM router
type: core
hours: 0
---

# Day 13 · Sat 17 Oct — Mini SLM router

## Plan
- [ ] **Learn:** RouteLLM paper, sections 1–3.
- [ ] **Build:** a 60-prompt test set (20 factual, 20 extraction, 20 reasoning). A router (rules + the local 3B model as a cheap classifier) sends each prompt to the local model or an API model. Score answers with an LLM judge.
- [ ] **Rust:** loadgen v2 — p50/p95 latency, clap CLI; run it against local Ollama and an API. Read vLLM's Rust client vllm-bench for ideas.
- [ ] **Post:** "I cut API cost by X% by routing easy prompts to my laptop."

## Done when
- [ ] a table of quality, cost and latency for always-local, always-API and routed.

## Log
- **Done:**
- **Blocked:**
- **Tomorrow's first task:**

## Notes
