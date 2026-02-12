import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controller/products.js";

export const Product = express.Router();

// create product
Product.post("/products/create", createProduct);
// get all products
Product.get("/products", getAllProducts);
// get product by id
Product.get("/product/:id", getProductById);
