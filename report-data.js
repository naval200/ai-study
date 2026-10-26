window.STUDY_REPORT = {
 "generated": "2026-10-26",
 "concepts": [
  {
   "slug": "backprop-gradient-accumulation",
   "title": "Backprop and gradient accumulation",
   "level": "explain",
   "target": "explain",
   "last": "solid",
   "group": "reliable",
   "lastChecked": "2026-10-07",
   "next": "2026-10-10",
   "overdue": true,
   "misses": [
    {
     "note": "Says `+=` is for many training samples. Real reason: fan-out sums path gradients. Fixed on 2026-10-07.",
     "count": 1
    }
   ]
  },
  {
   "slug": "cross-entropy-nll",
   "title": "Cross-entropy and negative log likelihood",
   "level": "aware",
   "target": "explain",
   "last": "fragile",
   "group": "fragile",
   "lastChecked": "2026-10-07",
   "next": "2026-10-08",
   "overdue": true,
   "misses": [
    {
     "note": "Sure of a negative loss value. Loss from -log(p) is positive.",
     "count": 1
    }
   ]
  },
  {
   "slug": "eval-repair-loop",
   "title": "Eval → repair loops and rules-first gates",
   "level": "aware",
   "target": "explain",
   "last": "",
   "group": "untested",
   "lastChecked": "",
   "next": "2026-10-11",
   "overdue": true,
   "misses": []
  },
  {
   "slug": "fuzzy-entity-resolution",
   "title": "Layered entity resolution (alias → fuzzy → LLM)",
   "level": "aware",
   "target": "explain",
   "last": "",
   "group": "untested",
   "lastChecked": "",
   "next": "2026-10-18",
   "overdue": true,
   "misses": []
  },
  {
   "slug": "llm-cascade-routing",
   "title": "Model cascades and routing",
   "level": "aware",
   "target": "explain",
   "last": "",
   "group": "untested",
   "lastChecked": "",
   "next": "2026-10-11",
   "overdue": true,
   "misses": []
  },
  {
   "slug": "self-attention-and-causal-mask",
   "title": "self attention and causal mask",
   "level": "explain",
   "target": "explain",
   "last": "fragile",
   "group": "fragile",
   "lastChecked": "2026-10-26",
   "next": "2026-10-27",
   "overdue": false,
   "misses": [
    {
     "note": "Said the attention score matrix is vocab-sized and not tied to input length. Real shape: seq_len × seq_len per head. Vocab size is the output logits. Mask idea (no peeking at future tokens in training) was right.",
     "count": 2
    }
   ]
  },
  {
   "slug": "structured-outputs",
   "title": "Structured outputs and tool schemas",
   "level": "aware",
   "target": "explain",
   "last": "",
   "group": "untested",
   "lastChecked": "",
   "next": "2026-10-12",
   "overdue": true,
   "misses": []
  }
 ],
 "weeks": [
  {
   "week": 1,
   "title": "LLM fundamentals",
   "goal": "By Day 14 you have a GPT you wrote yourself, trained on TinyStories on the M1, plus a KV cache and three sampling methods. You've also run Qwen3 from scratch. On the Rust side, rustlings is finished (96/96) and you're through Comprehensive Rust Day 3. Days 12–13 start the Week 2 material.",
   "start": "2026-10-05",
   "end": "2026-11-01",
   "state": "current",
   "days": 12,
   "daysDone": 1,
   "daysLogged": 3,
   "items": 53,
   "itemsDone": 11,
   "hours": 0,
   "review": null
  },
  {
   "week": 2,
   "title": "Inference economics",
   "goal": "By Day 28 you can say, with your own numbers, what a model costs per million tokens on the M1, on a rented GPU and through an API, and you have a router that picks between them. On the Rust side, you finish Comprehensive Rust (Fundamentals + Concurrency) and publish loadgen, an async load tester.",
   "start": "2026-10-30",
   "end": "2026-11-15",
   "state": "upcoming",
   "days": 11,
   "daysDone": 0,
   "daysLogged": 0,
   "items": 47,
   "itemsDone": 0,
   "hours": 0,
   "review": null
  },
  {
   "week": 3,
   "title": "Hybrid retrieval on FiQA",
   "goal": "By Day 35 you have a measured hybrid search engine over FiQA (57,638 finance forum posts, 648 test queries), plus a first /ask endpoint that answers with citations. In Rust, you write a BM25 scorer and a Qdrant ingest tool, and start an axum gateway that will sit in front of the app.",
   "start": "2026-11-10",
   "end": "2026-11-22",
   "state": "upcoming",
   "days": 10,
   "daysDone": 0,
   "daysLogged": 0,
   "items": 45,
   "itemsDone": 0,
   "hours": 0,
   "review": null
  },
  {
   "week": 4,
   "title": "Reranking, evals, ship Portfolio #1",
   "goal": "By Day 47, \"Ask FiQA\" is live at a public URL: hybrid search, reranking, cited answers, and an eval page showing what each stage bought you. A Rust gateway in front of the app handles caching, rate limits and latency metrics. If the gateway slips, Python does those jobs and the gateway moves to month 2.",
   "start": "2026-11-20",
   "end": "2026-12-04",
   "state": "upcoming",
   "days": 14,
   "daysDone": 0,
   "daysLogged": 0,
   "items": 54,
   "itemsDone": 0,
   "hours": 0,
   "review": null
  }
 ]
};
