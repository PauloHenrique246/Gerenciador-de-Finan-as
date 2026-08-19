# Inicia o projeto 
npm init -y

# Instala as dependências de produção
npm install express cors dotenv @prisma/client

# Instala as dependências de desenvolvimento
npm install -D typescript @types/node @types/express @types/cors tsx prisma

# Inicializa o arquivo de configuração do TypeScript
npx tsc --init
