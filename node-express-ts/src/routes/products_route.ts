import express, { Router } from "express";
import { createProducts } from "../controllers/products_controller";

const router: Router = express.Router()

router.post('/create_product', createProducts)

export default router