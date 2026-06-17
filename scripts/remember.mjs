#!/usr/bin/env node
// Append one entry to the shared agent memory (.agent/memory.jsonl).
//
// Usage:
//   node scripts/remember.mjs <agent> <type> <summary> [tag1,tag2,...]
// Example:
//   node scripts/remember.mjs claude decision "Reviews are pt-BR only" i18n,content

import { appendFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const AGENTS = ["claude", "cursor", "codex", "human"];
const TYPES = ["decision", "context", "todo", "fact"];

const [agent, type, summary, tagsArg] = process.argv.slice(2);

if (!agent || !type || !summary) {
  console.error(
    'Usage: node scripts/remember.mjs <agent> <type> <summary> [tag1,tag2,...]'
  );
  process.exit(1);
}
if (!AGENTS.includes(agent)) {
  console.error(`agent must be one of: ${AGENTS.join(", ")}`);
  process.exit(1);
}
if (!TYPES.includes(type)) {
  console.error(`type must be one of: ${TYPES.join(", ")}`);
  process.exit(1);
}

const tags = (tagsArg ?? "")
  .split(",")
  .map((t) => t.trim())
  .filter(Boolean);

const entry = { ts: new Date().toISOString(), agent, type, summary };
if (tags.length) entry.tags = tags;

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, ".agent/memory.jsonl");
mkdirSync(dirname(file), { recursive: true });
appendFileSync(file, JSON.stringify(entry) + "\n");

console.log("remembered:", JSON.stringify(entry));
