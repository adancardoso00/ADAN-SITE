import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arsenal — o que tenho e como chamar",
  description:
    "Inventário de agentes, skills, comandos e MCPs disponíveis no projeto.",
};

type Item = {
  trigger: string;
  name?: string;
  desc: string;
};

type Section = {
  title: string;
  subtitle?: string;
  highlight?: boolean;
  items: Item[];
};

const arsenal: Section[] = [
  {
    title: "Skills do projeto",
    subtitle: "Criadas neste repo. Auto-invocadas pelo contexto.",
    highlight: true,
    items: [
      {
        trigger: "/carrossel",
        name: "Carousel Writer",
        desc: "Content Machine 5.2 (BrandsDecoded). Converte insumo em carrossel pronto, 5 etapas com travas.",
      },
      {
        trigger: "/design",
        name: "Princípios de Design",
        desc: "Elementos + composição (Aranda) + conteúdo (Binac). Checklist pra validar peças visuais.",
      },
    ],
  },
  {
    title: "Skills nativas (Claude Code)",
    subtitle: "Comandos embutidos. Digite a barra.",
    items: [
      { trigger: "/run", desc: "Sobe o app e dirige pra ver mudança funcionando." },
      { trigger: "/verify", desc: "Valida que uma mudança realmente faz o que devia." },
      { trigger: "/code-review", desc: "Revisa o diff atual. Aceita --comment pra postar inline." },
      { trigger: "/security-review", desc: "Auditoria de segurança das mudanças pendentes." },
      { trigger: "/review", desc: "Review de uma PR específica." },
      { trigger: "/init", desc: "Gera CLAUDE.md inicial com documentação do projeto." },
      { trigger: "/loop", desc: "Roda um prompt/comando em intervalo recorrente (default 10min)." },
      { trigger: "/update-config", desc: "Edita settings.json — permissões, hooks, env vars." },
      { trigger: "/fewer-permission-prompts", desc: "Gera allowlist pra reduzir prompts de permissão." },
      { trigger: "/keybindings-help", desc: "Customiza ~/.claude/keybindings.json." },
      { trigger: "/session-start-hook", desc: "Cria hooks de inicialização pra Claude Code na web." },
      { trigger: "/claude-api", desc: "Ajuda com Anthropic SDK, prompt caching, migração de modelos." },
    ],
  },
  {
    title: "Agentes",
    subtitle: "Sub-agentes que rodam em paralelo via Agent tool.",
    items: [
      { trigger: "Explore", desc: "Busca rápida read-only — find files, grep símbolos, 'onde está X?'" },
      { trigger: "Plan", desc: "Arquiteto de implementação. Gera plano step-by-step." },
      { trigger: "general-purpose", desc: "Pesquisa complexa multi-step quando o especializado não cabe." },
      { trigger: "claude-code-guide", desc: "Dúvidas sobre Claude Code CLI, Agent SDK, Claude API." },
      { trigger: "statusline-setup", desc: "Configura a status line do Claude Code." },
    ],
  },
  {
    title: "MCPs ativos",
    subtitle: "Servidores externos plugados nesta sessão.",
    items: [
      { trigger: "github", desc: "Repo ops (restrito a adancardoso00/adan-site). PRs, issues, CI, comments." },
      { trigger: "supabase", desc: "DB, migrations, edge functions, advisors, logs." },
      { trigger: "vercel", desc: "Deploys, projects, logs, toolbar threads." },
      { trigger: "figma", desc: "Design context, screenshots, code connect, variables." },
      { trigger: "base44", desc: "App builder — cria/edita apps, schemas, entidades." },
      { trigger: "adobe", desc: "Express/Firefly — assets, edição de imagem, PDF, vídeo." },
      { trigger: "gamma", desc: "Apresentações, docs, webpages geradas por IA." },
      { trigger: "google drive", desc: "Buscar e ler arquivos do Drive." },
      { trigger: "google calendar", desc: "Eventos, agendamentos, sugestão de horários." },
      { trigger: "gmail", desc: "Threads, drafts, labels." },
      { trigger: "granola", desc: "Notas e coleções pessoais." },
      { trigger: "meta ads", desc: "Campanhas, públicos, catálogo, insights." },
      { trigger: "spotify", desc: "Search, playlists, what's playing." },
      { trigger: "captions", desc: "Geração de imagem/vídeo, virality predictor, clipper." },
      { trigger: "autodesk", desc: "Catálogo de produtos e help content." },
    ],
  },
  {
    title: "Tools internas",
    subtitle: "Built-in do Claude Code. Não tem trigger — Claude usa por conta.",
    items: [
      { trigger: "Read / Edit / Write", desc: "Arquivos locais." },
      { trigger: "Bash", desc: "Shell. Comandos longos em background possíveis." },
      { trigger: "WebFetch / WebSearch", desc: "Web. WebFetch lê URL pública, WebSearch indexa." },
      { trigger: "ToolSearch", desc: "Carrega schemas de tools deferidas sob demanda." },
      { trigger: "AskUserQuestion", desc: "Múltipla escolha estruturada (1–4 perguntas)." },
      { trigger: "SendUserFile", desc: "Envia arquivo gerado pro chat (gráficos, PDFs)." },
    ],
  },
  {
    title: "Setup local",
    subtitle: "Scripts pra rodar Claude Code local com rtk.",
    items: [
      { trigger: "./setup-local.sh", desc: "Bootstrap mac/Linux — Node, Rust, rtk, Claude Code CLI." },
      { trigger: ".devcontainer/", desc: "VS Code devcontainer com stack pre-instalado." },
    ],
  },
];

export default function ArsenalPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-24">
      <header className="mb-16 sm:mb-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Inventário
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Arsenal
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          O que está disponível e como chamar. Aberto pra lembrar — não pra ler
          inteiro.
        </p>
      </header>

      <div className="space-y-16 sm:space-y-20">
        {arsenal.map((section) => (
          <section key={section.title} aria-labelledby={slug(section.title)}>
            <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <h2
                id={slug(section.title)}
                className={`text-xl font-semibold tracking-tight ${
                  section.highlight ? "text-orange-600 dark:text-orange-400" : ""
                }`}
              >
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-right text-xs text-zinc-500 sm:text-sm">
                  {section.subtitle}
                </p>
              )}
            </div>

            <ul className="space-y-5">
              {section.items.map((item) => (
                <li
                  key={item.trigger}
                  className="grid grid-cols-1 gap-1 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6"
                >
                  <div>
                    <code className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {item.trigger}
                    </code>
                    {item.name && (
                      <span className="ml-2 text-xs text-zinc-500">
                        {item.name}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <footer className="mt-24 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-zinc-800">
        <p>
          Atualizar este arquivo:{" "}
          <code className="font-mono">src/app/arsenal/page.tsx</code>
        </p>
      </footer>
    </main>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
