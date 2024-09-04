# Etapa 1: Construção
FROM node:18-alpine AS builder

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o arquivo de dependências e instala as dependências
COPY package.json ./
RUN npm install

# Copia todo o código do projeto para o diretório de trabalho
COPY . .

# Construção da aplicação Next.js
# RUN npm build

# Etapa 2: Servir a aplicação
FROM node:18-alpine AS runner

# Define a variável de ambiente para o modo de produção
ENV NODE_ENV=development

# Define o diretório de trabalho no container
WORKDIR /app

# Copia as dependências necessárias e os arquivos construídos na etapa anterior
COPY --from=builder /app .

# Exponha a porta que o Next.js usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
