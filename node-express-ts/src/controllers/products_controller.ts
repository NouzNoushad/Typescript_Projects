import { Request, Response } from "express"
import productSchema from "../models/product_model"
import { Product } from "../interface/product_interface"

// create new product
export const createProducts = async (req: Request, res: Response): Promise<void> => {
    try {
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
            const newProduct = new productSchema<Product>({
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
    } catch (error) {
        res.status(404).json({
            message: "Something went wrong",
            error: error,
        })
    }
}

// get product data
export const getProductsData = async (req: Request, res: Response): Promise<void> => {
    try {
        const products: Product[] = await productSchema.find({})
        res.status(200).json({
            message: `${products.length} items`,
            products: products,
        })
    } catch (error) {
        res.status(404).json({
            message: "Something went wrong",
            error: error,
        })
    }
}

// get product by id
export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const product = await productSchema.findById(id)
        res.status(200).json({
            product: product,
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// update product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        await productSchema.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            message: "Product updated"
        })
    } catch (error) {
        res.status(404).json({
            message: "Something went wrong",
            error: error
        })
    }
}

// delete product
export const deleteProduct = async (req: Request, res: Response) : Promise<void> => {
    try {
        const {id} = req.params
        await productSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "Product deleted"
        })       
    } catch (error) {
        res.status(404).json({
            message: "Something went wrong",
            error: error
        })
    }
} 


