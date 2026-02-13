import request from "supertest";
import { prisma } from "../src/model/database.js";
import { app } from "../src/app.js";

describe("Tes API Product", () => {
  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("Test Create Product", async () => {
    const data = {
      name: "Susu Coklat",
      price: 5000,
      stock: 30,
      description: "Susu Coklat Manis",
    };
    const res = await request(app).post("/api/products/create").send(data);

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Berhasil menambahkan produk baru");
    expect(res.body.data).toMatchObject({
      id: 10,
      name: "Susu Coklat",
      price: 5000,
      stock: 30,
      description: "Susu Coklat Manis",
    });
  });

  test("Test Get All Product", async () => {
    const res = await request(app).get("/api/products");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Produk berhasil diambil");
    expect(res.body.data).toContainEqual({
      id: 10,
      name: "Susu Coklat",
      price: 5000,
      stock: 30,
      description: "Susu Coklat Manis",
    });
    expect(res.body.data.length).toBeGreaterThan(1);
  });

  test("Test Get Product By Id", async () => {
    const res = await request(app).get("/api/products/10");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Produk berhasil diambil");
    expect(res.body.data).toMatchObject({
      id: 10,
      name: "Susu Coklat",
      price: 5000,
      stock: 30,
      description: "Susu Coklat Manis",
    });
  });

  test("Test Update Product By Id", async () => {
    const data = {
      name: "Susu Coklat",
      price: 7000,
      stock: 25,
      description: "Susu Coklat Manis",
    };

    const res = await request(app).put("/api/products/edit/10").send(data);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Edit Produk Berhasil");
    expect(res.body.data).toMatchObject({
      id: 10,
      name: "Susu Coklat",
      price: 7000,
      stock: 25,
      description: "Susu Coklat Manis",
    });
  });

  test("Test Delete Product By Id", async () => {
    const res = await request(app).delete("/api/products/delete/10");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Produk berhasil dihapus");
    expect(res.body.data).toMatchObject({
      id: 10,
      name: "Susu Coklat",
      price: 7000,
      stock: 25,
      description: "Susu Coklat Manis",
    });
  });
});
