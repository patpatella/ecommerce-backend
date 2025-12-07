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
