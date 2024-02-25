import { Request, Response } from "express";
import { ListPaymentByIdService } from "../services/ListPaymentById.service";

class ListPaymentByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listPaymentByIdService = new ListPaymentByIdService();

    const payment = await listPaymentByIdService.execute(id);

    return response.json(payment);
  }
}

export { ListPaymentByIdController };
