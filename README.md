# FlashClip 2026

![FlashClip Logo](./arc/assets/LogoFlaschClipMelhorada.png)

Projeto oficial do FlashClip 2026: um site universitário de programação com tema esportivo e futurista, focado em minicursos, instrutores, programação do evento e inscrições online.

---

## 🌟 Sobre o projeto

O FlashClip 2026 é uma aplicação web construída para divulgar o evento e gerenciar inscrições de minicursos reais. Ele oferece um site multi-página com:

- apresentação do evento e cronograma
- lista de minicursos e instrutores
- seção de patrocinadores
- formulário de inscrição integrado ao Supabase
- páginas de contato, FAQ e sobre

O design atual combina dark mode, glassmorphism e efeitos neon para reforçar a identidade visual de Copa 2026.

---

## 🚀 Tecnologias utilizadas

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Supabase**
- **React Router Dom**
- **React Hook Form**
- **TanStack Query**
- **Radix UI primitives**
- **Lucide React**
- **Sonner**
- **Zod**
- **Recharts**
- **date-fns**
- **next-themes**

---

## ✨ Funcionalidades

- SPA multi-página com navegação React Router
- Página de inscrição com validação e feedback visual
- Integração com Supabase para armazenamento de inscrições
- Sistema de inscrições real usando tabela `inscricoes`
- Layout responsivo para mobile e desktop
- Design dark esportivo com glassmorphism e glow neon
- Pages para cursos, programação, instrutores, patrocinadores, contato, sobre e FAQ
- Components UI reutilizáveis com Tailwind e Radix
- Build de produção otimizada via Vite

---

## 🎓 Minicursos disponíveis

Minicursos atualmente cadastrados no projeto:

- Go
- C
- Kotlin
- Haskell
- Julia
- Dart
- Lua
- Rust
- Swift
- TypeScript

---

## 📌 Sistema de inscrições

O formulário de inscrição está implementado em `src/pages/Inscricao.tsx` e armazena cadastros em Supabase.

- Cliente Supabase em `src/lib/supabase.ts`
- Tabela usada: `inscricoes`
- Campos enviados: `nome`, `email`, `telefone`, `instituicao`, `curso_escolhido`
- `id` e `created_at` são gerados automaticamente pelo banco

---

## 🤝 Patrocinador atual

- **Sublime - Comunicação Inteligente**

Patrocinador bronze configurado em `src/data/sponsors.ts`.

---

## 🎨 Identidade visual atual

A identidade visual de FlashClip 2026 é definida por:

- fundo escuro com detalhes de glow neon
- paleta principal `Tech Sport Blue` e `World Cup Gold`
- efeitos de vidro e partículas estelares
- grid sutil no background
- tipografia moderna com foco em leitura e contraste

As cores e tokens estão definidos em `src/index.css`.

---

## 📁 Estrutura do projeto

- `public/` — ativos públicos, incluindo `flashclip-logo.png`
- `src/assets/` — imagens e logos de linguagens
- `src/components/` — componentes compartilhados
- `src/components/ui/` — biblioteca de componentes UI reutilizáveis
- `src/pages/` — páginas da aplicação
- `src/data/` — dados de cursos, instrutores e patrocinadores
- `src/lib/` — integrações e clientes (Supabase)
- `src/index.css` — design system global
- `src/App.tsx` — rotas e layout principal
- `src/main.tsx` — ponto de entrada React

---

## 🧾 Páginas existentes

- `/` — Home
- `/cursos` — Cursos
- `/programacao` — Programação
- `/instrutores` — Instrutores
- `/patrocinadores` — Patrocinadores
- `/contato` — Contato
- `/inscricao` — Inscrição
- `/sobre` — Sobre
- `/faq` — FAQ
- `*` — NotFound

---

## ⚙️ Como executar localmente

```bash
npm install
npm run dev
```

### Outros comandos úteis

```bash
npm run build
npm run preview
npm run lint
```

---

## 🔐 Variáveis de ambiente

O projeto utiliza:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Defina essas variáveis no arquivo `.env` na raiz. Não inclua valores reais no repositório.

---

## ☁️ Deploy

Publicação recomendada com Vercel:

- Configure o repositório no Vercel
- Defina as variáveis de ambiente necessárias
- Configure a build como `npm run build`
- O diretório de saída padrão é `dist/`

---

## 👥 Equipe

Jorge Leon Rodrigues Martins

---

## 📄 Licença

O projeto não declara uma licença em `package.json`.

Considere adicionar um arquivo `LICENSE` ou o campo `license` no `package.json` para registrar a licença do projeto.


