#!/bin/bash
set -euo pipefail

DIR="${CLAUDE_PROJECT_DIR:-.}"

# Em sessões remotas (Claude Code na web), garante as dependências instaladas
# para que lint/build funcionem. Idempotente e silencioso; nunca falha a sessão.
if [ "${CLAUDE_CODE_REMOTE:-}" = "true" ] && [ ! -d "$DIR/node_modules" ]; then
  ( cd "$DIR" && npm install ) >/tmp/session-start-npm.log 2>&1 || true
fi

# Mostra os lembretes pendentes. Em SessionStart, o stdout vira contexto da
# sessão — então você é lembrado automaticamente ao abrir o Claude Code.
node "$DIR/scripts/lembrete.mjs" resumo 2>/dev/null || true
