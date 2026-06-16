"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    title: "Velocidade absurda",
    body: "Da ideia ao deploy em minutos. Sem fricção, sem boilerplate infinito — só o que importa.",
    glyph: "⚡",
  },
  {
    title: "Design que impressiona",
    body: "Interfaces com gradientes vivos, animações suaves e um acabamento que parece feito à mão.",
    glyph: "✦",
  },
  {
    title: "Construído com cuidado",
    body: "Acessível, responsivo e leve. Respeita prefers-reduced-motion e funciona em qualquer tela.",
    glyph: "◈",
  },
];

const stats = [
  { value: "100%", label: "feito por IA" },
  { value: "0ms", label: "de paciência perdida" },
  { value: "∞", label: "iterações possíveis" },
];

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Scroll-reveal
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Cursor spotlight follows the pointer
  function handlePointer(e: React.PointerEvent<HTMLDivElement>) {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={rootRef}
      onPointerMove={handlePointer}
      className="relative flex-1 overflow-hidden bg-[#050507] text-zinc-100"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-fuchsia-600/30 blur-[120px] animate-aurora" />
        <div className="absolute right-[-10%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-indigo-600/30 blur-[120px] animate-float" />
        <div className="absolute bottom-[-15%] left-[-5%] h-[38rem] w-[38rem] rounded-full bg-sky-500/25 blur-[120px] animate-aurora" />
      </div>

      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgba(168,85,247,0.18), transparent 70%)",
        }}
      />

      {/* Nav */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">
          ADAN<span className="text-fuchsia-400">.</span>
        </span>
        <nav className="hidden gap-8 text-sm text-zinc-400 sm:flex">
          <a className="transition-colors hover:text-white" href="#features">
            Recursos
          </a>
          <a className="transition-colors hover:text-white" href="#stats">
            Números
          </a>
          <a className="transition-colors hover:text-white" href="#cta">
            Começar
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-24 pt-20 text-center sm:pt-28">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
          O Claude se superou nessa 🔥
        </div>

        <h1
          className="animate-rise mt-8 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Inteligência que{" "}
          <span className="text-gradient">se supera</span>
          <br />a cada iteração.
        </h1>

        <p
          className="animate-rise mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
          style={{ animationDelay: "160ms" }}
        >
          Uma landing page construída do zero por IA — gradientes vivos,
          animações suaves e interatividade real. Mexa o mouse e veja a luz
          seguir você.
        </p>

        <div
          className="animate-rise mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#cta"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-7 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Quero ver funcionando
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-medium text-zinc-200 transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Explorar recursos
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className="reveal group relative rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-sky-500/30 text-xl">
                {f.glyph}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        id="stats"
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="reveal grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-semibold text-gradient sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-zinc-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="mx-auto w-full max-w-4xl px-6 py-24 text-center"
      >
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-16 backdrop-blur">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/30 blur-[90px] animate-pulse-glow" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Pronto para a próxima ideia?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Manda o próximo prompt e essa página vira o que você imaginar. Sem
            espera, sem fricção.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Bora construir
          </a>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-center text-xs text-zinc-600">
        Feito com Next.js + Tailwind — construído por IA, com capricho.
      </footer>
    </div>
  );
}
