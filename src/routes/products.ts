import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

// GET /products
router.get("/", async (req, res) => {
  const category = req.query.category as string;

  const products = category
    ? await prisma.product.findMany({ where: { category } })
    : await prisma.product.findMany();

  res.json(products);
});

// GET /products/:id
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) return res.status(404).json({ error: "Product not found" });

  res.json(product);
});

// POST /products
router.post("/", async (req, res) => {
  try {
    const newProduct = await prisma.product.create({
      data: req.body,
    });
    res.json(newProduct);
  } catch (err) {
    res.status(400).json({ error: "Invalid product data" });
  }
});

export default router;
