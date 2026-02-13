import {
  createProduct,
  getAllProduct,
  getProductById,
  editProduct,
} from "../repository/products.js";

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

export const getProductByIdService = async (id) => {
  try {
    if (!id) {
      return {
        success: false,
        statusCode: 400,
        message: "Id tidak ditemukan",
      };
    }

    const product = await getProductById(Number(id));

    if (product === null) {
      return {
        success: false,
        statusCode: 404,
        message: "Produk tidak ditemukan!",
      };
    }
    return {
      success: true,
      statusCode: 200,
      message: "Produk berhasil diambil",
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

export const editProductService = async (id, data) => {
  try {
    const { name, price, stock, description } = data;

    if (!name || price === null || stock === null || !description) {
      return {
        success: false,
        statusCode: 400,
        message: "Semua field wajib diisi!",
      };
    }
    const product = await editProduct(Number(id), {
      name,
      price,
      stock,
      description,
    });
    return {
      success: true,
      statusCode: 200,
      message: "Produk berhasil diambil",
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
