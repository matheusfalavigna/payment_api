import prismaClient from "../prisma/client";

class ListPaymentsService {
  async execute() {
    const payments = await prismaClient.payment.findMany();

    return payments;
  }
}

export { ListPaymentsService };
