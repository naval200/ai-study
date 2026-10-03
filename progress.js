window.STUDY_PROGRESS = {
 "generated": "2026-10-04",
 "timezone": "Asia/Kolkata",
 "curriculum": "AI Study Plan — Days 1–30",
 "start": "2026-10-05",
 "end": "2026-11-03",
 "dayNum": 0,
 "totalDays": 30,
 "pace": "⚪ Not started",
 "paceKind": "not-started",
 "streak": 1,
 "missedRun": 0,
 "overall": {
  "done": 4,
  "total": 149
 },
 "exit": {
  "done": 0,
  "total": 9,
  "pass": 7,
  "items": [
   {
    "text": "Ask FiQA is live at a public URL, with an eval page",
    "state": "todo"
   },
   {
    "text": "Four public repos: w1-gpt, w2-inference, w3-retrieval, w4-ask-fiqa",
    "state": "todo"
   },
   {
    "text": "Four blog posts published, plus one YouTube walkthrough",
    "state": "todo"
   },
   {
    "text": "At least 20 posts published (any format: LinkedIn, X, carousel, YouTube; logged in `posts/published.md`)",
    "state": "todo"
   },
   {
    "text": "Explain from memory why decode speed is limited by memory bandwidth, and estimate tokens/sec for a 7B model on the M1",
    "state": "todo"
   },
   {
    "text": "State your nDCG@10 for BM25, hybrid and hybrid + rerank, and what each cost in latency",
    "state": "todo"
   },
   {
    "text": "State your self-hosting break-even point vs an API, in requests per day",
    "state": "todo"
   },
   {
    "text": "Rust: rustlings 96/96, Comprehensive Rust Fundamentals + Concurrency done; loadgen, scorer CLI and gateway published",
    "state": "todo"
   },
   {
    "text": "Portfolio site live; LinkedIn and GitHub updated; gap list written",
    "state": "todo"
   }
  ]
 },
 "posts": 0,
 "reviewsDue": [],
 "weeks": {
  "1": {
   "title": "LLM fundamentals",
   "goal": "By Sunday you have a GPT you wrote yourself, trained on TinyStories on the M1, plus a KV cache and three sampling methods. You've also run Qwen3 from scratch. On the Rust side, rustlings is finished (96/96) and you're through Comprehensive Rust Day 3."
  },
  "2": {
   "title": "Inference economics",
   "goal": "By Sunday you can say, with your own numbers, what a model costs per million tokens on the M1, on a rented GPU and through an API, and you have a router that picks between them. On the Rust side, you finish Comprehensive Rust (Fundamentals + Concurrency) and publish loadgen, an async load tester."
  },
  "3": {
   "title": "Hybrid retrieval on FiQA",
   "goal": "By Sunday you have a measured hybrid search engine over FiQA (57,638 finance forum posts, 648 test queries), plus a first /ask endpoint that answers with citations. In Rust, you write a BM25 scorer and a Qdrant ingest tool, and start an axum gateway that will sit in front of the app."
  },
  "4": {
   "title": "Reranking, evals, ship Portfolio #1",
   "goal": "By Day 30, \"Ask FiQA\" is live at a public URL: hybrid search, reranking, cited answers, and an eval page showing what each stage bought you. A Rust gateway in front of the app handles caching, rate limits and latency metrics. If the gateway slips, Python does those jobs and the gateway moves to month 2."
  }
 },
 "tracks": [
  {
   "file": "courses/comprehensive-rust.md",
   "title": "Comprehensive Rust (Google)",
   "done": 0,
   "total": 11,
   "unit": "parts"
  },
  {
   "file": "courses/karpathy-zero-to-hero.md",
   "title": "Karpathy — Neural Networks: Zero to Hero",
   "done": 0,
   "total": 4,
   "unit": "parts"
  },
  {
   "file": "courses/rustlings.md",
   "title": "rustlings",
   "done": 70,
   "total": 96,
   "unit": "exercises"
  },
  {
   "file": "books/build-a-reasoning-model.md",
   "title": "Build a Reasoning Model (From Scratch) (Raschka)",
   "done": 0,
   "total": 4,
   "unit": "chapters"
  },
  {
   "file": "books/build-an-llm-from-scratch.md",
   "title": "Build a Large Language Model (From Scratch) (Raschka)",
   "done": 0,
   "total": 4,
   "unit": "chapters"
  },
  {
   "file": "books/intro-to-information-retrieval.md",
   "title": "Introduction to Information Retrieval (Manning, Raghavan & Schütze)",
   "done": 0,
   "total": 2,
   "unit": "chapters"
  },
  {
   "file": "books/llm-engineers-handbook.md",
   "title": "LLM Engineer's Handbook (Iusztin & Labonne)",
   "done": 4,
   "total": 10,
   "unit": "chapters"
  }
 ],
 "days": [
  {
   "day": 0,
   "date": "2026-10-04",
   "weekday": "Sun",
   "week": 0,
   "title": "Setup (weekend before Day 1, ~3 hrs)",
   "type": "setup",
   "hours": 0,
   "status": "today",
   "file": "days/day00.md",
   "log": {
    "done": "uv env (Python 3.11.9, torch 2.14.1) with MPS True; Ollama 0.35.1 + qwen2.5:3b answers; Docker 20.10 running; RAM is 16 GB.",
    "blocked": "repo not pushed to GitHub yet; accounts and spend caps still to do (by hand).",
    "next": "open Karpathy's micrograd video and create projects/w1-gpt/micrograd/."
   },
   "items": [
    {
     "text": "**Repo:** GitHub monorepo ai-study/ with w1-gpt/, w2-inference/, w3-retrieval/, w4-ask-fiqa/, rust/ (here: `projects/`).",
     "label": "Repo",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Python:** Python 3.11+ via uv, then PyTorch with MPS. Check `torch.backends.mps.is_available()`.",
     "label": "Python",
     "section": "Plan",
     "state": "done",
     "optional": false
    },
    {
     "text": "**Tools:** Ollama and Docker Desktop (for Qdrant in Week 3).",
     "label": "Tools",
     "section": "Plan",
     "state": "done",
     "optional": false
    },
    {
     "text": "**Accounts:** GPU cloud (RunPod or Modal), OpenAI or Anthropic API, Hugging Face — all with spend caps.",
     "label": "Accounts",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Budget:** ~$15–25 of rented GPU time (Days 10–11) plus a few dollars of API calls.",
     "label": "Budget",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**RAM check:** find out the M1's RAM and write it into STUDY.md.",
     "label": "RAM check",
     "section": "Plan",
     "state": "done",
     "optional": false
    },
    {
     "text": "`torch.backends.mps.is_available()` is True and `ollama run` answers a prompt.",
     "label": "Done when",
     "section": "Done when",
     "state": "done",
     "optional": false
    }
   ]
  },
  {
   "day": 1,
   "date": "2026-10-05",
   "weekday": "Mon",
   "week": 1,
   "title": "Backprop from scratch",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day01.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Karpathy, building micrograd (2h25m). Code along; don't just watch.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** w1-gpt/micrograd/ — a Value class with autograd, then a tiny MLP trained on a toy dataset.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** rustlings 71–75; Comprehensive Rust Day 1 morning.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Backprop in 60 seconds: the chain rule, with code.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "loss goes down and you can explain backward() without notes.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 2,
   "date": "2026-10-06",
   "weekday": "Tue",
   "week": 1,
   "title": "What a language model predicts",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day02.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Karpathy, makemore part 1 (1h57m). Raschka ch. 2, Working with Text Data.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a bigram character model; then the sliding-window dataset and embedding layer from ch. 2.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** rustlings 76–80; Comprehensive Rust Day 1 afternoon.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"An LLM is a next-token probability table. Here's the smallest one.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "your bigram model samples name-like strings, and you can explain why cross-entropy is the loss.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 3,
   "date": "2026-10-07",
   "weekday": "Wed",
   "week": 1,
   "title": "Attention",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day03.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Jay Alammar, The Illustrated Transformer. Raschka ch. 3, Coding Attention Mechanisms. Paper: Attention Is All You Need, section 3 only.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** scaled dot-product attention, causal mask, multi-head attention, with shape asserts in a test file.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** rustlings 81–85; Comprehensive Rust Day 2 morning.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Q, K, V explained with a library-search analogy.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "your multi-head attention matches torch.nn.functional.scaled_dot_product_attention within 1e-5.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 4,
   "date": "2026-10-08",
   "weekday": "Thu",
   "week": 1,
   "title": "Build the GPT",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day04.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Karpathy, Let's build GPT (1h56m). Raschka ch. 4, Implementing a GPT Model from Scratch.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a full GPT (embeddings, blocks, LayerNorm, residuals); train on Tiny Shakespeare on MPS.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** rustlings 86–90; Comprehensive Rust Day 2 afternoon.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"I trained a GPT on my MacBook. Here's what it wrote.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "validation loss below about 2.0 and the samples look like play dialogue.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 5,
   "date": "2026-10-09",
   "weekday": "Fri",
   "week": 1,
   "title": "Pretraining and sampling",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day05.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Raschka ch. 5, Pretraining on Unlabeled Data (loss curves, temperature, top-k).",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** switch the data to TinyStories (a 50–100 MB subset), train a ~10M-parameter model, and implement temperature, top-k and top-p sampling.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** rustlings 91–96 (done); Comprehensive Rust Day 3 morning.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Temperature, top-k, top-p: same model, three personalities.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "the model writes coherent three-sentence stories, and you have a sampling comparison table.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 6,
   "date": "2026-10-10",
   "weekday": "Sat",
   "week": 1,
   "title": "KV cache and a real modern model",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day06.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Build a Reasoning Model ch. 2, Generating Text with a Pre-trained LLM, and appendix C (Qwen3 source code) — note how RoPE, RMSNorm and grouped-query attention differ from your GPT.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** add a KV cache to your GPT and measure tokens/sec with and without it. Then run the book's from-scratch Qwen3 0.6B on MPS and time it the same way.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** Comprehensive Rust Day 3 afternoon.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"The KV cache made my model N× faster. Here's why.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "you have both speedup numbers and can say why decode time grows without the cache.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 7,
   "date": "2026-10-11",
   "weekday": "Sun",
   "week": 1,
   "title": "Tokenizers and review (light day)",
   "type": "light",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day07.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Karpathy, Let's build the GPT Tokenizer (2h13m, at 1.5×). Play with Tiktokenizer.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build (stretch):** BPE train/encode/decode following minbpe.",
     "label": "Build (stretch)",
     "section": "Plan",
     "state": "todo",
     "optional": true
    },
    {
     "text": "**Write:** blog post #1, \"Building a GPT from scratch in a week on an M1\", with the loss curve and the KV-cache numbers.",
     "label": "Write",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Review:** fill the scorecard; tidy w1-gpt/ with a README.",
     "label": "Review",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust (if behind):** catch-up only if behind.",
     "label": "Rust (if behind)",
     "section": "Plan",
     "state": "todo",
     "optional": true
    },
    {
     "text": "the post is published and the repo is public.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 8,
   "date": "2026-10-12",
   "weekday": "Mon",
   "week": 2,
   "title": "Calling models like an engineer",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day08.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** OpenAI Structured Outputs guide; Claude tool use overview.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** w2-inference/llm.py — one client function with streaming, Pydantic structured output, and a JSONL log of model, tokens in/out, time to first token (TTFT), tokens/sec and cost.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** Comprehensive Rust Day 4 morning.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Every LLM call has four numbers: TTFT, tokens/sec, tokens, cost.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "20 calls are logged and one structured extraction validates against its schema.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 9,
   "date": "2026-10-13",
   "weekday": "Tue",
   "week": 2,
   "title": "Local inference on the M1",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day09.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** kipply, Transformer Inference Arithmetic (KV cache and memory-bandwidth sections). The quantization section of the llama.cpp README.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** run one 3B instruct model through Ollama at Q4_K_M and Q8_0, and through MLX LM at 4-bit. Record TTFT, tokens/sec and peak RAM. Point llm.py at Ollama's OpenAI-compatible endpoint.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** Comprehensive Rust Day 4 afternoon (Fundamentals done).",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"My M1 runs a 3B model at X tokens/sec. Here's the memory math.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "a table of at least four configs, and your predicted decode speed (memory bandwidth ÷ model size in bytes) lands within 2× of measured.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 10,
   "date": "2026-10-14",
   "weekday": "Wed",
   "week": 2,
   "title": "Serving theory and the first GPU",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day10.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** PagedAttention / vLLM paper, sections 1–4. Anyscale, continuous batching.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** rent one 24 GB GPU (RTX 4090, L4 or A10). Follow the vLLM quickstart: vllm serve Qwen/Qwen2.5-7B-Instruct. Call it from llm.py.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** Comprehensive Rust Concurrency, morning (threads, channels, Send/Sync).",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Serving 1 user and 50 users are different problems.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "the server answers and you've logged single-request TTFT and tokens/sec. Pod terminated.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 11,
   "date": "2026-10-15",
   "weekday": "Thu",
   "week": 2,
   "title": "Benchmark day",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day11.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** vLLM Benchmark CLI docs; Build a Reasoning Model appendix E, Batching and Throughput-Oriented Execution.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** vllm bench serve at concurrency 1, 4, 16 and 64, for the FP16 model and an AWQ 4-bit version. Record throughput, p50/p95 TTFT, inter-token latency and GPU memory.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** Comprehensive Rust Concurrency, afternoon (async/await); Tokio tutorial, first three sections.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Throughput goes up, latency goes up: the concurrency curve.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "results are saved as CSV and the pod is terminated.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 12,
   "date": "2026-10-16",
   "weekday": "Fri",
   "week": 2,
   "title": "Speed tricks and cost",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day12.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** LLM Engineer's Handbook ch. 8, Inference Optimization. Speculative decoding paper: abstract, figure 1, section 3.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a cost notebook — dollars per 1M output tokens for the M1, the rented GPU (hourly price ÷ measured throughput) and two API models; break-even requests/day for self-hosting.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build (stretch):** speculative decoding in MLX LM with a small draft model.",
     "label": "Build (stretch)",
     "section": "Plan",
     "state": "todo",
     "optional": true
    },
    {
     "text": "**Rust:** rust/loadgen v1 — reqwest + tokio, firing N concurrent chat requests at any OpenAI-compatible URL.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"When does self-hosting beat the API? My break-even math.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "one chart comparing cost per 1M tokens across the three options.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 13,
   "date": "2026-10-17",
   "weekday": "Sat",
   "week": 2,
   "title": "Mini SLM router",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day13.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** RouteLLM paper, sections 1–3.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a 60-prompt test set (20 factual, 20 extraction, 20 reasoning). A router (rules + the local 3B model as a cheap classifier) sends each prompt to the local model or an API model. Score answers with an LLM judge.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** loadgen v2 — p50/p95 latency, clap CLI; run it against local Ollama and an API. Read vLLM's Rust client vllm-bench for ideas.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"I cut API cost by X% by routing easy prompts to my laptop.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "a table of quality, cost and latency for always-local, always-API and routed.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 14,
   "date": "2026-10-18",
   "weekday": "Sun",
   "week": 2,
   "title": "Review (light day)",
   "type": "light",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day14.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Write:** blog post #2, \"LLM inference on an M1 vs a rented GPU: real numbers\".",
     "label": "Write",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Review:** scorecard; README for w2-inference/.",
     "label": "Review",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** loadgen README; publish the repo.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "the post is published and loadgen is public.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 15,
   "date": "2026-10-19",
   "weekday": "Mon",
   "week": 3,
   "title": "Lexical search and a baseline",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day15.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Introduction to IR ch. 6 (tf-idf and the vector space model) and the Okapi BM25 section of ch. 11.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** w3-retrieval/ — load FiQA, run a BM25 baseline with bm25s, score nDCG@10, Recall@100 and MRR@10 with ranx.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** start a BM25 scorer in Rust (tokenize, IDF, score) over 1,000 FiQA docs.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"BM25 is 30 years old and still hard to beat.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "baseline numbers are in results.csv.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 16,
   "date": "2026-10-20",
   "weekday": "Tue",
   "week": 3,
   "title": "Dense retrieval",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day16.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Sentence Transformers docs on semantic search and bi-encoders. Browse the MTEB leaderboard to pick models.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** embed the corpus on MPS with two small models (e.g. BAAI/bge-small-en-v1.5 and all-MiniLM-L6-v2); exact search in NumPy; evaluate. Note embedding time per 1,000 docs.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** finish the BM25 scorer; check its top-10 matches bm25s on 20 queries.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Keyword search vs meaning search: where each one fails.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "dense numbers sit next to BM25 in results.csv, with 10 queries where they disagree.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 17,
   "date": "2026-10-21",
   "weekday": "Wed",
   "week": 3,
   "title": "Qdrant",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day17.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Qdrant Hybrid Queries docs; re-skim LLM Engineer's Handbook ch. 4, RAG Feature Pipeline, for how it uses Qdrant.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** Qdrant in Docker; one collection with a named dense vector and a sparse BM25 vector (via FastEmbed); upsert the full corpus; query each vector type separately.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** an ingest tool using the Qdrant Rust client that upserts from JSONL.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Running a vector database on my laptop.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "both query types return the same top-10 as Days 15–16 (or you can explain why not).",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 18,
   "date": "2026-10-22",
   "weekday": "Thu",
   "week": 3,
   "title": "Fusion",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day18.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** the original Reciprocal Rank Fusion paper (two pages).",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** hybrid search using Qdrant's prefetch + RRF; then try weighted and CombSUM fusion with ranx. Add p50 latency per method.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** time your Rust ingest against the Python one; batch size and concurrency sweep.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Reciprocal Rank Fusion in one formula.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "a results table with BM25, dense, hybrid-RRF and hybrid-weighted (nDCG@10, Recall@100, p50 ms).",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 19,
   "date": "2026-10-23",
   "weekday": "Fri",
   "week": 3,
   "title": "Error analysis and filters",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day19.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Hamel Husain, Your AI Product Needs Evals (the error-analysis parts).",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** read 30 queries where hybrid misses; tag each failure (vocabulary gap, multi-part question, label noise, etc.) and count them. Add a payload field (e.g. a document length bucket) and try a filtered query.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** start rust/gateway with axum: a health route and a /search route that calls Qdrant through the Rust client.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"I read 30 search failures by hand. Here's what broke.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "a failure taxonomy with counts, and one fix tried with its before/after number.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 20,
   "date": "2026-10-24",
   "weekday": "Sat",
   "week": 3,
   "title": "From search to answers",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day20.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** LLM Engineer's Handbook ch. 9, RAG Inference Pipeline; Anthropic, Contextual Retrieval.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a FastAPI /ask endpoint — hybrid top-10, a prompt with numbered sources, a streamed answer with [1][2] citations via llm.py. Let your Week 2 router choose local or API.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** gateway forwards POST /ask to FastAPI and passes the stream through.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"From search to answers: RAG in 80 lines.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "10 sample questions return cited answers you'd trust, through the gateway.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 21,
   "date": "2026-10-25",
   "weekday": "Sun",
   "week": 3,
   "title": "Review (light day)",
   "type": "light",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day21.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Write:** blog post #3, \"BM25 vs dense vs hybrid on FiQA: what actually helped\".",
     "label": "Write",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Review:** scorecard; README for w3-retrieval/.",
     "label": "Review",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust (if behind):** catch-up only if behind.",
     "label": "Rust (if behind)",
     "section": "Plan",
     "state": "todo",
     "optional": true
    },
    {
     "text": "the post is published.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 22,
   "date": "2026-10-26",
   "weekday": "Mon",
   "week": 4,
   "title": "Cross-encoder reranking",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day22.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** Sentence Transformers cross-encoder usage and Retrieve & Re-Rank.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** rerank hybrid top-50 → top-10 with cross-encoder/ms-marco-MiniLM-L6-v2 and BAAI/bge-reranker-base on MPS. Record the nDCG@10 gain and added latency.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** port your nDCG@10 and MRR scorer to Rust.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Reranking: run the slow, smart model on only the top 50.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "two new rows in results.csv.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 23,
   "date": "2026-10-27",
   "weekday": "Tue",
   "week": 4,
   "title": "Late interaction (ColBERT)",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day23.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** ColBERT paper, sections 1–3. Qdrant tutorials: Multivectors and Late Interaction and Hybrid Search with Reranking.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a ColBERT rescoring stage inside one Qdrant query (hybrid prefetch 50 → ColBERT top 10) using FastEmbed's ColBERT. Compare with the cross-encoder on quality, latency and index size.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** make the scorer match ranx to 4 decimal places.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Cross-encoder vs ColBERT: speed vs quality, measured.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "the results table has every retrieval config you've tried, sorted by nDCG@10.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 24,
   "date": "2026-10-28",
   "weekday": "Wed",
   "week": 4,
   "title": "Evaluating answers, not just search",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day24.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** LLM Engineer's Handbook ch. 7, Evaluating LLMs. Ragas available metrics.",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a 40-question golden set from FiQA test queries; a make eval command that scores faithfulness, response relevancy and context precision for three configs and writes eval_report.json.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** publish the scorer as a small CLI.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"How I grade an AI's answers automatically, and where the judge lies.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "one command runs the full eval in under 10 minutes.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 25,
   "date": "2026-10-29",
   "weekday": "Thu",
   "week": 4,
   "title": "The product UI",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day25.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** LLM Engineer's Handbook ch. 10, Inference Pipeline Deployment (first half).",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** a Next.js front end (your home turf): question box, streamed answer, clickable citations that open the source post, a mode switch (BM25 / hybrid / hybrid + rerank), and per-stage latency and cost under each answer.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** gateway adds an in-memory cache for repeat questions and a token-bucket rate limit.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** a 60-second screen recording of the app answering a real question.",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "the full flow works locally end to end, through the gateway.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 26,
   "date": "2026-10-30",
   "weekday": "Fri",
   "week": 4,
   "title": "Eval page and guardrails",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day26.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Learn:** LLM Engineer's Handbook ch. 10 (second half).",
     "label": "Learn",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Build:** an /evals page that renders results.csv and eval_report.json as charts. In Python: max-token caps and a \"no good source found\" reply when the top retrieval score is low.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** gateway records p50/p95 latency per route at /metrics; show it on the evals page.",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"The page that proves my RAG works.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "a weak question gets the fallback reply, not a made-up answer.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 27,
   "date": "2026-10-31",
   "weekday": "Sat",
   "week": 4,
   "title": "Deploy",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day27.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Build:** index into Qdrant Cloud's free tier (1 GB RAM, enough for FiQA with a small embedding model); gateway and backend on Fly.io or Render; front end on Vercel; spend caps on every API key. A README with an architecture diagram, the results table and local setup steps.",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** gateway deployed in front of the backend (this is part of the Build today).",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** \"Ask FiQA is live. Try to break it.\"",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "the public URL works from your phone.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 28,
   "date": "2026-11-01",
   "weekday": "Sun",
   "week": 4,
   "title": "Review (light day)",
   "type": "light",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day28.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Write:** blog post #4, \"Building Ask FiQA: a measured RAG system end to end\", plus a 3–5 minute YouTube walkthrough.",
     "label": "Write",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Review:** scorecard.",
     "label": "Review",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "both are published.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 29,
   "date": "2026-11-02",
   "weekday": "Mon",
   "week": 4,
   "title": "Portfolio and profile",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day29.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Build:** personal site with /projects (4 entries) and /blog (4 posts); GitHub profile README with pinned repos; LinkedIn headline along the lines of \"Senior product engineer building LLM systems: RAG, inference, evals\".",
     "label": "Build",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Research:** read 10 remote LLM / AI engineer job posts at your target level; list the skills they ask for that you can't yet show. That gap list feeds Days 31–60.",
     "label": "Research",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Rust:** gateway README and a post: \"Why I put a Rust gateway in front of my Python RAG\".",
     "label": "Rust",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "site live, profiles updated, gap list written.",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  },
  {
   "day": 30,
   "date": "2026-11-03",
   "weekday": "Tue",
   "week": 4,
   "title": "Exit test and next plan",
   "type": "core",
   "hours": 0,
   "status": "upcoming",
   "file": "days/day30.md",
   "log": {
    "done": "",
    "blocked": "",
    "next": ""
   },
   "items": [
    {
     "text": "**Exit test:** run the exit test (`exit-test.md`) and score it honestly.",
     "label": "Exit test",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Review:** the parking lot: keep, drop or schedule each item.",
     "label": "Review",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Plan:** draft Days 31–60: tool calling, your own agent loop, a durable runtime (Redis/Postgres), an MCP server (a Rust MCP server is a natural fit), and Handbook ch. 5–6 for fine-tuning. Applications start at Day 45.",
     "label": "Plan",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "**Post:** launch post on IG and LinkedIn linking the app and the four write-ups.",
     "label": "Post",
     "section": "Plan",
     "state": "todo",
     "optional": false
    },
    {
     "text": "All plan items above are done",
     "label": "Done when",
     "section": "Done when",
     "state": "todo",
     "optional": false
    }
   ]
  }
 ]
};
