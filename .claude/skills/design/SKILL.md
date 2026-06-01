---
name: design
description: Use when designing or evaluating visual work in this repo — UI components, page layouts, hero sections, landing pages, dashboards, marketing visuals. Triggers on words like "design", "layout", "componente visual", "hero", "tipografia", "hierarquia visual", "espaçamento", "cores". Provides the consolidated design vocabulary used by the project (Binac's 12 princípios de Design de Conteúdo + 12 Elementos do Design + Vanessa Aranda's Princípios do Design). NOT for the carousel writer flow — that skill explicitly forbids design decisions in its output.
---

# Design — Vocabulário e Princípios

Referência interna pra qualquer trabalho visual neste projeto: UI, layouts, hero sections, componentes, marketing. Consolida três fontes:

1. **Binac — Design de Conteúdo** (12 princípios)
2. **12 Elementos do Design** (vocabulário de building blocks)
3. **Vanessa Aranda — Princípios do Design** (8 princípios fundamentais)

Quando houver conflito, prevalece a fonte mais específica ao contexto. Em UI funcional (botões, forms, dashboards), priorizar Binac + Elementos. Em peças autorais/marketing, priorizar Aranda.

---

## Camada 1 — Elementos (building blocks)

Os átomos do design. Toda decisão visual passa por escolher e combinar esses 12:

| Elemento | O que é |
|---|---|
| **Grid** | Estrutura invisível que organiza tudo. Define colunas, gutters, baseline. |
| **Contraste** | Diferença entre elementos (claro/escuro, grande/pequeno, fino/grosso). Sem contraste não há leitura. |
| **Hierarquia** | Ordem de importância visual. O olho sabe pra onde ir primeiro. |
| **Cores** | Sistema de paleta — primária, secundária, neutros, semânticas (sucesso/erro). |
| **Movimento** | Direção implícita do olhar (mesmo em estático). Setas, diagonais, padrões em arco. |
| **Linha** | Divisores, sublinhados, traços. Estrutura sem peso de bloco. |
| **Profundidade** | Camadas. Shadow, blur, scale, z-index, paralaxe. |
| **Tipografia** | Família, peso, tamanho, leading, tracking. O texto é 80% da UI. |
| **Escala** | Razão entre tamanhos. Escala tipográfica (1.125, 1.25, 1.333), escala de espaçamento (4/8/16/24/32). |
| **Ajustamento** | Ajuste fino — kerning, baseline shift, optical alignment. O que separa amador de profissional. |
| **Simetria** | Eixo central. Útil pra formal/clássico; quebrar pra dinâmico. |
| **Transparência** | Opacidade, glass effects, overlays. Cria camadas sem adicionar peso. |

---

## Camada 2 — Princípios de Composição (Aranda)

Como combinar os elementos. Aplicáveis a qualquer peça visual:

### Equilíbrio
Arranjo de elementos para criar estabilidade visual. Três tipos: **simétrico** (formal, confiável), **assimétrico** (dinâmico, moderno), **radial** (foco central). Em UI funcional, assimétrico costuma vencer.

### Proporção
Relação de tamanho entre objetos. Use razões (1:1.618 áurea, 1:2, 1:3) em vez de medidas arbitrárias. Hero ≠ subtítulo ≠ corpo de texto — a diferença precisa ser óbvia.

### Ênfase
Característica dominante que atrai o olhar primeiro. **Cada tela tem UM ponto focal.** Conseguido via cor, escala, contraste, isolamento.

### Contraste
Arranjo de elementos opostos. Direciona o público pro ponto focal e cria interesse visual. Sem contraste, tudo vira ruído cinza.

### Repetição
Uso repetido de um elemento para criar eco visual. Cria coesão e ritmo. Em UI: mesmo radius nos cards, mesmo gap entre seções, mesma proporção de aspect ratio.

### Padrão
Repetição em **arranjo recorrente e previsível** (sequência). Diferente de repetição: padrão tem regra de organização. Útil em backgrounds, ilustrações, grids decorativos.

### Harmonia
Combinação de elementos repetidos **com variações**. Mesma família, dimensões diferentes. Ex: 3 cards do mesmo tipo, mas o do meio levemente maior pra criar interesse.

### Unidade
Harmonia de todos os elementos. **Nenhum elemento único assume controle** desproporcional. O conjunto se lê como uma peça só, não como partes coladas.

---

## Camada 3 — Princípios de Conteúdo (Binac)

Específicos pra peças onde **texto + visual coexistem** (posts, landings, slides, hero sections):

### Espaço branco
Conteúdo precisa de respiro. Sobrecarga visual mata leitura. Regra prática: se a tela parece cheia, tirar 30% antes de adicionar qualquer coisa.

### Contraste
Legibilidade nasce do contraste — texto/fundo, foreground/background, peso/leveza. WCAG AA mínimo (4.5:1 para texto normal).

### Proporção
Diferentes proporções entre elementos. Não tudo do mesmo tamanho. Hero gigante, subtítulo médio, corpo menor.

### Hierarquia
Tamanhos diferentes definem a **sequência de leitura**. O leitor não decide a ordem — o designer decide.

### Ênfase
Destacar a coisa mais importante via cor OU tamanho (raramente ambos no mesmo elemento — vira agressivo).

### Equilíbrio
Elementos com mesmo "peso" precisam ter larguras/alturas semelhantes. Cards numa grid: mesma altura forçada.

### Alinhamento
Alinhar sempre os elementos e textos — esquerda ou direita ao conteúdo. Evitar centralizar parágrafos longos.

### Harmonia
Se usa elementos com aspecto arredondado, **todos devem seguir o mesmo radius**. Misturar 4px e 16px sem razão = quebra.

### Margens
Use as margens pra definir os limites de alocação do conteúdo. Margem consistente = projeto organizado.

### Direcionamento
A leitura deve ser direcionada pela disposição: **Z** (landing pages, grids amplas), **L** (sidebars), **reto** (texto longo, listas). Saber qual padrão escolher define legibilidade.

### Variedade
Com sabedoria, fazer variações de formato. **Variar pra criar interesse, repetir pra criar ritmo.** Excesso de variedade vira caos.

### Ritmo
O conteúdo não pode ter o mesmo ritmo do início ao fim. Precisa ser uma **escala** — alterna densidade, tamanho, espaçamento. Ritmo plano = leitor desiste no meio.

---

## Checklist Operacional

Antes de aprovar qualquer peça visual neste projeto, validar:

- [ ] **Hierarquia clara**: dá pra dizer em 1 segundo o que é o ponto focal?
- [ ] **Espaço branco**: tem respiro? Se tirasse 30% do conteúdo, ficaria melhor?
- [ ] **Contraste**: o texto principal passa WCAG AA (4.5:1)? CTAs se destacam do fundo?
- [ ] **Alinhamento**: existe um eixo claro (esquerda, centro, direita)? Tudo respeita?
- [ ] **Escala tipográfica**: usa razão consistente (1.125, 1.25, 1.333) — não tamanhos arbitrários?
- [ ] **Escala de espaçamento**: usa múltiplos de 4 ou 8 (4, 8, 16, 24, 32, 48, 64)?
- [ ] **Harmonia de radius**: todos os cantos arredondados seguem o mesmo raio?
- [ ] **Direcionamento**: o olho sabe pra onde ir em seguida? (Z, L, reto)
- [ ] **Unidade**: a peça lê como **uma coisa só** ou parece partes coladas?
- [ ] **Ritmo**: a tela tem variação de densidade entre seções?

---

## Crédito das fontes

- Princípios de Design de Conteúdo: **Binac** (design gráfico)
- Elementos do Design: referência consolidada
- Princípios do Design: **Vanessa Aranda**
  - "Principles of Design." PBS LearningMedia, KET, 22 Dec. 2020
  - Kunstler, Julianna. "Elements of Art." Art 1
