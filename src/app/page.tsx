// =============================================================
// EDITE AQUI — é só trocar os textos e links abaixo.
// =============================================================
const profile = {
  // Nome ou marca que aparece em destaque
  name: "Adan Cardoso",
  // Iniciais mostradas no avatar (deixe 1 ou 2 letras)
  initials: "AC",
  // Uma frase curta dizendo o que você faz
  tagline: "Bem-vindo! Escolhe por onde quer falar comigo. 👇",
};

// Botão principal (a ação mais importante). Deixe href = "" para esconder.
const primaryCta = {
  label: "Falar no WhatsApp",
  // Troque 55DDDNUMERO pelo seu número com DDI+DDD. Ex: 5511999999999
  href: "https://wa.me/55DDDNUMERO",
};

// Demais links. Adicione, remova ou reordene à vontade.
// Deixe um item de fora pra escondê-lo.
const links: { label: string; href: string }[] = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "E-mail", href: "mailto:adancardoso@gmail.com" },
];
// =============================================================

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        {/* Avatar com iniciais */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-foreground text-3xl font-semibold text-background select-none">
          {profile.initials}
        </div>

        {/* Nome + frase */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="max-w-xs text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {profile.tagline}
          </p>
        </div>

        {/* Links */}
        <nav className="flex w-full flex-col gap-3">
          {primaryCta.href && (
            <a
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 font-medium text-background transition-opacity hover:opacity-90"
            >
              {primaryCta.label}
            </a>
          )}

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-full items-center justify-center rounded-full border border-black/10 px-5 font-medium transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <footer className="pt-4 text-sm text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </div>
    </main>
  );
}
