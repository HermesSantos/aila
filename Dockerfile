# Usa a versão mais recente do Node
FROM node:latest

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

RUN npm i axios
RUN npm i dotenv

# Copia os arquivos da aplicação
COPY . .

# Expõe a porta que a aplicação usará
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["node", "index.js"]
