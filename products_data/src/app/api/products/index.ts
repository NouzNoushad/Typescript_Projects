import type { NextApiRequest, NextApiResponse } from "next";

import connectToDatabase from "@/app/lib/mongoose";
import Product from "@/app/models/Product";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await connectToDatabase()

    if(req.method === 'GET') {
        try {
            const products = await Product.find()
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong',
                error
            })
        }
    }

    if (req.method === 'POST') {
        try {
            const { name, brand, price, description } = req.body;
            const newProduct = new Product({
                name,
                brand,
                price,
                description,
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong',
                error
            })
        }
    }
}