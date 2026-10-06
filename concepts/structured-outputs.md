---
title: Structured outputs and tool schemas
target: explain
level: aware
last_check:
last_checked:
review_step: 0
next_review: 2026-10-12
related_days: 8, 31
---

# Structured outputs and tool schemas

Source: used in Forksome (April 2026). Status: claimed, not yet checked. A quick `check` moves it up.

## Refresher in brief
- JSON mode gives valid JSON only. Structured outputs (`strict: true`) also force the output to match your JSON Schema.
- Strict mode supports only a subset of JSON Schema: all fields `required`, `additionalProperties: false`, optional fields as `type: [x, "null"]`.
- The model can still refuse. Check the `refusal` field before you parse.
- Output cut by `max_tokens` gives invalid JSON. Check `finish_reason` / `stop_reason`.
- Claude: you get the same result with a tool whose `input_schema` is your schema, plus `tool_choice` set to that tool.
- Pydantic model → schema → parse back into the model. Validate business rules after the parse; the schema cannot check them.

## My explanation (in my own words)

## Evidence
| Date | Task | Support | Observation |
|---|---|---|---|

## Angles already used
-

## Gaps to close
- Can you name two failures that a valid schema does not prevent?
- How does the Claude tool-schema method differ from OpenAI `response_format`?
