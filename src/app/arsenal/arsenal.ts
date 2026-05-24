export type Item = { trigger: string; desc: string };

export type Section = {
  title: string;
  icon: string;
  accent: "orange" | "violet" | "emerald" | "sky" | "zinc" | "amber";
  items: Item[];
};

export const arsenal: Section[] = [
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

export const accents = {
  orange: {
    ring: "ring-orange-300",
    bar: "bg-orange-500",
    bg: "bg-orange-50",
    text: "text-orange-700",
    chip: "bg-orange-100 text-orange-900",
    hover: "hover:bg-orange-100",
    active: "active:bg-orange-200",
  },
  violet: {
    ring: "ring-violet-300",
    bar: "bg-violet-500",
    bg: "bg-violet-50",
    text: "text-violet-700",
    chip: "bg-violet-100 text-violet-900",
    hover: "hover:bg-violet-100",
    active: "active:bg-violet-200",
  },
  emerald: {
    ring: "ring-emerald-300",
    bar: "bg-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    chip: "bg-emerald-100 text-emerald-900",
    hover: "hover:bg-emerald-100",
    active: "active:bg-emerald-200",
  },
  sky: {
    ring: "ring-sky-300",
    bar: "bg-sky-500",
    bg: "bg-sky-50",
    text: "text-sky-700",
    chip: "bg-sky-100 text-sky-900",
    hover: "hover:bg-sky-100",
    active: "active:bg-sky-200",
  },
  zinc: {
    ring: "ring-zinc-300",
    bar: "bg-zinc-500",
    bg: "bg-zinc-50",
    text: "text-zinc-700",
    chip: "bg-zinc-200 text-zinc-900",
    hover: "hover:bg-zinc-100",
    active: "active:bg-zinc-200",
  },
  amber: {
    ring: "ring-amber-300",
    bar: "bg-amber-500",
    bg: "bg-amber-50",
    text: "text-amber-800",
    chip: "bg-amber-100 text-amber-900",
    hover: "hover:bg-amber-100",
    active: "active:bg-amber-200",
  },
} as const;
