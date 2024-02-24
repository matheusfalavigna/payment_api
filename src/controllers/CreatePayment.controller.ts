import { Request, Response } from "express";
import { CreatePaymentService } from "../services/CreatePayment.service";

class CreatePaymentController {
  async handle(req: Request, res: Response) {
    const { name, card_number, amount, expiration_date, cvv } = req.body as {
      name: string;
      card_number: string;
      amount: string;
      expiration_date: string;
      cvv: string;
    };

    const createPayment = new CreatePaymentService();

    const result = await createPayment.execute({
      name,
      card_number,
      amount,
      expiration_date,
      cvv,
    });

    return res.json(result);
  }
}

export { CreatePaymentController };
