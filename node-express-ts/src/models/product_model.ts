import mongoose, { Schema, connect, model } from "mongoose";
import { Product } from "../interface/product_interface";

const productSchema = new Schema<Product>({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
})

export default model<Product>('productData', productSchema)