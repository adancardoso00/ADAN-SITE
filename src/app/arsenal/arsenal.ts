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
      { trigger: "/stamp-vibe-branding", desc: "Marca premium de produto físico em ~10min via AI (MJ + Gemini + Nanobanana)" },
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
      { trigger: "/simplify", desc: "Limpa código: reuso, eficiência, altitude" },
      { trigger: "/security-review", desc: "Auditoria de segurança" },
      { trigger: "/review", desc: "Review de PR" },
      { trigger: "/init", desc: "Gera CLAUDE.md inicial" },
      { trigger: "/loop", desc: "Roda em intervalo (10min)" },
      { trigger: "/update-config", desc: "Edita settings.json" },
      { trigger: "/fewer-permission-prompts", desc: "Gera allowlist" },
      { trigger: "/keybindings-help", desc: "Customiza keybindings" },
      { trigger: "/claude-api", desc: "Ajuda com SDK Anthropic" },
      { trigger: "/session-start-hook", desc: "Cria hook de startup pra sessões web" },
      { trigger: "/dataviz", desc: "Charts e dashboards com sistema coerente" },
      { trigger: "/artifact-design", desc: "Fundamentos de design pra Artifacts" },
      { trigger: "/artifact-diagramming", desc: "Diagramas SVG inline que funcionam em dark/light" },
      { trigger: "/artifact-capabilities", desc: "Capacidades runtime: db, assets, state compartilhado" },
      { trigger: "/workflow-authoring", desc: "Autoria de scripts Workflow (multi-agent)" },
      { trigger: "/plugin-authoring", desc: "Cria mods: painéis, hooks, slash commands" },
    ],
  },
  {
    title: "Skills Anthropic",
    icon: "💎",
    accent: "amber",
    items: [
      { trigger: "/anthropic-skills:brand-strategy", desc: "Estratégia de marca completa (sua skill)" },
      { trigger: "/anthropic-skills:design-system-bootstrap", desc: "DS em 3 prompts via Figma MCP + shadcn (sua skill)" },
      { trigger: "/anthropic-skills:chip-vento", desc: "Edita reel: corta pausas, legenda, trilha (sua skill)" },
      { trigger: "/anthropic-skills:referencia-primeiro", desc: "Escolhe referência real antes de criar visual (sua skill)" },
      { trigger: "/anthropic-skills:illustrator-corrigir-texto", desc: "Substitui texto em .ai via ExtendScript (sua skill)" },
      { trigger: "/anthropic-skills:mac-cleanup-boost", desc: "Libera RAM/disco do Mac (sua skill)" },
      { trigger: "/anthropic-skills:deep-research", desc: "Pesquisa multi-source com subagents" },
      { trigger: "/anthropic-skills:canvas-design", desc: "Poster/arte estática em PNG/PDF" },
      { trigger: "/anthropic-skills:theme-factory", desc: "10 temas pré-prontos pra artifacts" },
      { trigger: "/anthropic-skills:emil-design-eng", desc: "Filosofia Emil Kowalski: polimento de UI" },
      { trigger: "/anthropic-skills:brand-guidelines", desc: "Cores + tipografia oficial da Anthropic" },
      { trigger: "/anthropic-skills:docs", desc: "Docs editáveis colaborativos (default)" },
      { trigger: "/anthropic-skills:docx", desc: "Word .docx / .dotx" },
      { trigger: "/anthropic-skills:pptx", desc: "PowerPoint .pptx / .potx" },
      { trigger: "/anthropic-skills:xlsx", desc: "Planilhas .xlsx / .csv" },
      { trigger: "/anthropic-skills:pdf", desc: "Ler/criar/editar PDFs" },
      { trigger: "/anthropic-skills:morning", desc: "Morning brief em HTML artifact" },
      { trigger: "/anthropic-skills:computer-use", desc: "Controla o Mac via screenshot + clique" },
      { trigger: "/anthropic-skills:chrome-browser", desc: "Claude in Chrome (extensão)" },
      { trigger: "/anthropic-skills:built-in-browser", desc: "Browser pane do app" },
      { trigger: "/anthropic-skills:web-artifacts-builder", desc: "Artifacts complexos com React + shadcn" },
      { trigger: "/anthropic-skills:slack-gif-creator", desc: "GIFs animados pro Slack" },
      { trigger: "/anthropic-skills:internal-comms", desc: "Updates internos, status reports, FAQs" },
      { trigger: "/anthropic-skills:learn", desc: "Aprender conceitos (ELI5, flashcards, quiz)" },
      { trigger: "/anthropic-skills:skill-creator", desc: "Cria/edita/avalia skills" },
      { trigger: "/anthropic-skills:import-memory", desc: "Importa memória de outro assistente" },
      { trigger: "/anthropic-skills:algorithmic-art", desc: "Arte generativa com p5.js" },
      { trigger: "/anthropic-skills:mcp-builder", desc: "Cria servidores MCP em Python/TS" },
      { trigger: "/anthropic-skills:google-workspace", desc: "Docs/Sheets/Slides via connector" },
      { trigger: "/anthropic-skills:doc-coauthoring", desc: "Co-autoria estruturada de documentos" },
    ],
  },
  {
    title: "MCPs ativos",
    icon: "🔌",
    accent: "sky",
    items: [
      { trigger: "github", desc: "Repo ops (adan-site)" },
      { trigger: "vercel", desc: "Deploys + logs + 200 tools" },
      { trigger: "supabase", desc: "DB + edge functions + migrations" },
      { trigger: "figma", desc: "Design-to-code e code-to-design" },
      { trigger: "adobe", desc: "Firefly + Express + Acrobat + Stock" },
      { trigger: "gamma", desc: "Decks IA + templates" },
      { trigger: "higgsfield", desc: "Imagem/vídeo/áudio IA (200+ tools, Marketing Studio)" },
      { trigger: "lovable", desc: "App builder full-stack (TS + Tailwind + shadcn)" },
      { trigger: "make", desc: "Automação: cenários, hooks, data stores" },
      { trigger: "descript", desc: "Edita vídeo/áudio por texto (Agent Underlord)" },
      { trigger: "hyperframes", desc: "Vídeo HTML programável (HeyGen)" },
      { trigger: "mem", desc: "Notas, coleções e busca semântica" },
      { trigger: "google drive", desc: "Arquivos do Drive" },
      { trigger: "google calendar", desc: "Eventos + agendas" },
      { trigger: "gmail", desc: "Threads + drafts + labels" },
      { trigger: "spotify", desc: "Search + playlists" },
      { trigger: "claude docs", desc: "Docs editáveis colaborativos" },
      { trigger: "autodesk help", desc: "Catálogo + help content" },
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
