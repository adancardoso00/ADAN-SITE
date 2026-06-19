import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palmier — o editor de vídeo que o Claude controla",
  description:
    "O Palmier Pro é um editor de vídeo open-source para Mac que expõe um servidor MCP local, permitindo que agentes de IA como o Claude editem a timeline diretamente.",
};

const REEL_URL = "https://www.instagram.com/reel/DZvfImMibWh/";

const features = [
  {
    title: "Open-source e nativo no Mac",
    body: "Editor completo escrito em Swift, licença GPLv3. Grátis pra baixar, sem login — use como CapCut ou Premiere.",
  },
  {
    title: "Servidor MCP local",
    body: "Com o app aberto, ele expõe um MCP server em http://127.0.0.1:19789/mcp. Claude Desktop, Claude Code ou Cursor conectam direto.",
  },
  {
    title: "O agente executa, não só sugere",
    body: "O Claude corta, reordena, regenera clipes e organiza a timeline com contexto total do projeto — a edição acontece de verdade.",
  },
];

const steps = [
  "Baixe o Palmier Pro em palmier.io e abra o app (o MCP server sobe sozinho).",
  "No Claude Desktop/Code ou Cursor, adicione o MCP server apontando para http://127.0.0.1:19789/mcp.",
  "Abra ou crie um projeto de vídeo no Palmier e peça ao Claude pra editar a timeline.",
  "Recursos generativos (gerar footage por IA) exigem login e assinatura; edição e MCP são grátis.",
];

export default function PalmierPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-6 py-16 sm:py-24">
      <header className="flex flex-col gap-4">
        <span className="text-sm font-medium uppercase tracking-widest text-teal-600 dark:text-teal-400">
          Anthropic · Claude · Vídeo
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          O editor de vídeo que o Claude consegue editar
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A Anthropic ganhou um superpoder que quase ninguém viu chegar: o{" "}
          <strong className="font-semibold text-black dark:text-zinc-50">
            Palmier Pro
          </strong>
          , um editor de vídeo open-source que um agente de IA opera
          diretamente na timeline.
        </p>
      </header>

      <section className="flex flex-col items-center gap-3">
        <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-black shadow-lg dark:border-white/15">
          <iframe
            src={`${REEL_URL}embed`}
            title="Reel sobre o Palmier"
            className="aspect-[9/16] w-full"
            loading="lazy"
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
        <a
          href={REEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400"
        >
          Ver o reel original no Instagram ↗
        </a>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col gap-2 rounded-xl border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-950"
          >
            <h2 className="text-base font-semibold text-black dark:text-zinc-50">
              {f.title}
            </h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {f.body}
            </p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Como conectar o Claude ao Palmier
        </h2>
        <ol className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="pt-0.5 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="border-t border-black/10 pt-6 text-sm text-zinc-500 dark:border-white/15 dark:text-zinc-500">
        Fontes:{" "}
        <a
          className="underline hover:text-teal-600 dark:hover:text-teal-400"
          href="https://github.com/palmier-io/palmier-pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          palmier-io/palmier-pro
        </a>
        ,{" "}
        <a
          className="underline hover:text-teal-600 dark:hover:text-teal-400"
          href="https://www.ycombinator.com/launches/QtT-palmier-pro-an-open-source-video-editor-your-agents-can-operate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Y Combinator
        </a>
        .
      </footer>
    </main>
  );
}
