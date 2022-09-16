import { Router } from "express";
import { checkout } from "../controllers/checkout.controller.js";
import {authSessionMidleware } from "../middlewares/authSession.middlewares.js";

const router = Router();

router.get('/checkout', authSessionMidleware, checkout );


export default router;