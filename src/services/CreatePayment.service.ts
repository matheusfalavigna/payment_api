import prismaClient from "../prisma/client";

interface CreatePaymentServiceProps {
  name: string;
  card_number: string;
  amount: string;
  expiration_date: string;
  cvv: string;
}

class CreatePaymentService {
  async execute({
    name,
    card_number,
    amount,
    expiration_date,
    cvv,
  }: CreatePaymentServiceProps) {
    if (!name || !card_number || !amount || !expiration_date || !cvv) {
      throw new Error("Preencha todos os campos");
    }

    const cardNumberRegex = /^[0-9]{16}$/;
    if (!cardNumberRegex.test(card_number)) {
      throw new Error("Número do cartão inválido");
    }

    const cvvRegex = /^[0-9]{3}$/;
    if (!cvvRegex.test(cvv)) {
      throw new Error("CVV inválido");
    }

    return await prismaClient.payment.create({
      data: {
        name,
        card_number,
        amount,
        expiration_date,
        cvv,
      },
    });
  }
}

export { CreatePaymentService };
