import type { Metadata } from "next";
import { ArsenalGrid } from "./arsenal-grid";

export const metadata: Metadata = {
  title: "Arsenal — o que tenho e como chamar",
  description:
    "Inventário visual de agentes, skills, comandos e MCPs. Clique pra copiar.",
};

export default function ArsenalPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Inventário
            </p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight sm:text-6xl">
              Arsenal
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-600">
            Clique no item pra <strong className="text-zinc-900">copiar</strong>{" "}
            o trigger. Cola no Claude pra invocar.
          </p>
        </header>

        <ArsenalGrid />

        <footer className="mt-12 text-center text-xs text-zinc-500">
          editar: <code className="font-mono">src/app/arsenal/arsenal.ts</code>
        </footer>
      </div>
    </main>
  );
}
