import express from "express";
import { Product } from "./route/products.js";
export const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", Product);

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
