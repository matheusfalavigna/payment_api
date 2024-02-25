import { ListPaymentsService } from "../services/ListPayments.service";
import prismaClient from "../prisma/client";

describe("ListPaymentsService", () => {
  let listPaymentsService: ListPaymentsService;

  beforeEach(() => {
    listPaymentsService = new ListPaymentsService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return an array of payments", async () => {
    const mockPayments = [
      {
        id: "65d921708af1d514e0f0fa29",
        name: "John Doe",
        card_number: "123456789",
        amount: "10",
        expiration_date: "12/23",
        cvv: "123",
      },
      {
        id: "65d921708af1d514e0f0fa28",
        name: "Jane Smith",
        card_number: "987654321",
        amount: "20",
        expiration_date: "11/22",
        cvv: "456",
      },
    ];
    jest
      .spyOn(prismaClient.payment, "findMany")
      .mockResolvedValue(mockPayments);

    const result = await listPaymentsService.execute();

    expect(result).toEqual(mockPayments);
    expect(prismaClient.payment.findMany).toHaveBeenCalledTimes(1);
  });

  it("should handle errors and throw an exception", async () => {
    const mockError = new Error("Failed to fetch payments");
    jest.spyOn(prismaClient.payment, "findMany").mockRejectedValue(mockError);

    await expect(listPaymentsService.execute()).rejects.toThrow(mockError);
    expect(prismaClient.payment.findMany).toHaveBeenCalledTimes(1);
  });
});
