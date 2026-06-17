import Link from "next/link";

const reels = [
  {
    href: "/reels/cnvs",
    title: "CNVS: shared AI memory in plain JSONL files",
    creator: "@thedoomguy_ai",
    summary:
      "A multi-agent tool that lets Claude, Cursor and Codex share one memory — no database, just JSONL the agents read and write directly.",
    verdict: "Promising idea, oversold benchmark",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl flex-1 px-6 py-20 sm:px-10">
        <header className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Reel Reviews
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Honest breakdowns of AI &amp; tech reels
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I pull apart short videos that make big claims — what holds up, what
            is marketing, and what is actually worth trying.
          </p>
        </header>

        <ul className="flex flex-col gap-4">
          {reels.map((reel) => (
            <li key={reel.href}>
              <Link
                href={reel.href}
                className="group block rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900">
                    {reel.verdict}
                  </span>
                  <span className="text-sm text-zinc-400 dark:text-zinc-500">
                    {reel.creator}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-black group-hover:underline dark:text-zinc-50">
                  {reel.title}
                </h2>
                <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
                  {reel.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
