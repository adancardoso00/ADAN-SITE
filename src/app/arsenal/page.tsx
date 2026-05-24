import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arsenal — o que tenho e como chamar",
  description:
    "Inventário visual de agentes, skills, comandos e MCPs disponíveis no projeto.",
};

type Item = { trigger: string; desc: string };

type Section = {
  title: string;
  icon: string;
  accent:
    | "orange"
    | "violet"
    | "emerald"
    | "sky"
    | "zinc"
    | "amber";
  span?: "wide" | "tall";
  items: Item[];
};

const arsenal: Section[] = [
  {
    title: "Skills do projeto",
    icon: "🎯",
    accent: "orange",
    items: [
      { trigger: "/carrossel", desc: "Content Machine 5.2 — gera carrossel em 5 etapas" },
      { trigger: "/design", desc: "Princípios de design + checklist visual" },
    ],
  },
  {
    title: "Agentes",
    icon: "🤖",
    accent: "emerald",
    items: [
      { trigger: "Explore", desc: "Busca rápida read-only" },
      { trigger: "Plan", desc: "Arquiteto de implementação" },
      { trigger: "general-purpose", desc: "Pesquisa complexa multi-step" },
      { trigger: "claude-code-guide", desc: "Dúvidas sobre Claude Code" },
      { trigger: "statusline-setup", desc: "Configura status line" },
    ],
  },
  {
    title: "Setup local",
    icon: "💾",
    accent: "amber",
    items: [
      { trigger: "./setup-local.sh", desc: "Bootstrap Mac/Linux" },
      { trigger: ".devcontainer/", desc: "VS Code container" },
    ],
  },
  {
    title: "Skills nativas",
    icon: "⚡",
    accent: "violet",
    span: "tall",
    items: [
      { trigger: "/run", desc: "Sobe o app pra testar" },
      { trigger: "/verify", desc: "Valida que mudança funciona" },
      { trigger: "/code-review", desc: "Revisa diff atual" },
      { trigger: "/security-review", desc: "Auditoria de segurança" },
      { trigger: "/review", desc: "Review de PR" },
      { trigger: "/init", desc: "Gera CLAUDE.md inicial" },
      { trigger: "/loop", desc: "Roda em intervalo (10min)" },
      { trigger: "/update-config", desc: "Edita settings.json" },
      { trigger: "/fewer-permission-prompts", desc: "Gera allowlist" },
      { trigger: "/keybindings-help", desc: "Customiza keybindings" },
      { trigger: "/claude-api", desc: "Ajuda com SDK Anthropic" },
    ],
  },
  {
    title: "MCPs ativos",
    icon: "🔌",
    accent: "sky",
    span: "tall",
    items: [
      { trigger: "github", desc: "Repo ops (adan-site)" },
      { trigger: "supabase", desc: "DB + edge functions" },
      { trigger: "vercel", desc: "Deploys + logs" },
      { trigger: "figma", desc: "Design context" },
      { trigger: "base44", desc: "App builder" },
      { trigger: "adobe", desc: "Express + Firefly" },
      { trigger: "gamma", desc: "Apresentações IA" },
      { trigger: "google drive", desc: "Arquivos do Drive" },
      { trigger: "google calendar", desc: "Eventos + agendas" },
      { trigger: "gmail", desc: "Threads + drafts" },
      { trigger: "granola", desc: "Notas e coleções" },
      { trigger: "meta ads", desc: "Campanhas + catálogo" },
      { trigger: "spotify", desc: "Search + playlists" },
      { trigger: "captions", desc: "Vídeo IA + virality" },
    ],
  },
  {
    title: "Tools internas",
    icon: "🔧",
    accent: "zinc",
    items: [
      { trigger: "Read / Edit / Write", desc: "Arquivos locais" },
      { trigger: "Bash", desc: "Shell + background" },
      { trigger: "WebFetch / WebSearch", desc: "Web pública" },
      { trigger: "ToolSearch", desc: "Schemas sob demanda" },
      { trigger: "AskUserQuestion", desc: "Múltipla escolha" },
      { trigger: "SendUserFile", desc: "Envia arquivo" },
    ],
  },
];

const accents = {
  orange: {
    ring: "ring-orange-500/40 dark:ring-orange-400/30",
    bar: "bg-orange-500 dark:bg-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    text: "text-orange-700 dark:text-orange-300",
    chip: "bg-orange-100 text-orange-900 dark:bg-orange-900/40 dark:text-orange-200",
  },
  violet: {
    ring: "ring-violet-500/30 dark:ring-violet-400/20",
    bar: "bg-violet-500 dark:bg-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    text: "text-violet-700 dark:text-violet-300",
    chip: "bg-violet-100 text-violet-900 dark:bg-violet-900/40 dark:text-violet-200",
  },
  emerald: {
    ring: "ring-emerald-500/30 dark:ring-emerald-400/20",
    bar: "bg-emerald-500 dark:bg-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    text: "text-emerald-700 dark:text-emerald-300",
    chip: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-200",
  },
  sky: {
    ring: "ring-sky-500/30 dark:ring-sky-400/20",
    bar: "bg-sky-500 dark:bg-sky-400",
    bg: "bg-sky-50 dark:bg-sky-950/30",
    text: "text-sky-700 dark:text-sky-300",
    chip: "bg-sky-100 text-sky-900 dark:bg-sky-900/40 dark:text-sky-200",
  },
  zinc: {
    ring: "ring-zinc-400/30 dark:ring-zinc-500/30",
    bar: "bg-zinc-500 dark:bg-zinc-400",
    bg: "bg-zinc-50 dark:bg-zinc-900/40",
    text: "text-zinc-700 dark:text-zinc-200",
    chip: "bg-zinc-200 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-50",
  },
  amber: {
    ring: "ring-amber-500/30 dark:ring-amber-400/20",
    bar: "bg-amber-500 dark:bg-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    text: "text-amber-700 dark:text-amber-300",
    chip: "bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200",
  },
} as const;

const spans = {
  wide: "md:col-span-2",
  tall: "md:row-span-2",
} as const;

export default function ArsenalPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Inventário
            </p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              Arsenal
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Bate o olho. Encontra. Chama. Aberto pra lembrar — não pra ler
            inteiro.
          </p>
        </header>

        <div className="grid auto-rows-min grid-cols-1 gap-5 md:grid-cols-3">
          {arsenal.map((section) => {
            const c = accents[section.accent];
            const spanClass = section.span ? spans[section.span] : "";
            return (
              <section
                key={section.title}
                className={`group relative flex flex-col overflow-hidden rounded-2xl ring-1 transition ${c.bg} ${c.ring} ${spanClass} hover:ring-2`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${c.bar}`} />
                <header className="flex items-center justify-between px-5 pt-5 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl leading-none" aria-hidden>
                      {section.icon}
                    </span>
                    <h2
                      className={`text-base font-semibold tracking-tight ${c.text}`}
                    >
                      {section.title}
                    </h2>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-medium ${c.chip}`}
                  >
                    {section.items.length}
                  </span>
                </header>

                <ul className="flex flex-col gap-1 px-3 pb-4">
                  {section.items.map((item) => (
                    <li
                      key={item.trigger}
                      className="flex flex-col gap-0.5 rounded-lg px-2 py-1.5 transition hover:bg-white/60 dark:hover:bg-zinc-800/40"
                    >
                      <code className="font-mono text-[13px] font-semibold text-zinc-900 dark:text-zinc-100">
                        {item.trigger}
                      </code>
                      <span className="text-xs leading-snug text-zinc-600 dark:text-zinc-400">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <footer className="mt-12 text-center text-xs text-zinc-500">
          editar:{" "}
          <code className="font-mono">src/app/arsenal/page.tsx</code>
        </footer>
      </div>
    </main>
  );
}
