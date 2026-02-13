import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
} from "../controller/products.js";

export const Product = express.Router();

// create product
Product.post("/products/create", createProduct);
// get all products
Product.get("/products", getAllProducts);
// get product by id
Product.get("/product/:id", getProductById);
// edit product by id
Product.put("/products/edit/:id", editProduct);
