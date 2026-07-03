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

# Arsenal disponível na sessão (Claude Code)

Referência do que dá pra pedir numa sessão do Claude Code neste projeto: skills, agentes e MCPs conectados.

## Skills · comandos com `/`

**Fluxo Adan — produção**
- `/carrossel` — transforma artigo/insight/print em carrossel de Instagram (Markdown pronto pra colar).
- `/stamp-vibe-branding` — cria marca premium de produto físico: paleta, tipografia, prompts Midjourney, mockup 3D.
- `/design` — vocabulário de design do projeto (Binac + Vanessa Aranda) pra avaliar UI e layout.
- `/dataviz` — regras de gráfico e dashboard (paleta, marcas, interação); obrigatório antes de qualquer chart.
- `/deep-research` — pesquisa multi-fonte com verificação adversarial, devolve relatório citado.
- `/artifact-design` — fundamentos de Artifacts (páginas hospedadas).

**Dev — Claude Code interno**
`/run` `/verify` `/code-review` `/simplify` `/security-review` `/review` `/init` `/loop` `/update-config` `/keybindings-help` `/session-start-hook` `/fewer-permission-prompts` `/claude-api`

## Agentes · Task tool

Sub-agentes que rodam em paralelo, poupando o contexto da conversa principal:
- `claude` — catch-all para tarefas que não se encaixam nos especializados.
- `general-purpose` — pesquisa complexa, busca de código, execução multi-step.
- `Explore` — busca read-only rápida por arquivos e símbolos (grep/glob).
- `Plan` — arquiteto, monta plano de implementação passo a passo.
- `claude-code-guide` — dúvidas sobre o próprio Claude Code, Agent SDK e Claude API.
- `statusline-setup` — configura a status line do CLI.

## MCPs · integrações conectadas

- **Design & criação visual:** Adobe for Creativity, Adobe Experience Manager, Figma, Gamma, SlidesGPT, Higgsfield, Base44
- **Produtividade & dados:** Gmail, Google Calendar, Google Drive, Granola, Mem, Supabase, Make
- **Dev & infra:** GitHub (escopo nesta sessão: só `adancardoso00/adan-site`), Vercel
- **Outros:** Spotify, Autodesk Product Help, Adobe Marketing Agent
- **Pendente de autenticação:** Facebook — indisponível até logar via `/mcp`.

*(Referência de Junho 2026 — a lista de skills/MCPs conectados pode mudar entre sessões; confira o que está realmente ativo antes de depender dela.)*
