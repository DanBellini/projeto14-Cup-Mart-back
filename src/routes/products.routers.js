import { Router } from "express";
import { productsList, getProduct } from "../controllers/products.controller.js";

const router = Router();

router.get("/products", productsList);
router.get("/products/:productId", getProduct);

export default router;