# Shared agent memory

One memory, shared by every AI coding agent on this repo (Claude Code, Cursor,
Codex). No database — just an append-only JSONL file the agents read and write
directly. This is the same idea as the CNVS reel reviewed at `/reels/cnvs`.

## How it works

- **Source of truth:** [`../AGENTS.md`](../AGENTS.md). Every agent reads it.
  - **Claude Code** reads `CLAUDE.md`, which is just `@AGENTS.md`.
  - **Codex** reads `AGENTS.md` natively.
  - **Cursor** reads [`../.cursor/rules/shared-memory.mdc`](../.cursor/rules/shared-memory.mdc),
    which points back here.
- **The memory:** [`memory.jsonl`](memory.jsonl) — one JSON object per line,
  append-only, newest at the bottom. It is committed to git, so the memory
  travels with the repo and is diffable in PRs.

## The loop

1. **Read** `memory.jsonl` when you start working — recover prior decisions.
2. **Work.**
3. **Append** one line when you make a notable decision or change.

## Writing an entry

Use the helper (validates and timestamps for you):

```bash
node scripts/remember.mjs "<agent>" "<type>" "<short summary>" [tag1,tag2]
# example:
node scripts/remember.mjs claude decision "Reviews are pt-BR only" i18n,content
```

Or append the raw JSON line yourself:

```json
{"ts":"2026-06-17T00:00:00Z","agent":"claude","type":"decision","summary":"...","tags":["..."]}
```

### Schema

| field     | required | notes                                            |
| --------- | -------- | ------------------------------------------------ |
| `ts`      | yes      | ISO-8601 UTC timestamp                           |
| `agent`   | yes      | `claude` · `cursor` · `codex` · `human`          |
| `type`    | yes      | `decision` · `context` · `todo` · `fact`         |
| `summary` | yes      | one short sentence                               |
| `tags`    | no       | array of strings for grouping/search             |

## Rules

- **Append only.** Never edit or delete existing lines — history is the point.
- **One line per entry.** Keep it valid JSONL (no pretty-printing).
- **Keep summaries short.** A line is a pointer, not a document.

## Reading it back

```bash
# everything, pretty
cat .agent/memory.jsonl | jq .

# only decisions
jq -c 'select(.type=="decision")' .agent/memory.jsonl

# filter by tag
jq -c 'select(.tags // [] | index("i18n"))' .agent/memory.jsonl
```

---

## Lembretes pessoais (TDAH-friendly)

Separado da memória dos agentes, há um inbox de lembretes em
[`lembretes.jsonl`](lembretes.jsonl) — também append-only, também event-sourced.
A ideia: **capturar sem fricção**, depois **triar** (decidir *acionar* ou
*arquivar*) e **concluir**.

```bash
node scripts/lembrete.mjs add "Ligar pro dentista" saude   # capturar
node scripts/lembrete.mjs resumo                            # ver pendentes
node scripts/lembrete.mjs acionar l3                        # decidi: vou fazer
node scripts/lembrete.mjs arquivar l3                       # decidi: não fazer
node scripts/lembrete.mjs feito l3                          # concluído
```

**Você é lembrado automaticamente:** o hook `.claude/hooks/session-start.sh`
roda no início de cada sessão do Claude Code e imprime os pendentes — então a
lista te encontra, você não precisa lembrar de procurá-la. Configurado em
`.claude/settings.json`.
