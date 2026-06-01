---
name: stamp-vibe-branding
description: Workflow completo pra criar uma marca premium de produto físico (bebida, lata, packaging, food/beverage, wellness, lifestyle) em ~10 minutos usando AI — paleta de 5 fontes "designer favorites", conceito visual ancorado em poster stamps (estilo selo vintage-modern), prompt template Midjourney V8.1 com style reference seed, hack do Gemini pra gerar variações sem reescrever, cleanup tipográfico no Photoshop, e mockup 3D automático via Nanobanana Pro. SEMPRE use quando Adan disser "branding rápido", "marca de produto em X minutos", "mockup de embalagem", "estilo selo", "stamp vibe", "vintage-modern", "rebrand rápido", "testar conceito visual de marca", "criar identidade pra esse produto" ou "explorar visual pra cliente". Também acionar pra moodboards de packaging, pitch visual de cliente novo da Vento Propaganda (food/beverage/wellness/lifestyle), exploração pra Galeria Vento, ou quando o briefing usar "premium", "boutique", "cara de marca cara", "aesthetic vintage", "label design". Pula Figma/DS — isso aqui é fase de CONCEITO visual rápido pra vender ideia, não produção final.
---

# Stamp Vibe Branding

Branding premium de produto em ~10 min via AI. Crédito do método: @ohneis652 (Instagram). Skill adaptada pro contexto Vento Propaganda / Galeria Vento.

## Quando usar

**Triggers diretos:**
- "Preciso de uma marca pra X em 10 min"
- "Conceito visual pra cliente novo (bebida, snack, wellness, beauty, food)"
- "Mockup rápido pra pitch"
- "Estilo selo / postage stamp / vintage modern"
- Briefing menciona "premium", "boutique", "cara de marca cara", "aesthetic"

**Use TAMBÉM quando:**
- Cliente novo entra e precisa de visual de proposta rápido (não DS completo ainda)
- Galeria Vento explorando linha de produto físico
- Teste de hipótese visual antes de fechar identidade
- Apresentação pra cliente decidir entre 3-5 direções estéticas

**NÃO use quando:**
- Cliente já tem identidade definida e precisa de produção (vai pra `design-system-bootstrap` ou Figma)
- Trabalho de campanha política (vai pra brand-strategy + outras)
- O produto é digital/SaaS (estilo errado — stamp vibe é pra físico)
- Pediu logo "moderno minimalista corporativo" (estilo conflita)

---

## O Workflow (6 passos)

### Passo 1 — Fix the Font Palette

Tipografia carrega 60% do "looks expensive". As 5 referência:

| Fonte | Função | Vibe |
|---|---|---|
| **Microgramma** | Display / labels técnicos | Geométrica, anos 60-70, sci-fi premium |
| **Helvetica Neue** | Body / secundário | Neutra, sempre funciona |
| **ITC Serif Gothic** | Headline alternativa | Híbrida, transicional |
| **Benguiat Pro ITC** | Vintage serif principal | Editorial 70s, "print texture" |
| **Frigate 3D** | Display chunky | Statement, retro futurismo |

Salva essa paleta como default pro projeto. Em produção, vão entrar no Passo 5.

### Passo 2 — Ancorar no "Stamp Vibe"

**Insight central:** em vez de logo, use **poster stamps** (selos postais ilustrados) como elemento visual principal da marca. Quando escala pro produto, o resultado é instant vintage-modern premium.

Por quê funciona:
- Selo carrega narrativa visual densa em formato pequeno
- Limita paleta (selos antigos = 2-4 cores)
- Forçar moldura cria coerência sem precisar de sistema
- Familiaridade visual (selo = curadoria, autoridade) sem ser bege/corporativo

### Passo 3 — Midjourney V8.1 (prompt base)

Cole no Midjourney V8.1. Texto agora renderiza decente. Não precisa estar 100% — captura vibe e layout primeiro.

**Template (substitua o que está entre {}):**

```
1950s {japanese|brazilian|french|nordic} postage stamp illustration,
{product category} label design,
flat graphic minimal {SUBJECT} centered,
{symmetrical|asymmetric} composition,
{cor 1} {gradient/flat} background,
all text white reversed:
"{volume/medida}" top left,
"{idioma local}" top right,
"{descritor pequeno}" small italic across {subject},
"{NOME DO PRODUTO}" large bold expanded sans-serif full width bottom,
limited palette {cor 1}, {cor 2}, {cor 3 acento},
halftone dots, screenprint shading, risograph grain,
classic philatelic mid-century travel poster composition
--chaos 10 --ar 3:4 --raw --sref 2880969827 --stylize 0
```

**Os parâmetros que TRAVAM o look:**
- `--sref 2880969827` → style reference seed do método original (mantém visual consistente entre gerações)
- `--ar 3:4` → proporção de selo
- `--chaos 10` → variação alta entre 4 outputs do mesmo prompt
- `--raw` → menos "filtro Midjourney"
- `--stylize 0` → segue o prompt ao invés de "embelezar"

Ver `references/prompts.md` pra biblioteca de prompts prontos por categoria.

### Passo 4 — Hack do Gemini pra Variações

Não reescreva prompt à mão pra cada variação. Cola o prompt no Gemini e fala:

> "Please adapt my prompt. Keep these exact style tags and vibe, but change the subject to {NOVO SUJEITO} on a {NOVA COR} background."

Em PT-BR (se preferir):
> "Adapta esse prompt. Mantém EXATAMENTE as style tags e parâmetros, só troca o sujeito pra {X} e o fundo pra {Y}."

Resultado: 10-20 variações em minutos, todas no mesmo style ref.

### Passo 5 — Cleanup no Photoshop

A AI quase nunca acerta a tipografia. Pega a melhor imagem do MJ, abre no Photoshop:

1. Limpa glitches (eyedropper + clone + content-aware fill)
2. Cobre o texto bagunçado com retângulo cor-do-fundo
3. Re-tipografa com **uma das 5 fontes do Passo 1** (não use Arial/Times default)
4. Mantém hierarquia: volume/medida pequeno, nome grande, descritores em italic

Esse é o passo que separa "AI bonitinho" de "premium real". A AI te dá o atmosférico; você dá o controle.

### Passo 6 — Make it Real (Nanobanana Pro)

Mockup em produto físico sem 3D skills. Abre **Gemini** → seleciona **Nanobanana Pro** (free).

**Input:**
- Imagem 1: foto stock de uma lata/garrafa/embalagem PRATA SEM LABEL
- Imagem 2: seu design final (do Passo 5)

**Prompt:**
```
Lifestyle product shot, hand {skin tone} reaching into {context: open refrigerator shelf | wooden table | concrete background} gripping standard {size: 12oz aluminum can | 250ml glass bottle | etc}, fingers curled around upper body, short natural nails no polish, polished surface covered in dense cold condensation droplets scattered across entire exterior, {iluminação: cool interior refrigerator lighting overhead casting flat even illumination | golden hour side light | overcast soft top light}, shot from eye-level front-facing angle tight medium crop, hyperrealistic product photography
```

Apply seu design como label. O Nanobanana wrappa em 3D automaticamente.

Ver `references/prompts.md` seção "Mockups" pra mais contextos (geladeira, prateleira, mão segurando, group shot).

---

## Output esperado

Ao final do workflow você tem:
1. ✅ 3-10 stamps únicos no estilo lockado (sref consistente)
2. ✅ 2-5 mockups em produto físico (lata, garrafa)
3. ✅ 1 carrossel/post-ready set: pack shot + stamp isolado + lifestyle
4. ✅ Sistema de fontes definido pra próxima fase de DS

**Tempo real:** 10-20 min se prompts estão prontos. 40-60 min se está explorando do zero.

---

## Adaptações pro contexto Adan / Vento Propaganda

**Para Galeria Vento:**
- Substitui "japanese postage stamp" por "Brazilian modernist postage stamp" / "tropicalist 1960s stamp"
- Cores: vez do indigo japonês, paleta tropical contrastada (verde Bahia, azul mar, ocre)
- Sujeitos: fauna/flora ATLÂNTICA (não cherry blossom)

**Para clientes Vento (Muda, food/wellness BR):**
- "Stamp vibe" + estética nordestina/sul-brasileira
- Tipografia: troca Microgramma por Druk ou Founders Grotesk Bold pra modernizar
- Mantém risograph grain — funciona com qualquer paleta

**Stack que você já tem (use):**
- **Higgsfield** (você tem MCP) → alternativa ao Midjourney pra image gen (use `nano_banana_pro` ou `seedream_v4_5`)
- **Figma MCP** → próximo passo: exportar pra DS depois de fechar conceito
- **n8n (VPS)** → automatizar geração de variações em lote (Gemini API + Higgsfield API)
- **Galeria Vento Racing Division** → wrap design 3D já é territorio conhecido

**Pattern de automação possível (futuro):**
n8n workflow: cliente preenche form (nome, categoria, paleta, sujeito) → trigger Higgsfield com template → gera 10 stamps → manda PDF mockup pro WhatsApp do cliente (Evolution API → 5548991092850 default).

---

## Anti-patterns a evitar

❌ Usar fontes default (Arial, Times) no Passo 5 — mata o premium
❌ Pular o `--sref` — perde consistência entre variações
❌ Tentar fazer logo "limpo minimalista" — stamp vibe REQUER densidade visual
❌ Pular o Photoshop — AI text é sempre o tell de "AI cheap"
❌ Aplicar em SaaS/tech — choque estético, fica costume nostalgia inadequado
❌ Mostrar pro cliente os 4 outputs brutos do MJ — sempre escolha 1, finaliza, e apresenta como peça única

---

## Referências adicionais

- `references/prompts.md` — biblioteca de prompts por categoria (bebida, food, wellness, beauty, candle, snack)
- Crédito do método: @ohneis652 no Instagram
- Curso pago do autor (caso queira aprofundar): comentar "AI Course" no post original
