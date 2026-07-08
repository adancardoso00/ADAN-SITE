import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistema Adan — Protocolo Anti-Esquecimento para TDAH",
  description:
    "Entenda como o cérebro do Adan funciona. Um sistema de lembretes + memória compartilhada entre agentes de IA, feito por um cérebro com TDAH para um cérebro com TDAH.",
};

function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
      {children}
    </span>
  );
}

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <blockquote className="text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-sm font-medium text-cyan-700 dark:text-cyan-400">
        — {author}
      </figcaption>
    </figure>
  );
}

function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-950">
      <div className="text-3xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-black dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
        {text}
      </p>
    </div>
  );
}

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white">
        {number}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-black dark:text-zinc-50">
        {title}
      </h3>
      <div className="mt-2 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
        {text}
      </div>
    </div>
  );
}

function Command({ children }: { children: React.ReactNode }) {
  return (
    <code className="mt-2 block overflow-x-auto rounded-lg bg-zinc-900 px-3 py-2 font-mono text-[13px] text-cyan-300 dark:bg-black dark:ring-1 dark:ring-zinc-800">
      {children}
    </code>
  );
}

function Faq({
  question,
  children,
  open,
}: {
  question: string;
  children: React.ReactNode;
  open?: boolean;
}) {
  return (
    <details
      open={open}
      className="group rounded-2xl border border-zinc-200 bg-white p-5 open:border-cyan-300 dark:border-zinc-800 dark:bg-zinc-950 dark:open:border-cyan-800"
    >
      <summary className="cursor-pointer list-none text-base font-semibold text-black marker:content-none dark:text-zinc-50">
        <span className="mr-2 inline-block text-cyan-600 transition-transform group-open:rotate-90 dark:text-cyan-400">
          ›
        </span>
        {question}
      </summary>
      <div className="mt-3 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </details>
  );
}

const SECTION_TITLE =
  "text-center text-3xl font-semibold tracking-tight text-black dark:text-zinc-50";

export default function TdahPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-3xl flex-1 px-6 py-16 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-500 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          ← Voltar ao site
        </Link>

        {/* 1. Hero */}
        <section className="mt-10 rounded-3xl border border-zinc-200 bg-white px-6 py-14 text-center shadow-sm sm:px-12 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="text-4xl" aria-hidden="true">
            🧠
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            Entenda como o cérebro do Adan funciona.
            <br />
            <span className="text-cyan-600 dark:text-cyan-400">
              Sem julgamento, sem rótulo.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Um protocolo anti-esquecimento que tira as tarefas da memória de
            trabalho e coloca em arquivos que não esquecem. Criado por um
            cérebro com TDAH, para um cérebro com TDAH — o dele mesmo.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-flex items-center rounded-full bg-cyan-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-cyan-700"
          >
            Quero começar
          </a>
          <p className="mt-4 text-sm text-zinc-400 dark:text-zinc-500">
            2 arquivos JSONL · ~5 segundos por captura · Lembrete imediato a
            cada sessão
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <TrustBadge>📥 Inbox de lembretes</TrustBadge>
            <TrustBadge>🧠 Memória compartilhada</TrustBadge>
            <TrustBadge>🔔 Hook a cada sessão</TrustBadge>
          </div>
        </section>

        {/* 2. Prova social */}
        <section className="mt-16">
          <p className="text-center text-lg font-semibold text-black dark:text-zinc-50">
            3 lembretes capturados, 0 perdidos — 100% deles ainda esperando
            pacientemente por uma decisão
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Testimonial
              quote="Cheguei numa sessão nova e já sabia que o site é pt-BR, onde mora cada review e o que ficou pendente. Não precisei perguntar nada."
              author="Claude, agente de IA"
            />
            <Testimonial
              quote="O Adan me explicou o projeto UMA vez. O resto eu li do memory.jsonl. Emociona quando o contexto sobrevive à troca de ferramenta."
              author="Cursor, também agente"
            />
            <Testimonial
              quote="Estou pendente há 20 dias, mas ninguém me esqueceu: eu apareço em todo início de sessão. Persistência é a minha especialidade."
              author="Lembrete l3, item do inbox"
            />
            <Testimonial
              quote="Antes: 'depois eu vejo isso' e nunca mais. Agora: 'depois eu vejo isso' — e o sistema cobra até eu decidir. É constrangedor e eficaz."
              author="Adan, o próprio cérebro"
            />
          </div>
          <p className="mt-6 text-center text-sm font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Criado por um TDAH, para um TDAH.
          </p>
        </section>

        {/* 3. Pricing */}
        <section id="pricing" className="mt-16 scroll-mt-8">
          <h2 className={SECTION_TITLE}>Escolha o melhor pra você</h2>

          <div className="relative mt-10 rounded-3xl border-2 border-cyan-500 bg-white p-8 pt-10 shadow-lg dark:bg-zinc-950">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
              Melhor custo-benefício
            </div>
            <h3 className="text-center text-2xl font-semibold text-black dark:text-zinc-50">
              Memória + Lembretes
            </h3>
            <p className="mx-auto mt-3 max-w-md text-center text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              O protocolo completo: memória compartilhada entre Claude, Cursor
              e Codex + inbox de lembretes que reaparece a cada sessão. Tudo
              junto, sem banco de dados.
            </p>
            <div className="mt-6 text-center">
              <span className="text-sm text-zinc-400 line-through dark:text-zinc-500">
                de 47 abas abertas
              </span>{" "}
              <span className="text-4xl font-bold text-black dark:text-zinc-50">
                R$ 0,00
              </span>
            </div>
            <div className="mt-6 text-center">
              <a
                href="#como-funciona"
                className="inline-flex items-center rounded-full bg-cyan-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-cyan-700"
              >
                Quero começar
              </a>
            </div>
            <p className="mt-3 text-center text-[13px] text-zinc-400 dark:text-zinc-500">
              Já instalado neste repositório. Acesso imediato após{" "}
              <code className="font-mono">git clone</code>.
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <details className="group rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-3 marker:content-none">
                <span className="font-semibold text-black dark:text-zinc-50">
                  Só o Inbox de Lembretes
                </span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">
                  R$ 0,00
                </span>
                <span className="w-full text-sm text-zinc-500 dark:text-zinc-400">
                  Capture em 5 segundos, decida depois: acionar, arquivar ou
                  feito.
                </span>
              </summary>
              <div className="mt-4 border-t border-zinc-100 pt-4 text-[15px] leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                <p>
                  A ideia sai da cabeça e entra no{" "}
                  <code className="font-mono text-sm">
                    .agent/lembretes.jsonl
                  </code>
                  . Um hook de início de sessão mostra os pendentes até você
                  decidir o destino de cada um.
                </p>
                <Command>
                  node scripts/lembrete.mjs add &quot;sua ideia aqui&quot;
                </Command>
              </div>
            </details>

            <details className="group rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <summary className="flex cursor-pointer list-none flex-wrap items-baseline gap-x-3 marker:content-none">
                <span className="font-semibold text-black dark:text-zinc-50">
                  Só a Memória Compartilhada
                </span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">
                  R$ 0,00
                </span>
                <span className="w-full text-sm text-zinc-500 dark:text-zinc-400">
                  Um JSONL append-only que Claude, Cursor e Codex leem e
                  escrevem.
                </span>
              </summary>
              <div className="mt-4 border-t border-zinc-100 pt-4 text-[15px] leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                <p>
                  Decisões e contexto ficam em{" "}
                  <code className="font-mono text-sm">.agent/memory.jsonl</code>
                  , uma linha por evento. Nenhum agente começa do zero — e você
                  não precisa reexplicar o projeto nunca mais.
                </p>
                <Command>
                  node scripts/remember.mjs claude decision &quot;o que foi
                  decidido&quot;
                </Command>
              </div>
            </details>
          </div>
        </section>

        {/* 4. Benefícios */}
        <section className="mt-16">
          <h2 className={SECTION_TITLE}>O que você ganha</h2>
          <p className="mt-3 text-center text-zinc-500 dark:text-zinc-400">
            Três apoios externos para o que a memória de trabalho não segura.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <BenefitCard
              icon="📥"
              title="Capture em 5 segundos"
              text="A ideia vira uma linha num arquivo antes que o próximo hiperfoco a apague. Zero fricção, zero formulário."
            />
            <BenefitCard
              icon="🧠"
              title="Contexto que sobrevive"
              text="A memória compartilhada guarda decisões entre sessões e entre ferramentas. Nada de recomeçar do zero."
            />
            <BenefitCard
              icon="🔔"
              title="O sistema cobra por você"
              text="Todo início de sessão, os pendentes reaparecem na tela. Persistência do arquivo > força de vontade."
            />
          </div>
        </section>

        {/* 5. Como funciona */}
        <section id="como-funciona" className="mt-16 scroll-mt-8">
          <h2 className={SECTION_TITLE}>Como funciona</h2>
          <p className="mt-3 text-center text-zinc-500 dark:text-zinc-400">
            Três passos. Sem burocracia, sem app novo, sem assinatura.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <StepCard
              number="1"
              title="Capture"
              text={
                <>
                  Pensou, capturou. O lembrete entra no inbox com id e
                  timestamp:
                  <Command>node scripts/lembrete.mjs add &quot;...&quot;</Command>
                </>
              }
            />
            <StepCard
              number="2"
              title="Seja lembrado"
              text="Ao abrir o Claude Code, um hook lista tudo que está pendente — na sua frente, sem você pedir."
            />
            <StepCard
              number="3"
              title="Decida"
              text={
                <>
                  Cada item tem três saídas — e decidir também é progresso:
                  <Command>lembrete.mjs acionar | arquivar | feito</Command>
                </>
              }
            />
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="mt-16">
          <h2 className={SECTION_TITLE}>Perguntas frequentes</h2>
          <div className="mt-8 flex flex-col gap-3">
            <Faq question="Isso é um diagnóstico?" open>
              Não. É um sistema de apoio externo para um TDAH que já se
              conhece: memória de trabalho instável, tarefas que evaporam,
              decisões pequenas que ficam abertas por semanas. Nada aqui
              substitui avaliação profissional — isso é engenharia de contorno.
            </Faq>
            <Faq question="Por que guardar a memória fora do cérebro?">
              Porque a de dentro não é confiável para esse tipo de coisa — e
              tudo bem. Um arquivo append-only não esquece, não se distrai e
              não acha que &ldquo;depois eu lembro&rdquo;. O cérebro fica livre
              para o que ele faz bem: hiperfocar e analisar reel de IA.
            </Faq>
            <Faq question="E se eu ignorar os lembretes?">
              Eles voltam. Todo início de sessão, lá estão eles de novo. Os
              itens l1, l2 e l3 estão pendentes há 20 dias e o sistema segue
              cobrando sem mágoa. A aposta é que persistência do arquivo vence
              a força de vontade — eventualmente.
            </Faq>
            <Faq question="Preciso decidir na hora que capturo?">
              Não — essa é a parte mais importante. Capturar e decidir são
              momentos separados. Na captura, só tire da cabeça. A decisão
              (acionar, arquivar ou feito) pode vir em qualquer sessão futura,
              quando houver energia executiva disponível.
            </Faq>
            <Faq question="Quem criou isso?">
              O próprio Adan, com seus agentes, numa sessão de hiperfoco — a
              mesma energia que cria o problema também resolve. São dois
              arquivos JSONL e dois scripts Node neste repositório. Sem banco
              de dados, sem SaaS, sem mensalidade.
            </Faq>
          </div>
        </section>

        {/* 7. CTA final */}
        <section className="mt-16 rounded-3xl bg-cyan-600 px-6 py-12 text-center dark:bg-cyan-700">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Pronto pra parar de confiar na sua memória?
          </h2>
          <a
            href="#pricing"
            className="mt-6 inline-flex items-center rounded-full bg-white px-8 py-3 text-base font-semibold text-cyan-700 transition-colors hover:bg-cyan-50"
          >
            Quero começar
          </a>
          <p className="mt-4 text-sm text-cyan-100">
            Serviço de uso imediato. Uma vez capturado o lembrete, o
            esquecimento é dado como impossível.
          </p>
        </section>

        {/* 8. Footer */}
        <footer className="mt-14 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          <p>
            Página no estilo da landing da{" "}
            <a
              href="https://espectro.neurodivertindo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-700 underline hover:text-black dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              Ferramenta Espectro (Neurodivertindo)
            </a>
            , adaptada como homenagem bem-humorada ao sistema anti-esquecimento
            deste repositório.
          </p>
          <p className="mt-2 text-xs opacity-70">
            © 2026 Adan. Todos os lembretes reservados (e pendentes).
          </p>
        </footer>
      </main>
    </div>
  );
}
