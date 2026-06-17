import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CNVS: memória de IA compartilhada em JSONL — Análise de Reel",
  description:
    "Uma análise do reel de @thedoomguy_ai sobre o CNVS, uma ferramenta que permite que vários agentes de IA compartilhem memória através de arquivos JSONL simples em vez de um banco de dados.",
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
          ← Todas as análises
        </Link>

        <header className="mt-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Análise de reel · @thedoomguy_ai
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            CNVS: dar a cada agente de IA a mesma memória — com arquivos de texto
            simples
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A proposta: parar de reexplicar seu projeto toda vez que você troca
            entre Claude, Cursor e Codex. O CNVS dá a eles uma única memória
            compartilhada — e o &ldquo;banco de dados&rdquo; por trás disso são
            apenas arquivos JSONL que os agentes leem e escrevem diretamente.
          </p>
          <a
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
          >
            Assistir ao reel no Instagram ↗
          </a>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat value="JSONL" label="Formato de armazenamento" />
          <Stat value="Sem BD" label="Infraestrutura" />
          <Stat value="74%" label="Score Mem0 alegado" />
          <Stat value="68,5%" label="Alegado p/ concorrentes" />
        </div>

        <Section heading="O que o reel realmente afirma">
          <p>
            O criador argumenta que a parte interessante do CNVS não é a
            interface que chamou atenção — é a camada de memória. Vários agentes
            de código diferentes apontam para o mesmo armazenamento, então o
            contexto construído em uma ferramenta fica instantaneamente visível
            para as outras.
          </p>
          <p>
            O detalhe é o quão simples é esse armazenamento: em vez de um banco
            de dados vetorial ou um serviço gerenciado, os agentes acrescentam e
            leem de arquivos{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-base text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
              .jsonl
            </code>{" "}
            — um objeto JSON por linha. O número de destaque é um benchmark
            citado da Mem0, no qual essa abordagem simples atinge 74% contra
            68,5% de concorrentes mais complexos, enquadrado como &ldquo;simples
            vence o complicado&rdquo;.
          </p>
        </Section>

        <Section heading="O que se sustenta">
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              A dor central é real.
            </strong>{" "}
            Qualquer um que pula entre ferramentas de IA para código conhece o
            custo de recolar contexto. Uma memória compartilhada e independente
            de ferramenta é um enquadramento genuinamente bom, e mantê-la como
            arquivos planos a torna transparente, comparável por diff e fácil de
            versionar no git.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              JSONL é uma base sensata.
            </strong>{" "}
            JSON delimitado por linha e somente-append é exatamente o que muitos
            sistemas de log e memória já usam. É legível por humanos, transmite
            em streaming e não exige infraestrutura — o que importa muito para um
            fluxo de desenvolvimento local.
          </p>
        </Section>

        <Section heading="Do que desconfiar">
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;74% vs 68,5%&rdquo; carrega muito peso.
            </strong>{" "}
            Um único número de benchmark, citado sem a tarefa, a divisão do
            dataset ou a configuração de recuperação, não é prova de que o mais
            simples é melhor em geral. Scores no estilo Mem0 dependem fortemente
            de como as memórias são recuperadas, não apenas de como são
            armazenadas — e o ponto de comparação (&ldquo;concorrentes&rdquo;)
            fica vago.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;Sem banco de dados&rdquo; esconde trade-offs reais.
            </strong>{" "}
            Arquivos planos são ótimos até você precisar de escritas concorrentes
            de vários agentes, busca semântica rápida sobre milhares de entradas
            ou compactação para o arquivo não crescer para sempre. Esses são
            exatamente os problemas que os bancos de dados existem para resolver;
            ignorá-los é uma escolha, não uma vantagem grátis.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;Memória compartilhada&rdquo; ainda precisa de recuperação.
            </strong>{" "}
            Ler a fatia certa de um arquivo JSONL crescente para uma janela de
            contexto limitada é a parte difícil. O reel vende o armazenamento; o
            valor mora na parte que ele não mostra.
          </p>
        </Section>

        <Section heading="Veredito">
          <p>
            Uma ideia afiada embrulhada em uma estatística um pouco exagerada. O
            problema (memória fragmentada entre agentes) vale a pena resolver e o
            JSONL é uma forma razoável e refrescantemente sem graça de começar.
            Trate o destaque dos 74% como marketing, não como prova — mas a
            aposta de fundo, de que dá para ir longe com arquivos simples antes
            de recorrer a infraestrutura pesada, é justa e fácil o suficiente de
            testar no seu próprio projeto.
          </p>
        </Section>

        <footer className="mt-14 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          Análise baseada no reel de{" "}
          <a
            href={REEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-700 underline hover:text-black dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            @thedoomguy_ai
          </a>
          . Os números de benchmark são alegações do criador, não verificados de
          forma independente.
        </footer>
      </article>
    </div>
  );
}
