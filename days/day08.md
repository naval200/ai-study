---
day: 8
date: 2026-10-12
week: 2
title: Calling models like an engineer
type: core
hours: 0
---

# Day 8 · Mon 12 Oct — Calling models like an engineer

## Plan
- [ ] **Learn:** OpenTelemetry semantic conventions for generative AI (the gen_ai.* span attributes); Claude tool use overview. (Structured outputs: known from Forksome. 15-min refresher only: `concepts/structured-outputs.md`.)
- [ ] **Build:** w2-inference/llm.py — one client function with streaming, Pydantic structured output, and a JSONL log of model, tokens in/out, time to first token (TTFT), tokens/sec and cost. Use the gen_ai.* names for the log fields.
- [ ] **Rust:** Comprehensive Rust Day 4 morning.
- [ ] **Post:** "Every LLM call has four numbers: TTFT, tokens/sec, tokens, cost."

## Done when
- [ ] 20 calls are logged with gen_ai.* field names, and one structured extraction validates against its schema.

## Log
- **Done:**
- **Blocked:**
- **Tomorrow's first task:**

## Notes
