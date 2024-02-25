import { Request, Response } from "express";
import { ListPaymentsService } from "../services/ListPayments.service";

class ListPaymentsController {
  async handle(req: Request, res: Response) {
    const listPayments = new ListPaymentsService();

    const payments = await listPayments.execute();

    return res.json(payments);
  }
}

export { ListPaymentsController };
