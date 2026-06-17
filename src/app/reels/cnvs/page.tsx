import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CNVS: shared AI memory in JSONL — Reel Review",
  description:
    "A breakdown of @thedoomguy_ai's reel on CNVS, a tool that lets multiple AI agents share memory through plain JSONL files instead of a database.",
};

const REEL_URL = "https://www.instagram.com/reel/DZmy-LjATDH/";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-2xl font-semibold text-black dark:text-zinc-50">
        {value}
      </div>
      <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {label}
      </div>
    </div>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {heading}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function CnvsReelReview() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <article className="w-full max-w-3xl flex-1 px-6 py-16 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← All reviews
        </Link>

        <header className="mt-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Reel review · @thedoomguy_ai
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            CNVS: giving every AI agent the same memory — with plain text files
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The pitch: stop re-explaining your project every time you switch
            between Claude, Cursor and Codex. CNVS gives them a single shared
            memory — and the &ldquo;database&rdquo; behind it is just JSONL files
            the agents read and write directly.
          </p>
          <a
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
          >
            Watch the reel on Instagram ↗
          </a>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat value="JSONL" label="Storage format" />
          <Stat value="No DB" label="Infrastructure" />
          <Stat value="74%" label="Claimed Mem0 score" />
          <Stat value="68.5%" label="Claimed for rivals" />
        </div>

        <Section heading="What the reel actually claims">
          <p>
            The creator argues that the interesting part of CNVS isn&rsquo;t the
            interface that got it attention — it&rsquo;s the memory layer. Several
            different coding agents point at the same store, so context built up
            in one tool is instantly visible to the others.
          </p>
          <p>
            The twist is how plain that store is: rather than a vector database
            or a managed service, agents append to and read from{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-base text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              .jsonl
            </code>{" "}
            files — one JSON object per line. The headline number is a quoted
            Mem0 benchmark where this simple approach lands at 74% versus 68.5%
            for more complex competitors, framed as &ldquo;simple beats
            complicated.&rdquo;
          </p>
        </Section>

        <Section heading="What holds up">
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              The core pain is real.
            </strong>{" "}
            Anyone who hops between AI coding tools knows the tax of re-pasting
            context. A shared, tool-agnostic memory is a genuinely good framing,
            and keeping it as flat files makes it transparent, diffable and easy
            to version in git.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              JSONL is a sensible substrate.
            </strong>{" "}
            Append-only line-delimited JSON is exactly what a lot of logging and
            memory systems already use. It&rsquo;s human-readable, streamable,
            and needs zero infrastructure — which matters a lot for a local dev
            workflow.
          </p>
        </Section>

        <Section heading="What to be skeptical of">
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;74% vs 68.5%&rdquo; is doing a lot of work.
            </strong>{" "}
            A single benchmark number, quoted without the task, dataset split or
            retrieval setup, isn&rsquo;t evidence that simpler is better in
            general. Mem0-style scores depend heavily on how memories are
            retrieved, not just how they&rsquo;re stored — and the comparison
            point (&ldquo;competitors&rdquo;) is left vague.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;No database&rdquo; hides real tradeoffs.
            </strong>{" "}
            Flat files are great until you need concurrent writes from multiple
            agents, fast semantic search over thousands of entries, or
            compaction so the file doesn&rsquo;t grow forever. Those are the
            exact problems databases exist to solve; skipping them is a choice,
            not a free win.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;Shared memory&rdquo; still needs retrieval.
            </strong>{" "}
            Reading the right slice of a growing JSONL file into a limited
            context window is the hard part. The reel sells the storage; the
            value lives in the part it doesn&rsquo;t show.
          </p>
        </Section>

        <Section heading="Verdict">
          <p>
            A sharp idea wrapped in a slightly oversold stat. The problem
            (fragmented agent memory) is worth solving and JSONL is a reasonable,
            refreshingly boring way to start. Treat the 74% headline as
            marketing, not proof — but the underlying bet that you can get far
            with plain files before reaching for heavy infrastructure is a fair
            one, and easy enough to test on your own project.
          </p>
        </Section>

        <footer className="mt-14 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          Review based on the reel by{" "}
          <a
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-700 underline hover:text-black dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            @thedoomguy_ai
          </a>
          . Benchmark figures are the creator&rsquo;s claims, not independently
          verified.
        </footer>
      </article>
    </div>
  );
}
