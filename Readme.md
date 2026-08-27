# GERENCIADOR DE FINANÇAS

Este site deve auxiliar a coordenadora financeira da escola de cursos profissionalizantes Concretta a apresentar o desempenho da empresa em uma dashboard. Esse projeto tem o intuito de retirar o uso de simples planilhas para um software que substitui o trabalho massivo por cards, modais e botões intuitivos e práticos.

# Estruturação do projeto
Gerenciador-de-Finan-as/
├── ⚙️ backend/                  # Projeto exclusivo do servidor (Node.js + API)
│   ├── 🤖 generated/            # Arquivos gerados automaticamente (ex: Prisma Client)
│   ├── 🗄️ prisma/
│   │   └── 📄 schema.prisma     # Modelagem do banco de dados
│   ├── 📦 src/
│   │   ├── 🛠️ config/           # Configurações globais e de serviços externos
│   │   ├── 🕹️ controllers/      # Lógica de controle das rotas
│   │   ├── 📐 interfaces/       # Contratos de tipos e interfaces TypeScript
│   │   ├── 🛡️ middlewares/      # Interceptadores de requisições (auth, validação, etc.)
│   │   ├── 🛣️ routes/           # Definição dos endpoints HTTP
│   │   └── 🚀 server.ts         # Arquivo principal que sobe o servidor
│   ├── 🔒 .env                  # Variáveis de ambiente (URL do MySQL)
│   ├── 📋 package.json
│   └── ⚙️ tsconfig.json
│
└── 🎨 frontend/                 # Projeto exclusivo da interface (Next.js)
    ├── 📦 src/
    │   └── 📱 app/              # Estrutura principal do App Router
    │       ├── 🧩 components/   # Componentes visuais isolados
    │       ├── 📐 interfaces/   # Definições de tipos e interfaces TypeScript
    │       ├── 📚 lib/          # Configurações de bibliotecas utilitárias
    │       ├── 🌐 services/     # Integração e chamadas para a API
    │       ├── 🎨 globals.css   # Configuração do Tailwind
    │       ├── 📄 layout.tsx
    │       └── 📄 page.tsx
    ├── 🎨 tailwind.config.ts
    ├── 📋 package.json
    └── ⚙️ tsconfig.json