import express from "express";
import swaggerUi from "swagger-ui-express";

import { routes } from "./src/routes";
import swaggerSpec from "./swagger/swagger";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", routes);

const start = async () => {
  try {
    await app.listen({ port });
    console.log(`Servidor iniciado na porta ${port}`);
  } catch (err) {
    console.error("Erro:", err);
    process.exit(1);
  }
};

start();
