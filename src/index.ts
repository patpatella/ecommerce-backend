import express from "express";
import cors from "cors";
import productRoutes from "./routes/products";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);

app.listen(4000, () => {
  console.log("Backend API running on http://localhost:4000");
});
