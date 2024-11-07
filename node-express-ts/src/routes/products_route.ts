import express, { Router } from "express";
import { createProducts, deleteProduct, getProductById, getProductsData, updateProduct } from "../controllers/products_controller";

const router: Router = express.Router()

router.post('/create_product', createProducts)
router.get('/get_products', getProductsData)
router.get('/get_product/:id', getProductById)
router.post('/update_product/:id', updateProduct)
router.delete('/delete_product/:id', deleteProduct)

export default router