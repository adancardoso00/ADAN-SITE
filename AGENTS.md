<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: ADAN-SITE

A personal site ("Análises de Reels") built with Next.js 16 (App Router, Turbopack) + Tailwind v4 + TypeScript. Content is in **pt-BR**. Routes live in `src/app`; each reel review is `src/app/reels/<slug>/page.tsx`, listed from the `reels` array in `src/app/page.tsx`.

# Shared agent memory

This repo uses **one shared memory** so Claude Code, Cursor and Codex stay in sync — no database, just an append-only JSONL file the agents (and you) read and write directly.

- **The memory file:** [`.agent/memory.jsonl`](.agent/memory.jsonl) — one JSON object per line.
- **At the start of a session:** read `.agent/memory.jsonl` to recover what previous agents decided. Newest entries are at the bottom.
- **After a notable decision or change:** append one line. Use the helper so the format stays valid:

  ```bash
  node scripts/remember.mjs "<agent>" "<type>" "<short summary>" [tag1,tag2]
  # e.g. node scripts/remember.mjs claude decision "Reviews are pt-BR only" i18n
  ```

  Or append the JSON line yourself. **Schema** (one per line):

  ```json
  {"ts":"2026-06-17T00:00:00Z","agent":"claude","type":"decision","summary":"...","tags":["..."]}
  ```

  `type` is one of `decision` · `context` · `todo` · `fact`. Never rewrite or delete past lines — only append.

See [`.agent/README.md`](.agent/README.md) for the full convention.
