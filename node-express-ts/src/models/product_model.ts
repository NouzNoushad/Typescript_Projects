import mongoose, { Schema, connect, model } from "mongoose";

interface Product {
    name: String;
    brand?: String;
    price: Number;
    description?: String;
}

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