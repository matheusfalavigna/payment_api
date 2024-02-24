import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Pagamentos API",
      version: "1.0.0",
      description: "API para criação de pagamentos.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    paths: {
      "/create-payment": {
        post: {
          summary: "Cria um novo pagamento",
          description: "Cria um novo pagamento com os dados fornecidos",
          parameters: [
            {
              in: "body",
              name: "body",
              required: true,
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Nome do pagador",
                    example: "João Silva",
                  },
                  card_number: {
                    type: "string",
                    description: "Número do cartão",
                    example: "1234567890123456",
                  },
                  amount: {
                    type: "string",
                    description: "Valor do pagamento",
                    example: "1000.00",
                  },
                  expiration_date: {
                    type: "string",
                    description: "Data de expiração do cartão",
                    example: "12/2024",
                  },
                  cvv: {
                    type: "string",
                    description: "Código de segurança do cartão",
                    example: "123",
                  },
                },
              },
            },
          ],
          responses: {
            "200": {
              description: "Pagamento criado com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        description: "Identificador do pagamento criado",
                        example: "62e4321234567890ab123456",
                      },
                      name: {
                        type: "string",
                        description: "Nome do pagador",
                        example: "João Silva",
                      },
                      card_number: {
                        type: "string",
                        description: "Número do cartão",
                        example: "1234567890123456",
                      },
                      amount: {
                        type: "string",
                        description: "Valor do pagamento",
                        example: "1000.00",
                      },
                      expiration_date: {
                        type: "string",
                        description: "Data de expiração do cartão",
                        example: "12/2024",
                      },
                      cvv: {
                        type: "string",
                        description: "Código de segurança do cartão",
                        example: "123",
                      },
                    },
                  },
                },
              },
            },
            "400": {
              description:
                "Erro ao criar pagamento devido a campos inválidos ou ausentes",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        description: "Mensagem de erro",
                        example: "Preencha todos os campos",
                      },
                    },
                  },
                },
              },
            },
            "500": {
              description: "Erro interno do servidor",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        description: "Mensagem de erro",
                        example: "Internal server error",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
