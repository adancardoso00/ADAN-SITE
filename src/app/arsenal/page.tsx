import type { Metadata } from "next";
import { ArsenalGrid } from "./arsenal-grid";
import { arsenal } from "./arsenal";

export const metadata: Metadata = {
  title: "Arsenal — o que tenho e como chamar",
  description:
    "Inventário visual de agentes, skills, comandos e MCPs. Clique pra copiar.",
};

export default function ArsenalPage() {
  const total = arsenal.reduce((n, s) => n + s.items.length, 0);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Aurora background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[640px] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 10%, rgba(244,63,94,0.18) 0%, transparent 70%), radial-gradient(50% 40% at 80% 20%, rgba(20,184,166,0.15) 0%, transparent 70%), radial-gradient(40% 30% at 50% 0%, rgba(168,85,247,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
        <header className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-zinc-700" />
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">
              Inventário · {total} entradas · {arsenal.length} seções
            </p>
          </div>

          <h1 className="mt-6 text-7xl font-black leading-[0.85] tracking-tight sm:text-8xl lg:text-[10rem]">
            <span className="bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              Arsenal
            </span>
            <span className="text-rose-500">.</span>
          </h1>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <p className="max-w-md text-base leading-relaxed text-zinc-400">
              Tudo que tenho à disposição —{" "}
              <span className="text-zinc-200">métodos</span>,{" "}
              <span className="text-zinc-200">skills</span>,{" "}
              <span className="text-zinc-200">agentes</span>,{" "}
              <span className="text-zinc-200">MCPs</span> e{" "}
              <span className="text-zinc-200">tools</span> — num lugar só.
            </p>
            <p className="max-w-md text-base leading-relaxed text-zinc-400 sm:text-right">
              Clique no item pra <strong className="text-white">copiar</strong>{" "}
              o trigger. Cola no Claude pra invocar.
            </p>
          </div>
        </header>

        <ArsenalGrid />

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          <span>
            editar:{" "}
            <code className="font-mono text-zinc-300">
              src/app/arsenal/arsenal.ts
            </code>
          </span>
          <span className="font-mono uppercase tracking-[0.2em]">
            v.{new Date().getFullYear().toString().slice(-2)}
          </span>
        </footer>
      </div>
    </main>
  );
}
