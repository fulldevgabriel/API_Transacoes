<h1 align="center">
  API de Transações e Estatísticas em Tempo Real
</h1>

Essa é uma API feita com Node.js para lidar com transações financeiras simples e mostrar estatísticas em tempo real com base nas transações recebidas nos últimos 60 segundos. Tudo acontece em memória, sem banco de dados, e seguindo o padrão REST para facilitar o uso.

## 🚀 O que você precisa para rodar

- Node.js (versão 18 ou mais recente)
- npm ou yarn (para instalar as dependências)

## ▶️ Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor:**

```bash
npm run dev
# ou
yarn dev
```

A API estará rodando em `http://localhost:3000`.

## 🔌 Endpoints disponíveis

### 1. Adicionar uma nova transação

**POST** `/transacao`

```json
{
  "valor": 123.45
}
```

> ⚠️ **Importante:** você só precisa enviar o valor da transação. A data e hora são registradas automaticamente pelo backend no momento em que a transação é recebida.

- Respostas:
  - `201 Created`: transação registrada com sucesso
  - `422 Unprocessable Entity`: transação inválida (ex: valor negativo)
  - `400 Bad Request`: JSON enviado está com erro de formato

---

### 2. Apagar todas as transações

**DELETE** `/transacao`

- Resposta:
  - `200 OK`: todas as transações foram removidas

---

### 3. Ver estatísticas das últimas transações

**GET** `/estatistica`

- Resposta (com base nas transações dos últimos 60 segundos):

```json
{
  "count": 10,
  "sum": 1234.56,
  "avg": 123.456,
  "min": 12.34,
  "max": 123.56
}
```

- Se não houver nenhuma transação no período, todos os valores serão `0`.

---

## 🧪 Rodando os testes

Se o projeto tiver testes configurados, use o comando:

```bash
npm test
# ou
yarn test
```

---

## ℹ️ Informações extras

- Todos os dados são armazenados apenas em memória.
- Nada é salvo em banco de dados.
- As requisições e respostas usam apenas o formato JSON.

---

Desenvolvido por [Gabriel Ribeiro de Carvalho](https://github.com/fulldevgabriel) 💻
