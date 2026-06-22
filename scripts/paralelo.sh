#!/bin/bash
# paralelo.sh — rode vários agentes de IA ao mesmo tempo neste repo, de graça.
#
# Usa "git worktrees": cada agente trabalha numa cópia isolada do repo, na sua
# própria branch, sem pisar no trabalho do outro. É a ideia central do CNVS
# (vários agentes em paralelo) sem instalar nem pagar nada.
#
# Uso:
#   ./scripts/paralelo.sh novo <nome>     # cria um espaço pra um agente
#   ./scripts/paralelo.sh lista           # mostra os espaços ativos
#   ./scripts/paralelo.sh remove <nome>   # remove um espaço quando terminar
#
# Exemplo de fluxo:
#   ./scripts/paralelo.sh novo loginbug
#   cd .worktrees/loginbug && claude        # (ou cursor/codex) trabalha aqui
#   # ...noutro terminal, outro agente noutro espaço, em paralelo...

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WT_DIR="$ROOT/.worktrees"

cmd="${1:-lista}"
nome="${2:-}"

case "$cmd" in
  novo)
    if [ -z "$nome" ]; then echo "uso: $0 novo <nome>"; exit 1; fi
    branch="agente/$nome"
    path="$WT_DIR/$nome"
    if [ -e "$path" ]; then echo "já existe: $path"; exit 1; fi
    git -C "$ROOT" worktree add -b "$branch" "$path" >/dev/null
    echo "✅ espaço criado para '$nome'"
    echo "   pasta:  $path"
    echo "   branch: $branch"
    echo "   abra um agente lá:  cd .worktrees/$nome && claude"
    ;;
  lista)
    echo "Espaços paralelos ativos:"
    git -C "$ROOT" worktree list | grep -F "$WT_DIR" || echo "  (nenhum — crie com: $0 novo <nome>)"
    ;;
  remove)
    if [ -z "$nome" ]; then echo "uso: $0 remove <nome>"; exit 1; fi
    path="$WT_DIR/$nome"
    git -C "$ROOT" worktree remove "$path" --force
    git -C "$ROOT" branch -D "agente/$nome" 2>/dev/null || true
    echo "🗑️  espaço '$nome' removido"
    ;;
  *)
    echo "comando desconhecido: $cmd"
    echo "use: novo <nome> | lista | remove <nome>"
    exit 1
    ;;
esac
