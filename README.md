# Product Management API

RESTful API untuk manajemen produk menggunakan Express.js dan Prisma ORM.

---

## Tech Stack

[![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,prisma,mysql)](https://skillicons.dev)

---

### Instalasi

Clone repository:

```bash
git clone https://github.com/MuhamadNurRizkii/store-backend-api.git
```

---

### Install Dependencies

```bash
npm install
```

---

### Setup Environment

Buat file `.env` di root project:

```bash
DATABASE_URL="mysql://user:password@localhost:3306/mydb"
DATABASE_USER="root"
DATABASE_PASSWORD="password"
DATABASE_NAME="mydb"
DATABASE_HOST="localhost"
DATABASE_PORT=3306
```

---

### Migrasi Database

```bash
npx prisma migrate dev
```

**Generate Prisma Client**

```bash
npx prisma generate
```

---

### Menjalankan Server

```bash
npm start
```

**Server Running on:**

```bash
http://localhost:3000
```

---

## API Documentation

### Base URL

http://localhost:3000/api/products

### 1. Create Product

POST /api/products/create

Request Body:

```json
{
  "name": "Nasi Goreng",
  "price": 15000,
  "stock": 20,
  "description": "Nasi Goreng enak"
}
```

Response: 201

```json
{
  "success": true,
  "message": "Berhasil menambahkan produk baru",
  "data": {
    "id": 1,
    "name": "Nasi Goreng",
    "price": 15000,
    "stock": 20,
    "description": "Nasi Goreng enak"
  }
}
```

### 2. Get All Products

GET /api/products

Response: 200

```json
{
  "success": true,
  "message": "Produk berhasil diambil",
  "data": [
    {
      "id": 1,
      "name": "Nasi Goreng",
      "price": 15000,
      "stock": 20,
      "description": "Nasi Goreng enak"
    }
  ]
}
```

### 3. Get Product By Id

GET /api/products/:id

Response: 200

```json
{
  "success": true,
  "message": "Produk berhasil diambil",
  "data": {
    "id": 2,
    "name": "Mie Rebus",
    "price": 10000,
    "stock": 20,
    "description": "Mie Rebus enak"
  }
}
```

### 4. Update Product By Id

PUT /api/products/edit/:id

Request Body:

```json
{
  "name": "Nasi Goreng",
  "price": 18000,
  "stock": 25,
  "description": "Nasi Goreng Enak Banget"
}
```

Response: 200

```json
{
  "success": true,
  "message": "Edit Produk Berhasil",
  "data": {
    "id": 1,
    "name": "Nasi Goreng",
    "price": 18000,
    "stock": 25,
    "description": "Nasi Goreng Enak Banget"
  }
}
```

### 5. Delete Product By Id

DELETE /api/products/delete/:id

Response: 200

```json
{
  "success": true,
  "message": "Produk berhasil dihapus",
  "data": {
    "id": 3,
    "name": "Kopi hitam",
    "price": 8000,
    "stock": 10,
    "description": "Kopi Hitam sehitam kehidupan"
  }
}
```

### Error Response

Response: 400

```json
{
  "success": false,
  "message": "error message"
}
```

Response: 500

```json
{
  "success": false,
  "message": "Terjadi kesalahan server"
}
```

---

### Author

Muhamad Nur Rizki
