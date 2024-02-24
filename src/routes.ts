import { Router, Request, Response } from "express";
import { CreatePaymentController } from "./controllers/CreatePayment.controller";

const routes = Router();

routes.post("/create-payment", async (req: Request, res: Response) => {
  return new CreatePaymentController().handle(req, res);
});

export { routes };
