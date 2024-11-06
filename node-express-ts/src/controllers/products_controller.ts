import { Request, Response } from "express"
import productSchema from "../models/product_model"

// create new product
export const createProducts = async (req: Request, res: Response): Promise<void> => {
    const { name, brand, price, description } = req.body;

    // validations
    if (!name) {
        res.status(404).json({
            message: "name field is required"
        })
    } else if (!price) {
        res.status(404).json({
            message: "price field is required"
        })
    } else {
        // save product data
        const newProduct = new productSchema({
            name,
            brand,
            price,
            description
        })

        await newProduct.save().then(() => {
            res.status(200).json({
                message: "New product added",
                product: newProduct
            })
        })
    }
}