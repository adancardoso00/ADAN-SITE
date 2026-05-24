# Devcontainer for ADAN-SITE.
# Base: Node 22 on Debian Bookworm. Adds Rust + rtk + Claude Code CLI.
FROM mcr.microsoft.com/devcontainers/javascript-node:22-bookworm

USER root

RUN apt-get update \
 && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    git \
    pkg-config \
    libssl-dev \
 && rm -rf /var/lib/apt/lists/*

# Claude Code CLI (global npm install)
RUN npm install -g @anthropic-ai/claude-code

USER node

ENV CARGO_HOME=/home/node/.cargo \
    RUSTUP_HOME=/home/node/.rustup \
    PATH=/home/node/.cargo/bin:$PATH

# Rust toolchain
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs \
    | sh -s -- -y --default-toolchain stable --profile minimal

# rtk (Rust Token Killer) — filters command output before it reaches Claude's context
RUN cargo install --git https://github.com/rtk-ai/rtk

# Note: `rtk init -g` is NOT run at build time. The hook writes to
# ~/.claude/ which is mounted/persisted per container — run it once
# after the container starts:
#   rtk init -g
