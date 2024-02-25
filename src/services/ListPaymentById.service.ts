import prismaClient from "../prisma/client";

class ListPaymentByIdService {
  async execute(id: string) {
    const payment = await prismaClient.payment.findUnique({
      where: {
        id,
      },
    });

    return payment;
  }
}

export { ListPaymentByIdService };
