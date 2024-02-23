import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "API de Pagamentos",
      version: "1.0.0",
      description: "Documentação para as APIs de pagamentos",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      schemas: {},
    },
  },
  apis: ["./src/routes.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
