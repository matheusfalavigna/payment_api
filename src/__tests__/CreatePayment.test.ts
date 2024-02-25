import { CreatePaymentService } from "../services/CreatePayment.service";
import prismaClient from "../prisma/client";

jest.mock("../prisma/client", () => ({
  payment: {
    create: jest.fn(),
  },
}));

describe("CreatePaymentService", () => {
  let createPaymentService: CreatePaymentService;

  beforeEach(() => {
    createPaymentService = new CreatePaymentService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a payment successfully", async () => {
    const paymentData = {
      name: "João Silva",
      card_number: "1234567890123456",
      amount: "1000.00",
      expiration_date: "12/2024",
      cvv: "123",
    };

    (prismaClient.payment.create as jest.Mock).mockResolvedValue({
      id: "65d921708af1d514e0f0fa29",
      ...paymentData,
    });

    const createdPayment = await createPaymentService.execute(paymentData);

    expect(createdPayment).toEqual({
      id: "65d921708af1d514e0f0fa29",
      ...paymentData,
    });
    expect(prismaClient.payment.create).toHaveBeenCalledWith({
      data: paymentData,
    });
  });

  it("should throw an error if card number is invalid", async () => {
    const paymentData = {
      name: "João Silva",
      card_number: "123456789012345",
      amount: "1000.00",
      expiration_date: "12/2024",
      cvv: "123",
    };

    await expect(createPaymentService.execute(paymentData)).rejects.toThrow(
      "Número do cartão inválido"
    );

    expect(prismaClient.payment.create).not.toHaveBeenCalled();
  });

  it("should throw an error if cvv is invalid", async () => {
    const paymentData = {
      name: "João Silva",
      card_number: "1234567890123456",
      amount: "1000.00",
      expiration_date: "12/2024",
      cvv: "12",
    };

    await expect(createPaymentService.execute(paymentData)).rejects.toThrow(
      "CVV inválido"
    );

    expect(prismaClient.payment.create).not.toHaveBeenCalled();
  });

  it("should call Prisma Client payment.create with correct parameters", async () => {
    const paymentData = {
      name: "João Silva",
      card_number: "1234567890123456",
      amount: "1000.00",
      expiration_date: "12/2024",
      cvv: "123",
    };

    await createPaymentService.execute(paymentData);

    expect(prismaClient.payment.create).toHaveBeenCalledWith({
      data: paymentData,
    });
  });
});
