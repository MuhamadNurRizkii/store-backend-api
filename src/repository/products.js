import { prisma } from "../model/database.js";

export const createProduct = async (data) => {
  return prisma.product.create({
    data: data,
  });
};
