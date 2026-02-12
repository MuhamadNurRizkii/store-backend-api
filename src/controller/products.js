import { createProductService } from "../service/products.js";

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
