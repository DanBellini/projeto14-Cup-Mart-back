import { Router } from "express";
import { getCheckout } from "../controllers/checkout.controller.js";
import {authSessionMidleware } from "../middlewares/authSession.middlewares.js";

const router = Router();

router.get('/checkout', authSessionMidleware, getCheckout );


export default router;