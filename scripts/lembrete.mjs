#!/usr/bin/env node
// Lembretes pessoais (amigável a TDAH): capturar sem fricção, triar
// (acionar/arquivar) e concluir. Armazenamento append-only em
// .agent/lembretes.jsonl — 1 evento JSON por linha, sem banco de dados.
//
// Uso:
//   node scripts/lembrete.mjs add "<texto>" [tag1,tag2]   # capturar
//   node scripts/lembrete.mjs resumo                       # pendentes (padrão)
//   node scripts/lembrete.mjs todos                        # tudo, com status
//   node scripts/lembrete.mjs acionar <id>                 # decidi: vou fazer
//   node scripts/lembrete.mjs arquivar <id>                # decidi: não fazer
//   node scripts/lembrete.mjs feito <id>                   # concluído

import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, ".agent/lembretes.jsonl");

function readEvents() {
  if (!existsSync(file)) return [];
  return readFileSync(file, "utf8")
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => JSON.parse(l));
}

function append(ev) {
  mkdirSync(dirname(file), { recursive: true });
  appendFileSync(file, JSON.stringify(ev) + "\n");
}

// Reconstrói o estado atual de cada item a partir dos eventos (event sourcing).
function fold(events) {
  const items = new Map();
  for (const ev of events) {
    if (ev.ev === "add") {
      items.set(ev.id, {
        id: ev.id,
        texto: ev.texto,
        tags: ev.tags ?? [],
        ts: ev.ts,
        status: "pendente",
      });
    } else if (items.has(ev.id)) {
      const it = items.get(ev.id);
      if (ev.ev === "acionar") it.status = "acionado";
      else if (ev.ev === "arquivar") it.status = "arquivado";
      else if (ev.ev === "feito") it.status = "feito";
    }
  }
  return [...items.values()];
}

function nextId(events) {
  return "l" + (events.filter((e) => e.ev === "add").length + 1);
}

function idade(ts) {
  const ms = Date.now() - new Date(ts).getTime();
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  if (d > 0) return `${d}d atrás`;
  if (h > 0) return `${h}h atrás`;
  return "agora";
}

const [cmd, ...rest] = process.argv.slice(2);
const events = readEvents();

switch (cmd) {
  case "add": {
    const texto = rest[0];
    if (!texto) {
      console.error('Uso: node scripts/lembrete.mjs add "<texto>" [tag1,tag2]');
      process.exit(1);
    }
    const tags = (rest[1] ?? "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const id = nextId(events);
    const ev = { ev: "add", id, ts: new Date().toISOString(), texto };
    if (tags.length) ev.tags = tags;
    append(ev);
    console.log(`✅ capturado [${id}]: ${texto}`);
    break;
  }
  case "acionar":
  case "arquivar":
  case "feito": {
    const id = rest[0];
    if (!id) {
      console.error(`Uso: node scripts/lembrete.mjs ${cmd} <id>`);
      process.exit(1);
    }
    if (!events.some((e) => e.ev === "add" && e.id === id)) {
      console.error(`id não encontrado: ${id}`);
      process.exit(1);
    }
    append({ ev: cmd, id, ts: new Date().toISOString() });
    const verbo =
      cmd === "acionar"
        ? "vou acionar"
        : cmd === "arquivar"
          ? "arquivado (não vou fazer)"
          : "concluído";
    console.log(`✅ [${id}] ${verbo}`);
    break;
  }
  case "todos": {
    const items = fold(events);
    if (!items.length) {
      console.log("(sem lembretes)");
      break;
    }
    for (const it of items) {
      console.log(`[${it.id}] ${it.status.padEnd(9)} ${it.texto}`);
    }
    break;
  }
  case "resumo":
  case undefined: {
    const items = fold(events);
    const pend = items.filter((i) => i.status === "pendente");
    const acted = items.filter((i) => i.status === "acionado");
    if (!pend.length && !acted.length) break; // silêncio quando não há nada aberto
    const out = ["━━━━━━━━━━ LEMBRETES ━━━━━━━━━━"];
    if (pend.length) {
      out.push(`🔴 Pendentes — decida: acionar ou arquivar (${pend.length})`);
      for (const i of pend) out.push(`   [${i.id}] ${i.texto}  · ${idade(i.ts)}`);
    }
    if (acted.length) {
      out.push(`🟡 Em ação — decididos, ainda não concluídos (${acted.length})`);
      for (const i of acted) out.push(`   [${i.id}] ${i.texto}`);
    }
    out.push("Decidir:  node scripts/lembrete.mjs acionar|arquivar|feito <id>");
    out.push('Capturar: node scripts/lembrete.mjs add "..."');
    out.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(out.join("\n"));
    break;
  }
  default:
    console.error(`Comando desconhecido: ${cmd}`);
    console.error("Use: add | resumo | todos | acionar | arquivar | feito");
    process.exit(1);
}
