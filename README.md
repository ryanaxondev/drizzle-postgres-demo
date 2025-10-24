# 📝 Drizzle PostgreSQL Demo

A lightweight **Node.js** demo showcasing integration of **Drizzle ORM** with **PostgreSQL**.
This project illustrates the essentials of setting up a database layer with Drizzle — from defining schemas to executing basic CRUD operations with auto-increment IDs, unique constraints, and optional migration management.

---

## 🚀 Features

* ✅ **Table definitions** using Drizzle's `pgTable` with auto-incrementing primary key
* 🧩 **CRUD operations** (Insert, Select) with error handling for duplicates
* 🌐 **Database connection** via Node.js `pg` Pool
* ⚙️ **Optional migrations** managed by `drizzle-kit` with metadata tracking (`journal.json`)
* 🧱 **Stable CommonJS setup** (`require/module.exports`)
* 🐳 **Docker-ready PostgreSQL environment**

---

## 📂 Project Structure

```
project-root/
├─ drizzle/
│  ├─ schema.js                  # Table definitions (auto-increment ID)
│  ├─ 0000_lively_mikhail_rasputin.sql  # Initial migration (if using drizzle-kit)
│  └─ meta/                      # Drizzle metadata (journal.json)
├─ db/
│  └─ index.js                   # Drizzle + PostgreSQL connection with dev logging
├─ index.js                      # Main script (CRUD examples with duplicate handling)
├─ .env                          # Database URL & environment variables
├─ docker-compose.yml            # Optional Docker setup for PostgreSQL
├─ package.json
└─ README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ryanaxondev/drizzle-postgres-demo.git
cd drizzle-postgres-demo
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database_name>
POSTGRES_DB=mydb
POSTGRES_USER=postgres
POSTGRES_PASSWORD=admin
```

---

## 🐳 Optional: Run PostgreSQL with Docker

To spin up a PostgreSQL instance using Docker Compose:

```bash
docker-compose up -d
```

* The database service will use environment variables from `.env`
* Access Postgres at `localhost:5432`
* Stop and remove containers with:

```bash
docker-compose down
```

---

### 4️⃣ Run the demo

```bash
node index.js
```

You should see the inserted users logged in the console. Duplicate emails will be skipped with a warning instead of crashing the program.

---

## 🔧 Optional: Migrations with Drizzle-kit

If you want to manage migrations automatically:

1. Generate a new migration after updating `schema.js`:

```bash
npx drizzle-kit generate
```

2. Apply migrations to the database:

```bash
npx drizzle-kit migrate
```

3. Check migration status:

```bash
npx drizzle-kit status
```

> The `meta/journal.json` file keeps track of executed migrations, ensuring they aren't run multiple times.

---

## 🔧 Next Steps

* 🔁 Refactor to **ESM modules**
* 🧱 Add more **migrations** and evolve schema using `drizzle-kit`
* 🔍 Practice **advanced queries** using Drizzle ORM
* 💡 Explore **transactions** and **relational tables**

---

## 🧠 Notes

This demo is a clean, minimal reference to quickly get started with Drizzle + PostgreSQL setup, using auto-increment IDs, basic duplicate handling, and optional migration management. Perfect for beginners or quick prototypes.
