import { prisma } from "../model/database.js";

export const createProduct = async (data) => {
  return prisma.product.create({
    data: data,
  });
};

export const getAllProduct = async () => {
  return prisma.product.findMany();
};
export const getProductById = async (id) => {
  return prisma.product.findUnique({
    where: {
      id: id,
    },
  });
};

export const editProduct = async (id, data) => {
  return prisma.product.update({
    where: {
      id: id,
    },
    data: data,
  });
};

export const deleteProduct = async (id) => {
  return prisma.product.delete({
    where: {
      id: id,
    },
  });
};
