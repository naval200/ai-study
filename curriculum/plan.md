# AI Study Plan — Days 1–30

Oct 2, 2026 · @Naval

Run-sheet and rules: see `../STUDY.md`. Each weekday is 4 hours of core AI work plus 1.5 hours of Rust. Day 30 ends with "Ask FiQA" deployed; Days 1–90 run Mon 5 Oct to Sat 2 Jan.

## Starting point assumed

- LLM Engineer's Handbook (Iusztin & Labonne): ch. 1–4 already read (your 39%). Chapters 7–10 are used in Days 12–27; ch. 5–6 (fine-tuning) wait for month 2.
- Build a Reasoning Model (From Scratch) (Raschka): ch. 2 and appendices C, E used this month; ch. 3–8 wait for month 2–3.
- Applied LLM work already shipped (Forksome, April 2026): structured outputs, multi-pass prompt chains, eval → repair, rules before LLM, cheap-model-first cascades, fuzzy matching, batch jobs with resume state. This plan does not re-teach these. It adds what Forksome did not have: logs, traces, measured cost and quality, golden-set evals, and a real tool-calling agent loop.
- Rust: 70 of 96 rustlings done. Comprehensive Rust (Google) not started: its four Fundamentals days plus the Concurrency day fill Days 1–11, then Rust goes into the project.

Setup: `../days/day00.md`.

---

## Week 1 — LLM fundamentals (Days 1–7)

By Sunday you have a GPT you wrote yourself, trained on TinyStories on the M1, plus a KV cache and three sampling methods. You've also run Qwen3 from scratch. On the Rust side, rustlings is finished (96/96) and you're through Comprehensive Rust Day 3.

Core texts this week: Karpathy's Neural Networks: Zero to Hero, Raschka's Build a Large Language Model (From Scratch) (code repo; the repo's notebooks are enough if you don't own the book), and ch. 2 of your Build a Reasoning Model (code).

### Day 1 · Mon 5 Oct — Backprop from scratch
- **Learn:** Karpathy, building micrograd (2h25m). Code along; don't just watch.
- **Build:** w1-gpt/micrograd/ — a Value class with autograd, then a tiny MLP trained on a toy dataset.
- **Rust:** rustlings 71–75; Comprehensive Rust Day 1 morning.
- **Post:** "Backprop in 60 seconds: the chain rule, with code."
- **Done when:** loss goes down and you can explain backward() without notes.

### Day 2 · Tue 6 Oct — What a language model predicts
- **Learn:** Karpathy, makemore part 1 (1h57m). Raschka ch. 2, Working with Text Data.
- **Build:** a bigram character model; then the sliding-window dataset and embedding layer from ch. 2.
- **Rust:** rustlings 76–80; Comprehensive Rust Day 1 afternoon.
- **Post:** "An LLM is a next-token probability table. Here's the smallest one."
- **Done when:** your bigram model samples name-like strings, and you can explain why cross-entropy is the loss.

### Day 3 · Wed 7 Oct — Attention
- **Learn:** Jay Alammar, The Illustrated Transformer. Raschka ch. 3, Coding Attention Mechanisms. Paper: Attention Is All You Need, section 3 only.
- **Build:** scaled dot-product attention, causal mask, multi-head attention, with shape asserts in a test file.
- **Rust:** rustlings 81–85; Comprehensive Rust Day 2 morning.
- **Post:** "Q, K, V explained with a library-search analogy."
- **Done when:** your multi-head attention matches torch.nn.functional.scaled_dot_product_attention within 1e-5.

### Day 4 · Thu 8 Oct — Build the GPT
- **Learn:** Karpathy, Let's build GPT (1h56m). Raschka ch. 4, Implementing a GPT Model from Scratch.
- **Build:** a full GPT (embeddings, blocks, LayerNorm, residuals); train on Tiny Shakespeare on MPS.
- **Rust:** rustlings 86–90; Comprehensive Rust Day 2 afternoon.
- **Post:** "I trained a GPT on my MacBook. Here's what it wrote."
- **Done when:** validation loss below about 2.0 and the samples look like play dialogue.

### Day 5 · Fri 9 Oct — Pretraining and sampling
- **Learn:** Raschka ch. 5, Pretraining on Unlabeled Data (loss curves, temperature, top-k).
- **Build:** switch the data to TinyStories (a 50–100 MB subset), train a ~10M-parameter model, and implement temperature, top-k and top-p sampling.
- **Rust:** rustlings 91–96 (done); Comprehensive Rust Day 3 morning.
- **Post:** "Temperature, top-k, top-p: same model, three personalities."
- **Done when:** the model writes coherent three-sentence stories, and you have a sampling comparison table.

### Day 6 · Sat 10 Oct — KV cache and a real modern model
- **Learn:** Build a Reasoning Model ch. 2, Generating Text with a Pre-trained LLM, and appendix C (Qwen3 source code) — note how RoPE, RMSNorm and grouped-query attention differ from your GPT.
- **Build:** add a KV cache to your GPT and measure tokens/sec with and without it. Then run the book's from-scratch Qwen3 0.6B on MPS and time it the same way.
- **Rust:** Comprehensive Rust Day 3 afternoon.
- **Post:** "The KV cache made my model N× faster. Here's why."
- **Done when:** you have both speedup numbers and can say why decode time grows without the cache.

### Day 7 · Sun 11 Oct — Tokenizers and review (light day)
- **Learn:** Karpathy, Let's build the GPT Tokenizer (2h13m, at 1.5×). Play with Tiktokenizer.
- **Build (stretch):** BPE train/encode/decode following minbpe.
- **Write:** blog post #1, "Building a GPT from scratch in a week on an M1", with the loss curve and the KV-cache numbers.
- **Review:** fill the scorecard; tidy w1-gpt/ with a README.
- **Rust (if behind):** catch-up only if behind.
- **Done when:** the post is published and the repo is public.

---

## Week 2 — Inference economics (Days 8–14)

By Sunday you can say, with your own numbers, what a model costs per million tokens on the M1, on a rented GPU and through an API, and you have a router that picks between them. On the Rust side, you finish Comprehensive Rust (Fundamentals + Concurrency) and publish loadgen, an async load tester.

Rent GPU time only on Days 10–11, about 3 hours in total; terminate the pod each time.

### Day 8 · Mon 12 Oct — Calling models like an engineer
- **Learn:** OpenTelemetry semantic conventions for generative AI (the gen_ai.* span attributes); Claude tool use overview. (Structured outputs: known from Forksome. 15-min refresher only: `concepts/structured-outputs.md`.)
- **Build:** w2-inference/llm.py — one client function with streaming, Pydantic structured output, and a JSONL log of model, tokens in/out, time to first token (TTFT), tokens/sec and cost. Use the gen_ai.* names for the log fields.
- **Rust:** Comprehensive Rust Day 4 morning.
- **Post:** "Every LLM call has four numbers: TTFT, tokens/sec, tokens, cost."
- **Done when:** 20 calls are logged with gen_ai.* field names, and one structured extraction validates against its schema.

### Day 9 · Tue 13 Oct — Local inference on the M1
- **Learn:** kipply, Transformer Inference Arithmetic (KV cache and memory-bandwidth sections). The quantization section of the llama.cpp README.
- **Build:** run one 3B instruct model through Ollama at Q4_K_M and Q8_0, and through MLX LM at 4-bit. Record TTFT, tokens/sec and peak RAM. Point llm.py at Ollama's OpenAI-compatible endpoint.
- **Rust:** Comprehensive Rust Day 4 afternoon (Fundamentals done).
- **Post:** "My M1 runs a 3B model at X tokens/sec. Here's the memory math."
- **Done when:** a table of at least four configs, and your predicted decode speed (memory bandwidth ÷ model size in bytes) lands within 2× of measured.

### Day 10 · Wed 14 Oct — Serving theory and the first GPU
- **Learn:** PagedAttention / vLLM paper, sections 1–4. Anyscale, continuous batching.
- **Build:** rent one 24 GB GPU (RTX 4090, L4 or A10). Follow the vLLM quickstart: vllm serve Qwen/Qwen2.5-7B-Instruct. Call it from llm.py.
- **Rust:** Comprehensive Rust Concurrency, morning (threads, channels, Send/Sync).
- **Post:** "Serving 1 user and 50 users are different problems."
- **Done when:** the server answers and you've logged single-request TTFT and tokens/sec. Pod terminated.

### Day 11 · Thu 15 Oct — Benchmark day
- **Learn:** vLLM Benchmark CLI docs; Build a Reasoning Model appendix E, Batching and Throughput-Oriented Execution.
- **Build:** vllm bench serve at concurrency 1, 4, 16 and 64, for the FP16 model and an AWQ 4-bit version. Record throughput, p50/p95 TTFT, inter-token latency and GPU memory.
- **Rust:** Comprehensive Rust Concurrency, afternoon (async/await); Tokio tutorial, first three sections.
- **Post:** "Throughput goes up, latency goes up: the concurrency curve."
- **Done when:** results are saved as CSV and the pod is terminated.

### Day 12 · Fri 16 Oct — Speed tricks and cost
- **Learn:** LLM Engineer's Handbook ch. 8, Inference Optimization. Speculative decoding paper: abstract, figure 1, section 3.
- **Build:** a cost notebook — dollars per 1M output tokens for the M1, the rented GPU (hourly price ÷ measured throughput) and two API models; break-even requests/day for self-hosting.
- **Build (stretch):** speculative decoding in MLX LM with a small draft model.
- **Rust:** rust/loadgen v1 — reqwest + tokio, firing N concurrent chat requests at any OpenAI-compatible URL.
- **Post:** "When does self-hosting beat the API? My break-even math."
- **Done when:** one chart comparing cost per 1M tokens across the three options.

### Day 13 · Sat 17 Oct — Mini SLM router
- **Learn:** RouteLLM paper, sections 1–3.
- **Build:** a 60-prompt test set (20 factual, 20 extraction, 20 reasoning). A router (rules + the local 3B model as a cheap classifier) sends each prompt to the local model or an API model. Score answers with an LLM judge.
- **Rust:** loadgen v2 — p50/p95 latency, clap CLI; run it against local Ollama and an API. Read vLLM's Rust client vllm-bench for ideas.
- **Post:** "I cut API cost by X% by routing easy prompts to my laptop."
- **Build (stretch):** add a fourth config, the Forksome cascade: cheap model first, escalate to the strong model only when schema validation fails.
- **Done when:** a table of quality, cost and latency for always-local, always-API and routed.

### Day 14 · Sun 18 Oct — Review (light day)
- **Write:** blog post #2, "LLM inference on an M1 vs a rented GPU: real numbers".
- **Review:** scorecard; README for w2-inference/.
- **Rust:** loadgen README; publish the repo.
- **Done when:** the post is published and loadgen is public.

---

## Week 3 — Hybrid retrieval on FiQA (Days 15–21)

By Sunday you have a measured hybrid search engine over FiQA (57,638 finance forum posts, 648 test queries), plus a first /ask endpoint that answers with citations. In Rust, you write a BM25 scorer and a Qdrant ingest tool, and start an axum gateway that will sit in front of the app.

Core texts this week: Manning, Raghavan & Schütze, Introduction to Information Retrieval (free online), Qdrant's Hybrid Queries docs, and LLM Engineer's Handbook ch. 4 (re-skim) and ch. 9. Everything runs on the M1; Qdrant runs in Docker.

### Day 15 · Mon 19 Oct — Lexical search and a baseline
- **Learn:** Introduction to IR ch. 6 (tf-idf and the vector space model) and the Okapi BM25 section of ch. 11.
- **Build:** w3-retrieval/ — load FiQA, run a BM25 baseline with bm25s, score nDCG@10, Recall@100 and MRR@10 with ranx.
- **Rust:** start a BM25 scorer in Rust (tokenize, IDF, score) over 1,000 FiQA docs.
- **Post:** "BM25 is 30 years old and still hard to beat."
- **Done when:** baseline numbers are in results.csv.

### Day 16 · Tue 20 Oct — Dense retrieval
- **Learn:** Sentence Transformers docs on semantic search and bi-encoders. Browse the MTEB leaderboard to pick models.
- **Build:** embed the corpus on MPS with two small models (e.g. BAAI/bge-small-en-v1.5 and all-MiniLM-L6-v2); exact search in NumPy; evaluate. Note embedding time per 1,000 docs.
- **Rust:** finish the BM25 scorer; check its top-10 matches bm25s on 20 queries.
- **Post:** "Keyword search vs meaning search: where each one fails."
- **Done when:** dense numbers sit next to BM25 in results.csv, with 10 queries where they disagree.

### Day 17 · Wed 21 Oct — Qdrant
- **Learn:** Qdrant Hybrid Queries docs; re-skim LLM Engineer's Handbook ch. 4, RAG Feature Pipeline, for how it uses Qdrant.
- **Build:** Qdrant in Docker; one collection with a named dense vector and a sparse BM25 vector (via FastEmbed); upsert the full corpus; query each vector type separately.
- **Rust:** an ingest tool using the Qdrant Rust client that upserts from JSONL.
- **Post:** "Running a vector database on my laptop."
- **Done when:** both query types return the same top-10 as Days 15–16 (or you can explain why not).

### Day 18 · Thu 22 Oct — Fusion
- **Learn:** the original Reciprocal Rank Fusion paper (two pages).
- **Build:** hybrid search using Qdrant's prefetch + RRF; then try weighted and CombSUM fusion with ranx. Add p50 latency per method.
- **Rust:** time your Rust ingest against the Python one; batch size and concurrency sweep.
- **Post:** "Reciprocal Rank Fusion in one formula."
- **Done when:** a results table with BM25, dense, hybrid-RRF and hybrid-weighted (nDCG@10, Recall@100, p50 ms).

### Day 19 · Fri 23 Oct — Error analysis and filters
- **Learn:** Hamel Husain, Your AI Product Needs Evals (the error-analysis parts).
- **Build:** read 30 queries where hybrid misses; tag each failure (vocabulary gap, multi-part question, label noise, etc.) and count them. Add a payload field (e.g. a document length bucket) and try a filtered query.
- **Rust:** start rust/gateway with axum: a health route and a /search route that calls Qdrant through the Rust client.
- **Post:** "I read 30 search failures by hand. Here's what broke."
- **Done when:** a failure taxonomy with counts, and one fix tried with its before/after number.

### Day 20 · Sat 24 Oct — From search to answers
- **Learn:** LLM Engineer's Handbook ch. 9, RAG Inference Pipeline; Anthropic, Contextual Retrieval.
- **Build:** a FastAPI /ask endpoint — hybrid top-10, a prompt with numbered sources, a streamed answer with [1][2] citations via llm.py. Let your Week 2 router choose local or API.
- **Rust:** gateway forwards POST /ask to FastAPI and passes the stream through.
- **Post:** "From search to answers: RAG in 80 lines."
- **Done when:** 10 sample questions return cited answers you'd trust, through the gateway.

### Day 21 · Sun 25 Oct — Review (light day)
- **Write:** blog post #3, "BM25 vs dense vs hybrid on FiQA: what actually helped".
- **Review:** scorecard; README for w3-retrieval/.
- **Rust (if behind):** catch-up only if behind.
- **Done when:** the post is published.

---

## Week 4 — Reranking, evals, ship Portfolio #1 (Days 22–30)

By Day 30, "Ask FiQA" is live at a public URL: hybrid search, reranking, cited answers, and an eval page showing what each stage bought you. A Rust gateway in front of the app handles caching, rate limits and latency metrics. If the gateway slips, Python does those jobs and the gateway moves to month 2.

### Day 22 · Mon 26 Oct — Cross-encoder reranking
- **Learn:** Sentence Transformers cross-encoder usage and Retrieve & Re-Rank.
- **Build:** rerank hybrid top-50 → top-10 with cross-encoder/ms-marco-MiniLM-L6-v2 and BAAI/bge-reranker-base on MPS. Record the nDCG@10 gain and added latency.
- **Rust:** port your nDCG@10 and MRR scorer to Rust.
- **Post:** "Reranking: run the slow, smart model on only the top 50."
- **Done when:** two new rows in results.csv.

### Day 23 · Tue 27 Oct — Late interaction (ColBERT)
- **Learn:** ColBERT paper, sections 1–3. Qdrant tutorials: Multivectors and Late Interaction and Hybrid Search with Reranking.
- **Build:** a ColBERT rescoring stage inside one Qdrant query (hybrid prefetch 50 → ColBERT top 10) using FastEmbed's ColBERT. Compare with the cross-encoder on quality, latency and index size.
- **Rust:** make the scorer match ranx to 4 decimal places.
- **Post:** "Cross-encoder vs ColBERT: speed vs quality, measured."
- **Done when:** the results table has every retrieval config you've tried, sorted by nDCG@10.

### Day 24 · Wed 28 Oct — Evaluating answers, not just search
- **Learn:** LLM Engineer's Handbook ch. 7, Evaluating LLMs. Ragas available metrics.
- **Build:** a 40-question golden set from FiQA test queries; a make eval command that scores faithfulness, response relevancy and context precision for three configs and writes eval_report.json.
- **Rust:** publish the scorer as a small CLI.
- **Post:** "How I grade an AI's answers automatically, and where the judge lies."
- **Done when:** one command runs the full eval in under 10 minutes.

### Day 25 · Thu 29 Oct — The product UI
- **Learn:** LLM Engineer's Handbook ch. 10, Inference Pipeline Deployment (first half).
- **Build:** a Next.js front end (your home turf): question box, streamed answer, clickable citations that open the source post, a mode switch (BM25 / hybrid / hybrid + rerank), and per-stage latency and cost under each answer.
- **Rust:** gateway adds an in-memory cache for repeat questions and a token-bucket rate limit.
- **Post:** a 60-second screen recording of the app answering a real question.
- **Done when:** the full flow works locally end to end, through the gateway.

### Day 26 · Fri 30 Oct — Eval page and guardrails
- **Learn:** LLM Engineer's Handbook ch. 10 (second half).
- **Build:** an /evals page that renders results.csv and eval_report.json as charts. In Python: max-token caps and a "no good source found" reply when the top retrieval score is low.
- **Rust:** gateway records p50/p95 latency per route at /metrics; show it on the evals page.
- **Post:** "The page that proves my RAG works."
- **Done when:** a weak question gets the fallback reply, not a made-up answer.

### Day 27 · Sat 31 Oct — Deploy
- **Build:** index into Qdrant Cloud's free tier (1 GB RAM, enough for FiQA with a small embedding model); gateway and backend on Fly.io or Render; front end on Vercel; spend caps on every API key. A README with an architecture diagram, the results table and local setup steps.
- **Rust:** gateway deployed in front of the backend (this is part of the Build today).
- **Post:** "Ask FiQA is live. Try to break it."
- **Done when:** the public URL works from your phone.

### Day 28 · Sun 1 Nov — Review (light day)
- **Write:** blog post #4, "Building Ask FiQA: a measured RAG system end to end", plus a 3–5 minute YouTube walkthrough.
- **Review:** scorecard.
- **Done when:** both are published.

### Day 29 · Mon 2 Nov — Portfolio and profile
- **Build:** personal site with /projects (4 entries) and /blog (4 posts); GitHub profile README with pinned repos; LinkedIn headline along the lines of "Senior product engineer building LLM systems: RAG, inference, evals".
- **Research:** read 10 remote LLM / AI engineer job posts at your target level; list the skills they ask for that you can't yet show. That gap list feeds Days 31–60.
- **Rust:** gateway README and a post: "Why I put a Rust gateway in front of my Python RAG".
- **Done when:** site live, profiles updated, gap list written.

### Day 30 · Tue 3 Nov — Exit test and next plan
- **Exit test:** run the exit test (`exit-test.md`) and score it honestly.
- **Review:** the parking lot: keep, drop or schedule each item.
- **Plan:** draft Days 31–60: tool calling, your own agent loop, a durable runtime (Redis/Postgres), an MCP server (a Rust MCP server is a natural fit), and Handbook ch. 5–6 for fine-tuning. Applications start at Day 45.
- **Post:** launch post on IG and LinkedIn linking the app and the four write-ups.

---

## Days 31–112 roadmap

Days 31–112 (Wed 4 Nov to Sun 24 Jan) cover Weeks 5–16 of your LLM / Agent Engineer plan. Two changes: the agent loop comes before agentic RAG, and fine-tuning is added. At each checkpoint (Days 30, 60, 90), expand the next block into daily entries in the same format as Days 1–30. The run-sheet and rules stay the same.

| Day | Date | Checkpoint |
|---|---|---|
| 30 | Tue 3 Nov | Ask FiQA live (Portfolio #1) |
| 44 | Tue 17 Nov | Tool-using agent live (Portfolio #2); applications start on Day 45 |
| 60 | Thu 3 Dec | Plan review; expand Days 61–90 |
| 72 | Tue 15 Dec | Durable agent runtime (Portfolio #3) |
| 90 | Sat 2 Jan | Plan review |
| 100 | Tue 12 Jan | Secure execution environment (Portfolio #4) |
| 112 | Sun 24 Jan | Capstone: financial research agent |

### Days 31–44 · 4–17 Nov — Tool calling and your own agent loop (your Weeks 7–8)
- **Learn:** function calling, JSON Schema, argument validation, tool errors and retries; ReAct, planning, reflection, stopping conditions, agents as state machines. Anthropic, Building Effective AI Agents; ReAct paper.
- **Build:** a lightweight agent runtime without LangChain. It needs a tool registry with schema validation, retries with backoff, a step budget, stopping rules and a trace log per run. Tools: search (Ask FiQA retrieval), database (Postgres), calculator, python, and one market-data API.
- **Rust:** the tool-argument validator in Rust (serde + JSON Schema).
- **Deliverable (Portfolio #2):** a finance agent that answers multi-step questions with its tools, with a trace viewer in the UI.
- **Job track from Day 45:** five targeted applications a week, plus 2 hours a week of LLM system-design interview prep.

### Days 45–58 · 18 Nov–1 Dec — Agentic RAG and fine-tuning (your Weeks 5–6, reshaped)
- **Learn:** query rewriting, decomposition, multi-hop retrieval, retrieval confidence, answer verification. Papers: Self-RAG, CRAG, GraphRAG (skim). LLM Engineer's Handbook ch. 5–6 (SFT, preference alignment).
- **Build, Days 45–51:** wire the agent loop into Ask FiQA — plan, search, judge the retrieval, search again, answer, verify. Measure against the Day 30 baseline on multi-hop questions. GraphRAG gets a 3-day experiment and stays only if it beats hybrid on multi-hop.
- **Build, Days 52–58:** LoRA fine-tune of a 0.5–1.5B model (MLX LM on the M1, or a rented GPU) for one narrow job, such as query rewriting or the router classifier. Compare it with the prompted base model and an API model.
- **Rust:** gateway v2 — API keys and per-key budgets.
- **Deliverable:** two posts — "Agentic RAG vs plain RAG on multi-hop finance questions" and "Fine-tuning a 1B model to replace an API call".

### Days 59–72 · 2–15 Dec — Durable agent runtime (your Weeks 9–10)
- **Learn:** stateless services, session state in Redis, durable state in Postgres, checkpoints, event sourcing, idempotency keys. Designing Data-Intensive Applications (Kleppmann): the chapters on transactions and on stream processing.
- **Build:** each agent run stored as an event log in Postgres, with Redis for hot session state. Add pause, resume, cancel, timeout and retry, with idempotent tool calls. Kill the container mid-run and it resumes.
- **Rust:** a worker that claims runs from Postgres (FOR UPDATE SKIP LOCKED) and enforces timeouts.
- **Deliverable (Portfolio #3):** Durable Agent Runtime, with a demo video of a kill -9 mid-run followed by a clean resume.

### Days 73–86 · 16–29 Dec — MCP and multi-agent (your Weeks 11–12)
- **Learn:** the MCP specification (hosts, clients, servers; tools, resources, prompts; capability negotiation; auth). Multi-agent patterns: orchestrator-workers, supervisor, evaluator-optimizer.
- **Build:** an MCP server exposing market_data, database, filesystem (read-only), python and search. Connect it to an existing MCP host and to your own runtime. Then build an orchestrator with research, coding and reviewer agents: shared state, isolation, and handling for a stalled agent.
- **Rust:** write the MCP server in Rust with the official SDK, rmcp.
- **Note:** this block spans the holidays. Lighter days are fine; the calendar rule still holds.

### Days 87–100 · 30 Dec–12 Jan — Sandboxing and agent security (your Weeks 13–14)
- **Learn:** Docker isolation, microVMs (Firecracker), filesystem and network isolation, resource limits, timeouts. E2B docs. OWASP Top 10 for LLM Applications: prompt injection, excessive agency, improper output handling, unbounded consumption.
- **Build:** the python tool runs in a sandbox — Docker first, then E2B for comparison — with no network and CPU, memory and time limits. Add a permission engine with allow/approve/deny policies (READ allow, PYTHON approve, TRANSFER deny). Write a red-team set of 30 prompt-injection and tool-poisoning attacks and report pass rates.
- **Rust:** the permission engine and sandbox runner in Rust, with a policy file and an audit log.
- **Deliverable (Portfolio #4):** Secure Execution Environment plus an attack report. This doubles as your Coding-Agent Safety Evaluator idea.

### Days 101–107 · 13–19 Jan — Evaluation and observability (your Week 15)
- **Learn:** Ragas agent metrics (tool-call accuracy, agent goal accuracy); trace-based evaluation; OpenTelemetry basics.
- **Build:** golden datasets for each system; a regression suite in CI; traces with per-step latency, cost, tool accuracy and safety flags; one dashboard across all four portfolio projects.

### Days 108–112 · 20–24 Jan — Capstone: financial research agent (your Week 16)
- **Build:** orchestrator → research agent (MCP + hybrid RAG + reranking), coding agent (sandbox), reviewer agent (evaluator). It runs on Redis + Postgres state, under the permission system, with evals and tracing. Add one crypto/DeFi data source.
- **Deliverable:** a live demo, a 5-minute video and a write-up.

---

## Resource index

| Resource | Type | Days |
|---|---|---|
| Karpathy, Neural Networks: Zero to Hero | Video course (free) | 1, 2, 4, 7 |
| Raschka, Build a Large Language Model (From Scratch) (code) | Book or repo notebooks, ch. 2–5 | 2–5 |
| Raschka, Build a Reasoning Model (From Scratch) (code) | Your book: ch. 2, appendices C and E | 6, 11 |
| Iusztin & Labonne, LLM Engineer's Handbook | Your book: ch. 4, 7, 8, 9, 10 | 12, 17, 20, 24–26 |
| Manning et al., Introduction to Information Retrieval | Book (free), ch. 6, 11 | 15 |
| rustlings, Comprehensive Rust, Tokio tutorial, axum | Rust course + exercises | 1–11, then projects |
| vLLM docs, MLX LM, Ollama, llama.cpp | Tools | 9–13 |
| Qdrant docs, FastEmbed, bm25s, ranx, Ragas | Tools | 15–27 |
| Papers: Attention, PagedAttention, Speculative decoding, RouteLLM, RRF, ColBERT | Papers (read the named sections only) | 3, 10, 12, 13, 18, 23 |
| Your watch list (YC paper club etc.) | Videos | Optional evening slot only |
