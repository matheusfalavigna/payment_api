import { ListPaymentByIdService } from "../services/ListPaymentById.service";
import prismaClient from "../prisma/client";

describe("ListPaymentByIdService", () => {
  let listPaymentByIdService: ListPaymentByIdService;

  beforeAll(() => {
    listPaymentByIdService = new ListPaymentByIdService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  it("should return the payment with the given id", async () => {
    const mockPayment = {
      id: "65d921708af1d514e0f0fa29",
      name: "John Doe",
      card_number: "1234567890",
      amount: "100",
      expiration_date: "12/23",
      cvv: "123",
    };

    jest
      .spyOn(prismaClient.payment, "findUnique")
      .mockResolvedValue(mockPayment);

    const payment = await listPaymentByIdService.execute(
      "65d921708af1d514e0f0fa29"
    );

    expect(payment).toEqual(mockPayment);
    expect(prismaClient.payment.findUnique).toHaveBeenCalledWith({
      where: { id: "65d921708af1d514e0f0fa29" },
    });
  });

  it("should return null if payment with the given id does not exist", async () => {
    jest.spyOn(prismaClient.payment, "findUnique").mockResolvedValue(null);

    const payment = await listPaymentByIdService.execute(
      "65d921708af1d514e0f0fa27"
    );

    expect(payment).toBeNull();
    expect(prismaClient.payment.findUnique).toHaveBeenCalledWith({
      where: { id: "65d921708af1d514e0f0fa27" },
    });
  });
});
