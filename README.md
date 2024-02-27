<h1 align="center">
  payment_api
</h1>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- Express
- TypeScript
- Swagger
- Jest
- Prisma
- MongoDB

## 🔖 Configurações

Clone o repositório:
```
https://github.com/matheusfalavigna/payment_api.git
```
Instale as dependências:
```
npm install
```
Gerar o banco de acordo com Prisma Client:
```
npx prisma generate
```
Rodar o Prisma Studio para acompanhar os dados:
```
npx prisma studio
```
Configuração (é necessário criar uma conta no MongoDB para usar o DATABASE_URL para se conectar):
```
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente
DATABASE_URL: URL de conexão ao banco de dados.
```
Rodando a API (A API estará rodando na porta 3000 por padrão):
```
npm run dev
```
Endpoints da API:
```
/create-payment	POST	Cria um novo pagamento.
/payments	GET	Lista todos os pagamentos.
/:id	GET	Recupera um pagamento específico pelo ID.
```
Testes unitários:
```
Comumente rodo com a extensão Jest Runner, por ser mais rápido e intuitivo
```

## 💻 Projeto

Este projeto é a API para o sistema de pagamentos. Ela fornece endpoints para criar, listar e recuperar pagamentos individuais.



