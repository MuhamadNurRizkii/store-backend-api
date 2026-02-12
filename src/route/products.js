import express from "express";
import { createProduct } from "../controller/products.js";

export const Product = express.Router();

Product.post("/products/create", createProduct);
