<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# rtk (Rust Token Killer)

Local and devcontainer setups install [rtk](https://github.com/rtk-ai/rtk), a CLI proxy that filters/compresses output of common commands (git, docker, kubectl, test runners, etc.) to save tokens. When `rtk init -g` has been run on the host, a global Claude Code hook auto-rewrites Bash commands transparently — no need to prefix calls with `rtk`. Built-in tools (Read, Grep, Glob) bypass the hook and need explicit `rtk` invocation if desired.

Setup scripts: `setup-local.sh` (host machine) and `.devcontainer/` (VS Code). The hook itself lives in `~/.claude/` (per-machine, not in the repo).
