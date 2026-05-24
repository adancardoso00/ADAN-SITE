export type Item = {
  trigger: string;
  desc: string;
  /**
   * If present, clicking the item opens this URL in a new tab
   * instead of copying the trigger.
   */
  url?: string;
};

export type Accent =
  | "orange"
  | "violet"
  | "emerald"
  | "sky"
  | "zinc"
  | "amber"
  | "rose"
  | "teal"
  | "lime";

export type Section = {
  title: string;
  icon: string;
  accent: Accent;
  items: Item[];
};

// ─────────────────────────────────────────────────────────────────────────
// EDITA ESTE ARQUIVO. Cada seção é um cartão.
// - Item com `url`  → click abre em nova aba
// - Item sem `url`  → click copia o `trigger` pro clipboard
// ─────────────────────────────────────────────────────────────────────────

export const arsenal: Section[] = [
  // ─── O MEU ────────────────────────────────────────────────────────────
  {
    title: "Métodos próprios",
    icon: "🧬",
    accent: "rose",
    items: [
      { trigger: "Content Machine 5.2", desc: "Fluxo 5 etapas: Triagem → Capas → Espinha → Template → Render" },
      { trigger: "Anatomia do Conteúdo Atômico", desc: "Hook → Mecanismo → Prova → Aplicação → Direção" },
      { trigger: "9 Frameworks de Copy", desc: "Curiosa, Autoridade, Benefício, Pergunta, Testemunho, Lista, P&S, Passo a Passo, Segredo" },
      { trigger: "5 Aberturas (slide 1)", desc: "Curiosidade, Provocação, Autoridade, Identificação, Benefício Direto" },
      { trigger: "Princípios de Design (consolidado)", desc: "12 elementos + 8 princípios (Aranda) + 12 conteúdo (Binac)" },
      { trigger: "Regra-mãe da capa", desc: "Linha 1 = reenquadramento + stake. Linha 2 = mecanismo + âncora." },
      { trigger: "Trava de fluxo", desc: "Não avançar sem 'ok'/escolha objetiva. Sem 'se quiser', sem opcionais." },
      { trigger: "Legibilidade Brasil", desc: "Capa 100% PT-BR. Sem siglas estrangeiras, sem inglês entre parênteses." },
    ],
  },
  {
    title: "Skills do projeto",
    icon: "🎯",
    accent: "orange",
    items: [
      { trigger: "/carrossel", desc: "Content Machine 5.2 — gera carrossel em 5 etapas" },
      { trigger: "/design", desc: "Princípios de design + checklist visual" },
    ],
  },

  // ─── APPS E LINKS ─────────────────────────────────────────────────────
  {
    title: "Apps & ferramentas",
    icon: "🛠️",
    accent: "teal",
    items: [
      { trigger: "Claude", desc: "claude.ai", url: "https://claude.ai" },
      { trigger: "ChatGPT", desc: "chatgpt.com", url: "https://chatgpt.com" },
      { trigger: "Granola", desc: "Notas/transcrições", url: "https://granola.ai" },
      { trigger: "Gamma", desc: "Slides IA", url: "https://gamma.app" },
      { trigger: "Captions", desc: "Vídeos IA + virality", url: "https://captions.ai" },
      { trigger: "Adobe Firefly", desc: "Imagens IA", url: "https://firefly.adobe.com" },
      { trigger: "Figma", desc: "Design", url: "https://figma.com" },
      { trigger: "Vercel", desc: "Deploys", url: "https://vercel.com" },
      { trigger: "GitHub", desc: "Código", url: "https://github.com/adancardoso00" },
      { trigger: "Supabase", desc: "DB + auth", url: "https://supabase.com/dashboard" },
      { trigger: "Meta Business", desc: "Ads + páginas", url: "https://business.facebook.com" },
      { trigger: "Instagram", desc: "Feed BrandsDecoded", url: "https://instagram.com" },
      { trigger: "LinkedIn", desc: "Perfil profissional", url: "https://linkedin.com" },
      { trigger: "WhatsApp Web", desc: "Mensagens", url: "https://web.whatsapp.com" },
      { trigger: "Spotify", desc: "Música", url: "https://open.spotify.com" },
      // Trocar URL pra handles específicos quando souber:
      // { trigger: "Notion", desc: "Workspace", url: "https://www.notion.so/<seu-workspace>" },
    ],
  },
  {
    title: "Contatos & links rápidos",
    icon: "📌",
    accent: "lime",
    items: [
      { trigger: "Drive", desc: "Google Drive", url: "https://drive.google.com" },
      { trigger: "Calendar", desc: "Google Calendar", url: "https://calendar.google.com" },
      { trigger: "Gmail", desc: "Inbox", url: "https://mail.google.com" },
      { trigger: "Repo adan-site", desc: "Código fonte deste site", url: "https://github.com/adancardoso00/adan-site" },
      { trigger: "PR ativa", desc: "Branch em desenvolvimento agora", url: "https://github.com/adancardoso00/ADAN-SITE/pull/1" },
      // Adicione contatos importantes aqui — exemplos:
      // { trigger: "Time core", desc: "Slack workspace", url: "https://app.slack.com/..." },
      // { trigger: "Cliente X", desc: "WhatsApp direto", url: "https://wa.me/55..." },
      // { trigger: "Banco", desc: "Internet banking", url: "https://..." },
    ],
  },

  // ─── CLAUDE CODE (este projeto / contexto técnico) ────────────────────
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

export const accents: Record<
  Accent,
  {
    ring: string;
    bar: string;
    bg: string;
    text: string;
    chip: string;
    hover: string;
    active: string;
  }
> = {
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
  rose: {
    ring: "ring-rose-300",
    bar: "bg-rose-500",
    bg: "bg-rose-50",
    text: "text-rose-700",
    chip: "bg-rose-100 text-rose-900",
    hover: "hover:bg-rose-100",
    active: "active:bg-rose-200",
  },
  teal: {
    ring: "ring-teal-300",
    bar: "bg-teal-500",
    bg: "bg-teal-50",
    text: "text-teal-700",
    chip: "bg-teal-100 text-teal-900",
    hover: "hover:bg-teal-100",
    active: "active:bg-teal-200",
  },
  lime: {
    ring: "ring-lime-400",
    bar: "bg-lime-500",
    bg: "bg-lime-50",
    text: "text-lime-800",
    chip: "bg-lime-100 text-lime-900",
    hover: "hover:bg-lime-100",
    active: "active:bg-lime-200",
  },
};
