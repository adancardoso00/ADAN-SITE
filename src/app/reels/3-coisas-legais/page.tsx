import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3 coisas legais: FLIM, Callahan e Kurzgesagt — Análise de Reel",
  description:
    "Uma análise do reel de @isadorabitten com três indicações de curadoria: o banco de referências audiovisuais FLIM (“Film AI”), cerâmica com humor da Callahan e o vídeo do Kurzgesagt sobre gratidão.",
};

const REEL_URL = "https://www.instagram.com/reel/DatXUdPtG1w/";

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

export default function TresCoisasLegaisReelReview() {
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
            Análise de reel · @isadorabitten
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            &ldquo;3 coisas legais&rdquo; #8: curadoria contra a rolagem
            automática
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A proposta: um quadro recorrente de indicações — ou coolhunting, pra
            quem gosta de nome chique — com três conteúdos &ldquo;que valem seu
            tempo e sua atenção&rdquo;: o banco de referências audiovisuais
            &ldquo;Film AI&rdquo;, a cerâmica bem-humorada da Callahan e o vídeo
            &ldquo;O Antídoto para a Insatisfação&rdquo;.
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
          <Stat value="3" label="Indicações no episódio" />
          <Stat value="#8" label="Episódio do quadro" />
          <Stat value="FLIM" label="Nome real do 'Film AI'" />
          <Stat value="2,3 mil" label="Curtidas no reel" />
        </div>

        <Section heading="O que o reel realmente propõe">
          <p>
            Diferente de reels que vendem uma ferramenta milagrosa, este é um
            episódio de curadoria: três indicações de naturezas completamente
            diferentes — um banco de referências audiovisuais, uma ceramista com
            humor e um vídeo de divulgação científica sobre saúde mental — unidas
            por uma tese só: &ldquo;referência boa não vem só do óbvio, ela
            aparece quando a gente sai da rota automática&rdquo;.
          </p>
          <p>
            O argumento de fundo é que a internet ainda pode servir para{" "}
            <strong className="font-semibold text-black dark:text-zinc-50">
              expandir repertório, não só distrair
            </strong>{" "}
            — e que curadoria humana é o caminho para isso.
          </p>
        </Section>

        <Section heading="O que se sustenta">
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              As três indicações são reais e boas.
            </strong>{" "}
            O &ldquo;Film AI&rdquo; do reel é o FLIM (flim.ai), um banco com
            dezenas de milhares de frames em alta definição de filmes, clipes e
            propagandas, indexados por IA — que detecta objetos, cores, figurino
            e composição — num esquema parecido com o ShotDeck. Para quem
            trabalha com audiovisual ou direção de arte, é uma indicação
            legítima, não uma curiosidade.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              O vídeo tem respaldo de verdade.
            </strong>{" "}
            &ldquo;O Antídoto para a Insatisfação&rdquo; é do Kurzgesagt, canal
            conhecido por divulgação científica com fontes publicadas — o vídeo
            resume a pesquisa sobre gratidão como prática contra a insatisfação
            crônica. Chamar isso de &ldquo;saúde mental com respaldo&rdquo; é um
            enquadramento honesto.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              A curadoria é transparente.
            </strong>{" "}
            Não há link de afiliado, cupom nem produto próprio embutido. O
            formato de quadro recorrente (episódio #8) também cria um histórico
            público que dá para auditar: ou as indicações passadas eram boas, ou
            não eram.
          </p>
        </Section>

        <Section heading="Do que desconfiar">
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;Film AI&rdquo; não é o nome da ferramenta.
            </strong>{" "}
            O serviço se chama FLIM — o nome trocado no reel dificulta justamente
            o que a indicação deveria facilitar: encontrar a ferramenta. E o
            detalhe que o reel não menciona: o FLIM é freemium, com poucas buscas
            gratuitas por dia e planos pagos a partir de ~13 € por mês. Vale
            saber antes de se empolgar.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              &ldquo;Sair da rota automática&rdquo;… dentro da rota automática.
            </strong>{" "}
            Há uma ironia estrutural: um reel — o formato símbolo da rolagem
            infinita — pregando contra a distração, encerrando com o clássico
            CTA de engajamento (&ldquo;me conta aqui 👇&rdquo;). Não invalida as
            indicações, mas lembra que curadoria no Instagram também é conteúdo
            jogando o jogo do algoritmo.
          </p>
          <p>
            <strong className="font-semibold text-black dark:text-zinc-50">
              Vídeo sobre gratidão não é tratamento.
            </strong>{" "}
            O Kurzgesagt faz divulgação científica de qualidade, mas um vídeo de
            10 minutos sobre gratidão é ponto de partida, não substituto de
            acompanhamento profissional — distinção que o rótulo &ldquo;saúde
            mental com respaldo&rdquo; comprime demais.
          </p>
        </Section>

        <Section heading="Veredito">
          <p>
            Curadoria genuína, do tipo que o formato reel raramente entrega: três
            indicações verificáveis, de graça (quase — o FLIM é freemium), sem
            venda embutida. As ressalvas são de precisão, não de má-fé: o nome
            errado da ferramenta e o rótulo generoso demais para o vídeo do
            Kurzgesagt. Se o critério é &ldquo;vale seu tempo e sua
            atenção&rdquo;, o reel passa no próprio teste.
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
            @isadorabitten
          </a>
          . Informações sobre o FLIM (nome, acervo e preços) verificadas em
          fontes públicas; curtidas conforme exibidas no Instagram na data da
          análise.
        </footer>
      </article>
    </div>
  );
}
