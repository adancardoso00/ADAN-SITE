"use client";

import { useEffect, useState } from "react";
import { arsenal, type Item, type Section } from "./arsenal";

type AccentTheme = {
  glow: string;
  ring: string;
  text: string;
  chip: string;
  dot: string;
  hoverBg: string;
  borderHover: string;
};

const accentTheme: Record<string, AccentTheme> = {
  rose: {
    glow: "from-rose-500/40 via-rose-500/0 to-transparent",
    ring: "ring-rose-500/20",
    text: "text-rose-300",
    chip: "bg-rose-500/15 text-rose-200 ring-rose-500/30",
    dot: "bg-rose-400",
    hoverBg: "hover:bg-rose-500/[0.07]",
    borderHover: "group-hover/card:ring-rose-500/40",
  },
  orange: {
    glow: "from-orange-500/40 via-orange-500/0 to-transparent",
    ring: "ring-orange-500/20",
    text: "text-orange-300",
    chip: "bg-orange-500/15 text-orange-200 ring-orange-500/30",
    dot: "bg-orange-400",
    hoverBg: "hover:bg-orange-500/[0.07]",
    borderHover: "group-hover/card:ring-orange-500/40",
  },
  amber: {
    glow: "from-amber-400/40 via-amber-400/0 to-transparent",
    ring: "ring-amber-400/20",
    text: "text-amber-200",
    chip: "bg-amber-400/15 text-amber-100 ring-amber-400/30",
    dot: "bg-amber-300",
    hoverBg: "hover:bg-amber-400/[0.07]",
    borderHover: "group-hover/card:ring-amber-400/40",
  },
  lime: {
    glow: "from-lime-400/40 via-lime-400/0 to-transparent",
    ring: "ring-lime-400/20",
    text: "text-lime-200",
    chip: "bg-lime-400/15 text-lime-100 ring-lime-400/30",
    dot: "bg-lime-300",
    hoverBg: "hover:bg-lime-400/[0.07]",
    borderHover: "group-hover/card:ring-lime-400/40",
  },
  emerald: {
    glow: "from-emerald-500/40 via-emerald-500/0 to-transparent",
    ring: "ring-emerald-500/20",
    text: "text-emerald-300",
    chip: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/30",
    dot: "bg-emerald-400",
    hoverBg: "hover:bg-emerald-500/[0.07]",
    borderHover: "group-hover/card:ring-emerald-500/40",
  },
  teal: {
    glow: "from-teal-500/40 via-teal-500/0 to-transparent",
    ring: "ring-teal-500/20",
    text: "text-teal-300",
    chip: "bg-teal-500/15 text-teal-200 ring-teal-500/30",
    dot: "bg-teal-400",
    hoverBg: "hover:bg-teal-500/[0.07]",
    borderHover: "group-hover/card:ring-teal-500/40",
  },
  sky: {
    glow: "from-sky-500/40 via-sky-500/0 to-transparent",
    ring: "ring-sky-500/20",
    text: "text-sky-300",
    chip: "bg-sky-500/15 text-sky-200 ring-sky-500/30",
    dot: "bg-sky-400",
    hoverBg: "hover:bg-sky-500/[0.07]",
    borderHover: "group-hover/card:ring-sky-500/40",
  },
  violet: {
    glow: "from-violet-500/40 via-violet-500/0 to-transparent",
    ring: "ring-violet-500/20",
    text: "text-violet-300",
    chip: "bg-violet-500/15 text-violet-200 ring-violet-500/30",
    dot: "bg-violet-400",
    hoverBg: "hover:bg-violet-500/[0.07]",
    borderHover: "group-hover/card:ring-violet-500/40",
  },
  zinc: {
    glow: "from-zinc-400/30 via-zinc-400/0 to-transparent",
    ring: "ring-zinc-500/20",
    text: "text-zinc-300",
    chip: "bg-zinc-500/15 text-zinc-200 ring-zinc-500/30",
    dot: "bg-zinc-400",
    hoverBg: "hover:bg-zinc-500/[0.07]",
    borderHover: "group-hover/card:ring-zinc-500/40",
  },
};

export function ArsenalGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
    } catch {
      window.prompt("Copie manualmente:", text);
    }
  };

  const [hero, ...rest] = arsenal;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {hero && (
          <SectionCard
            section={hero}
            wide
            copied={copied}
            onCopy={copy}
          />
        )}
        {rest.map((section) => (
          <SectionCard
            key={section.title}
            section={section}
            copied={copied}
            onCopy={copy}
          />
        ))}
      </div>

      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 shadow-2xl shadow-black/40 ring-1 ring-white/20">
          <CheckIcon className="h-4 w-4 text-emerald-500" />
          <span>
            Copiado:{" "}
            <code className="font-mono text-rose-600">{copied}</code>
          </span>
        </div>
      </div>
    </>
  );
}

function SectionCard({
  section,
  wide,
  copied,
  onCopy,
}: {
  section: Section;
  wide?: boolean;
  copied: string | null;
  onCopy: (t: string) => void;
}) {
  const a = accentTheme[section.accent] ?? accentTheme.zinc;

  return (
    <section
      className={`group/card relative flex flex-col overflow-hidden rounded-3xl bg-zinc-900/60 ring-1 ${a.ring} ${a.borderHover} backdrop-blur-sm transition duration-300 ${
        wide ? "lg:col-span-3" : ""
      }`}
    >
      {/* Top glow */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b ${a.glow} blur-2xl opacity-70 group-hover/card:opacity-100 transition`}
      />

      <header className="relative flex items-start justify-between gap-4 px-7 pt-7 pb-5">
        <div className="flex items-center gap-4">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800/80 text-3xl shadow-inner ring-1 ring-white/5"
            aria-hidden
          >
            {section.icon}
          </span>
          <div>
            <h2
              className={`text-xl font-bold tracking-tight ${a.text}`}
            >
              {section.title}
            </h2>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              {section.items.length} {section.items.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold ring-1 ${a.chip}`}
        >
          {String(section.items.length).padStart(2, "0")}
        </span>
      </header>

      <ul
        className={`relative grid gap-1 px-4 pb-5 ${
          wide ? "sm:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {section.items.map((item) => (
          <li key={item.trigger}>
            <ItemRow
              item={item}
              accent={a}
              copied={copied === item.trigger}
              onCopy={() => onCopy(item.trigger)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ItemRow({
  item,
  accent,
  copied,
  onCopy,
}: {
  item: Item;
  accent: AccentTheme;
  copied: boolean;
  onCopy: () => void;
}) {
  const isLink = !!item.url;
  const common = `group/row relative flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition ${accent.hoverBg} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 focus-visible:ring-zinc-400`;

  const body = (
    <>
      <span
        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.dot} opacity-50 group-hover/row:opacity-100 transition`}
        aria-hidden
      />
      <span className="flex-1 min-w-0">
        <span className="block font-mono text-[13px] font-semibold text-zinc-100">
          {item.trigger}
        </span>
        <span className="block text-[12px] leading-snug text-zinc-400">
          {item.desc}
        </span>
      </span>
      <span
        className={`shrink-0 self-center font-mono text-[10px] uppercase tracking-wider transition ${
          copied
            ? `${accent.chip} px-2 py-0.5 rounded ring-1`
            : "text-zinc-500 opacity-0 group-hover/row:opacity-100 flex items-center gap-1"
        }`}
      >
        {copied ? (
          "copiado"
        ) : isLink ? (
          <>
            abrir <ExternalIcon className="h-3 w-3" />
          </>
        ) : (
          "copiar"
        )}
      </span>
    </>
  );

  if (isLink) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer noopener"
        className={common}
        aria-label={`Abrir ${item.trigger}`}
      >
        {body}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={common}
      aria-label={`Copiar ${item.trigger}`}
    >
      {body}
    </button>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.55a1 1 0 0 1-1.42 0l-3.5-3.525a1 1 0 1 1 1.42-1.408l2.79 2.81 6.79-6.835a1 1 0 0 1 1.414-.006Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 4h5v5M9 11l7-7M15 12.5V15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.5"
      />
    </svg>
  );
}
