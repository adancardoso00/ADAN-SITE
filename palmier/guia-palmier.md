# Guia Palmier — Editar vídeo com o Claude

> Material desta conversa sobre o Palmier. Tudo aqui roda no **teu Mac**, não na nuvem.

## 1. Instalar o Palmier Pro
- Baixe em **palmier.io** (macOS, grátis, open-source GPLv3 — sem login pra editar).
- Abra o app. Com ele aberto, ele sobe sozinho um **MCP server local** em `http://127.0.0.1:19789/mcp`.
- Importe o vídeo e abra/crie um projeto na timeline.

## 2. Conectar o Claude ao Palmier

**Claude Code (CLI) — mais direto:**
```bash
claude mcp add --transport http palmier http://127.0.0.1:19789/mcp
```
Depois, dentro do projeto, use `/mcp` pra confirmar que as ferramentas do Palmier conectaram.

**Cursor:** Settings → MCP → Add server → tipo HTTP → URL `http://127.0.0.1:19789/mcp`.

**Claude Desktop:** Settings → Connectors/MCP → servidor HTTP com a mesma URL.
Se a tua versão só aceitar stdio, use a ponte: `npx mcp-remote http://127.0.0.1:19789/mcp`.

> Importante: o app Palmier **tem que estar aberto** pro server responder.
> Edição e o MCP são grátis; gerar footage por IA dentro do Palmier exige login/assinatura.

## 3. Kit de prompts de edição (cole um por vez no Palmier)

```
1. "Analisa a timeline e me lista os trechos com silêncio,
    gaguejo ou pausa maior que 1 segundo."

2. "Remove esses trechos mortos e junta tudo num corte contínuo."

3. "Corta os primeiros 2 segundos parados e começa direto na
    primeira frase forte (o gancho)."

4. "Deixa o ritmo dinâmico: cortes secos a cada troca de ideia,
    sem transições longas."

5. "Normaliza o volume do áudio e tira ruído de fundo se tiver."

6. "Ajusta pro formato vertical 9:16, mantendo meu rosto centralizado."

7. "Adiciona um corte final de 3 segundos pro CTA (chamada pra ação)."
```

## 4. Sobre a pasta "Paradoxo_Enforcado"
Os docs dessa pasta estão no teu Desktop e **não chegam até o ambiente na nuvem**.
Pra eu trabalhar em cima deles, escolha um:
- **Subir pro GitHub:** copie a pasta pra dentro do projeto e dê push (ou use "Add file → Upload files" no GitHub).
- **Colar o conteúdo** direto na conversa (pra textos, é o mais rápido).
