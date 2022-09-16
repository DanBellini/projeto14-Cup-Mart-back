import { Router } from "express";
import { productsList } from "../controllers/products.controller.js";

const router = Router();

router.get("/products", productsList);

export default router;