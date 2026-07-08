import Link from "next/link";

const reels = [
  {
    href: "/reels/cnvs",
    title: "CNVS: memória de IA compartilhada em arquivos JSONL",
    creator: "@thedoomguy_ai",
    summary:
      "Uma ferramenta multiagente que permite que Claude, Cursor e Codex compartilhem uma única memória — sem banco de dados, apenas arquivos JSONL que os agentes leem e escrevem diretamente.",
    verdict: "Ideia promissora, benchmark exagerado",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl flex-1 px-6 py-20 sm:px-10">
        <header className="mb-14">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Análises de Reels
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Análises honestas de reels de IA &amp; tecnologia
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Eu disseco vídeos curtos que fazem grandes afirmações — o que se
            sustenta, o que é marketing e o que realmente vale a pena testar.
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

        <aside className="mt-14 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          Fora da programação:{" "}
          <Link
            href="/tdah"
            className="font-medium text-zinc-700 underline hover:text-black dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            🧠 Entenda como o cérebro do Adan funciona
          </Link>
        </aside>
      </main>
    </div>
  );
}
