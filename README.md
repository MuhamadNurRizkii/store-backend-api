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
