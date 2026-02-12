import { createProduct, getAllProduct } from "../repository/products.js";

export const createProductService = async (payload) => {
  try {
    const { name, price, stock, description } = payload;

    if (!name || price === null || stock === null || !description) {
      return {
        success: false,
        statusCode: 400,
        message: "Semua field wajib diisi!",
      };
    }

    const product = await createProduct({ name, price, stock, description });

    return {
      success: true,
      statusCode: 201,
      message: "Berhasil menambahkan produk baru",
      data: product,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: error.message,
    };
  }
};

export const getAllProductsService = async () => {
  const products = await getAllProduct();

  try {
    return {
      success: true,
      statusCode: 200,
      message: "Produk berhasil diambil",
      data: products,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: error.message,
    };
  }
};
