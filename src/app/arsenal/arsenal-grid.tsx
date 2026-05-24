"use client";

import { useEffect, useState } from "react";
import { accents, arsenal, type Item } from "./arsenal";

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

  return (
    <>
      <div className="grid auto-rows-min grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {arsenal.map((section) => {
          const c = accents[section.accent];
          return (
            <section
              key={section.title}
              className={`relative flex flex-col overflow-hidden rounded-2xl ring-1 ${c.bg} ${c.ring}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 ${c.bar}`} />
              <header className="flex items-center justify-between px-5 pt-6 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl leading-none" aria-hidden>
                    {section.icon}
                  </span>
                  <h2
                    className={`text-base font-bold tracking-tight ${c.text}`}
                  >
                    {section.title}
                  </h2>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[11px] font-semibold ${c.chip}`}
                >
                  {section.items.length}
                </span>
              </header>

              <ul className="flex flex-col gap-1 px-3 pb-4">
                {section.items.map((item) => (
                  <li key={item.trigger}>
                    <ItemRow
                      item={item}
                      accent={c}
                      copied={copied === item.trigger}
                      onCopy={() => copy(item.trigger)}
                    />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <div
        aria-live="polite"
        className={`pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
          <CheckIcon className="h-4 w-4 text-emerald-400" />
          <span>
            Copiado:{" "}
            <code className="font-mono text-emerald-300">{copied}</code>
          </span>
        </div>
      </div>
    </>
  );
}

function ItemRow({
  item,
  accent,
  copied,
  onCopy,
}: {
  item: Item;
  accent: (typeof accents)[keyof typeof accents];
  copied: boolean;
  onCopy: () => void;
}) {
  const isLink = !!item.url;
  const common = `group flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition ${accent.hover} ${accent.active} focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-zinc-400`;

  const body = (
    <>
      <span className="flex-1 min-w-0">
        <span className="block font-mono text-[14px] font-semibold text-zinc-900">
          {item.trigger}
        </span>
        <span className="block text-xs leading-snug text-zinc-600">
          {item.desc}
        </span>
      </span>
      <span
        className={`shrink-0 self-center font-mono text-[10px] uppercase tracking-wider transition ${
          copied
            ? `${accent.chip} px-1.5 py-0.5 rounded`
            : "text-zinc-400 opacity-0 group-hover:opacity-100 flex items-center gap-1"
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
