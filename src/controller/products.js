import {
  createProductService,
  getAllProductsService,
} from "../service/products.js";

export const createProduct = async (req, res) => {
  try {
    const result = await createProductService(req.body);

    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Terjadi kesalahan server" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const result = await getAllProductsService();

    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
      data: result.data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Terjadi kesalahan server" });
  }
};
