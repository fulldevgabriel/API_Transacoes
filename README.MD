Esta aplicação consiste em uma interface de programação (API) desenvolvida com a plataforma Node.js, cuja finalidade é receber transações financeiras e computar estatísticas derivadas com base nas operações registradas nos últimos 60 segundos. A arquitetura da solução privilegia a eficiência computacional em memória e a aderência aos princípios REST.

##  Pré-requisitos Ambientais

- Ambiente de execução Node.js (versão 18 ou superior)
- Gerenciador de pacotes: npm ou yarn

##  Procedimentos para Inicialização

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. **Realize a instalação das dependências:**

```bash
npm install
# ou
yarn install
```

3. **Inicialize o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível para consumo local em `http://localhost:3000`.

##  Interface de Endpoints

### 1. Registro de Transações

**POST** `/transacao`

```json
{
  "valor": 123.45,
  "dataHora": "2020-08-07T12:34:56.789-03:00"
}
```

- Respostas possíveis:
  - `201 Created`: transação validada e registrada com sucesso
  - `422 Unprocessable Entity`: transação rejeitada devido à violação de critérios de entrada (valor negativo, data futura, etc.)
  - `400 Bad Request`: estrutura do payload JSON inválida

---

### 2. Eliminação de Transações

**DELETE** `/transacao`

- Resposta:
  - `200 OK`: todas as transações armazenadas foram removidas

---

### 3. Consulta de Estatísticas Agregadas

**GET** `/estatistica`

- Resposta esperada (com base em transações registradas nos últimos 60 segundos):

```json
{
  "count": 10,
  "sum": 1234.56,
  "avg": 123.456,
  "min": 12.34,
  "max": 123.56
}
```

- Observação: na ausência de transações válidas no intervalo temporal considerado, todos os campos numéricos retornarão o valor `0`.

---

##  Execução de Testes Automatizados

Caso haja cobertura de testes implementada:

```bash
npm test
# ou
yarn test
```

---

##  Considerações Técnicas

- Não é utilizada qualquer forma de persistência externa (e.g., bancos de dados relacionais ou não relacionais).
- O sistema opera exclusivamente com estruturas de dados em memória volátil.
- A comunicação entre cliente e servidor é restrita ao formato JSON.
