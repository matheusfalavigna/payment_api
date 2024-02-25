import { Router, Request, Response } from "express";
import { CreatePaymentController } from "./controllers/CreatePayment.controller";
import { ListPaymentsController } from "./controllers/ListPayments.controller";
import { ListPaymentByIdController } from "./controllers/ListPaymentById.controller";

const routes = Router();

routes.post("/create-payment", async (req: Request, res: Response) => {
  return new CreatePaymentController().handle(req, res);
});

routes.get("/payments", async (req: Request, res: Response) => {
  return new ListPaymentsController().handle(req, res);
});

routes.get("/:id", async (req: Request, res: Response) => {
  return new ListPaymentByIdController().handle(req, res);
});

export { routes };
