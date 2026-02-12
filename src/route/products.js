import express from "express";
import { createProduct, getAllProducts } from "../controller/products.js";

export const Product = express.Router();

// create product
Product.post("/products/create", createProduct);
// get all products
Product.get("/products", getAllProducts);
