ECOMMERCE (backend)

# Tech stack: 
* Node.js, TypeScript, Express, Prisma ORM (SQLite).

# How to run: 
* npm install → npx prisma generate → npx prisma migrate dev --name init
→ npm run dev . Use curl http://localhost:4000/products to test.

# Sample curl requests (run on CMD)
* List all products:
    curl.exe http://localhost:4000/products

* Get product by id:
    curl.exe http://localhost:4000/products/5

* Filter by category:
    curl.exe "http://localhost:4000/products?category=Electronics"

* Create product (POST):

    curl.exe http://localhost:4000/products `
    -Method POST `
    -ContentType "application/json" `
    -Body '{"name":"New Item","price":10.5,"imageUrl":"https://via.placeholder.com/400","category":"Apparel","variants":"[\"OneSize\"]","inStock":true,"stock":12}'

# E-Commerce API Documentation

This REST API powers the full-stack E-Commerce Demo Application.
It provides product listing, cart operations, and supporting endpoints for the frontend.

# Base URL - Railway:

* https://ecommerce-backend-production-25c7.up.railway.app

# Tech Stack

* Node.js + Express
* TypeScript
* Prisma ORM
* SqlLite

Railway (Deployment)

# Endpoints Overview

Method	    Endpoint	        Description
GET	        /api/products	    Get all products
GET	        /api/products/:id	Get a single product by ID
POST	    /api/products	    Create a new product
PUT	        /api/products/:id	Update a product
DELETE	    /api/products/:id	Delete a product

# Products API
1. Get All Products
GET /api/products
✅ Sample Response
[
  {
    "id": 1,
    "name": "Smartwatch",
    "price": 199.99,
    "imageUrl": "https://example.com/image.jpg",
    "variants": ["silver", "black"],
    "inStock": true,
   "stock": 12
  }
]

2.Get a Product by ID
GET /api/products/:id
Example
/api/products/1

3. Create a Product
POST /api/products
Request Body
{
  "name": "Leather Wallet",
  "price": 49.5,
  "imageUrl": "https://example.com/ub.png",
  "variants": ["standard"],
  "inStock": true,
    "stock": 20
}

Response
{
  "id": 4,
  "message": "Product created successfully!"
}


# Database Schema (Prisma Model)
model Product {
  id        Int      @id @default(autoincrement())
  name      String
  price     Float
  imageUrl  String
  category  String
  variants  String?   // store JSON as string
  inStock   Boolean   @default(true)
  stock     Int       @default(0)
  createdAt DateTime  @default(now())
}

# Environment Variables

* Create a .env file with:
    DATABASE_URL="file:./dev.db"

# Deployment Checklist
Backend (Railway)

Add environment variables

* Start command:
    npm install
    npm run dev

# Links
* Frontend (Vercel): https://ecommerce-frontendd-jade.vercel.app/
* Backend (Railway): https://ecommerce-backend-production-25c7.up.railway.app
* Frontend Repo: https://github.com/patpatella/ecommerce-frontend
* Backend Repo: https://github.com/patpatella/ecommerce-backend
