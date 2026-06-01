#!/usr/bin/env bash
# Local development setup for ADAN-SITE.
# Installs Node deps, Rust, rtk, and (optionally) the Claude Code CLI.
# Supports macOS and Linux. Windows users: run inside WSL.

set -euo pipefail

bold() { printf "\033[1m%s\033[0m\n" "$*"; }
info() { printf "\033[36m==>\033[0m %s\n" "$*"; }
warn() { printf "\033[33m!!\033[0m  %s\n" "$*"; }
ok()   { printf "\033[32mok\033[0m  %s\n" "$*"; }
ask()  { read -r -p "$1 [y/N] " ans; [[ "${ans:-}" =~ ^[yY]$ ]]; }

OS="$(uname -s)"
case "$OS" in
  Darwin) PLATFORM=mac ;;
  Linux)  PLATFORM=linux ;;
  *) warn "OS $OS not supported by this script. Use WSL on Windows."; exit 1 ;;
esac

bold "ADAN-SITE local setup ($PLATFORM)"
echo

# --- Node ---
info "Checking Node.js..."
if ! command -v node >/dev/null 2>&1; then
  warn "Node not found. Install Node 20+ (recommended: 22) via https://nodejs.org or your package manager, then re-run."
  exit 1
fi
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt 20 ]; then
  warn "Node $(node --version) is too old. Need >= 20."
  exit 1
fi
ok "Node $(node --version)"

# --- npm install ---
info "Installing npm dependencies..."
npm install
ok "npm install complete"

# --- Rust ---
info "Checking Rust toolchain..."
if ! command -v cargo >/dev/null 2>&1; then
  if ask "Rust (cargo) not found. Install via rustup?"; then
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    # shellcheck disable=SC1091
    source "$HOME/.cargo/env"
  else
    warn "Skipping Rust. rtk install via cargo will be unavailable."
  fi
else
  ok "Rust $(cargo --version)"
fi

# --- rtk ---
info "Checking rtk (Rust Token Killer)..."
if command -v rtk >/dev/null 2>&1; then
  ok "rtk $(rtk --version 2>/dev/null || echo 'installed')"
else
  if [ "$PLATFORM" = "mac" ] && command -v brew >/dev/null 2>&1; then
    if ask "Install rtk via Homebrew?"; then
      brew install rtk
    fi
  elif command -v cargo >/dev/null 2>&1; then
    if ask "Install rtk via cargo from github.com/rtk-ai/rtk?"; then
      cargo install --git https://github.com/rtk-ai/rtk
    fi
  else
    warn "No Homebrew or cargo available. See https://github.com/rtk-ai/rtk for binaries."
  fi
fi

if command -v rtk >/dev/null 2>&1; then
  if ask "Activate rtk hook globally for Claude Code (rtk init -g)?"; then
    rtk init -g
    ok "rtk hook installed. Restart Claude Code to pick it up."
  fi
fi

# --- Claude Code CLI ---
info "Checking Claude Code CLI..."
if command -v claude >/dev/null 2>&1; then
  ok "Claude Code already installed"
else
  if ask "Install Claude Code CLI globally via npm?"; then
    npm install -g @anthropic-ai/claude-code
    ok "Claude Code installed. Run 'claude' inside this repo to start."
  fi
fi

echo
bold "Done."
echo "Next steps:"
echo "  1. npm run dev         # start Next.js on http://localhost:3000"
echo "  2. claude              # open Claude Code in this repo (if installed)"
