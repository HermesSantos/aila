# Aila - Gerador Inteligente de Mensagens de Commit

A Aila é um programa que gera automaticamente mensagens de commit para seus repositórios Git. Ele facilita a criação de commits bem descritos e organizados, agilizando seu fluxo de trabalho.

## 🚀 Instalação

Para instalar o Aila globalmente na sua máquina, siga os passos abaixo:

1. Clone este repositório ou baixe os arquivos do projeto:
   ```sh
   git clone https://github.com/seuusuario/aila.git
   cd aila
   ```

2. Instale as dependências do projeto:
   ```sh
   npm install
   ```

3. Registre o comando `aila` globalmente:
   ```sh
   npm link
   ```

Agora, você pode rodar `aila` em qualquer lugar do terminal! 🎉

## ✅ Verificando Dependências

Caso tenha problemas na instalação, verifique se todas as dependências necessárias estão instaladas corretamente:

- **Node.js** (versão 16 ou superior):
  ```sh
  node -v
  ```
- **NPM**:
  ```sh
  npm -v
  ```
- **Git**:
  ```sh
  git --version
  ```

Se alguma dessas dependências estiver faltando, instale-a antes de prosseguir.

## 💻 Como Usar

Após instalar, basta navegar até um repositório Git e rodar:

```sh
aila
```

O programa gerará automaticamente uma mensagem de commit e aplicará o commit no seu repositório.

## 🔄 Atualização

Para atualizar o Aila, basta entrar no diretório do projeto e rodar:

```sh
git pull origin main
npm install
npm link
```

## 🛠️ Desinstalação

Caso queira remover o comando `aila` da sua máquina, execute:

```sh
npm unlink -g aila
```

Isso removerá o link global do programa.

---

Feito com ❤️ para facilitar seus commits! 🚀

