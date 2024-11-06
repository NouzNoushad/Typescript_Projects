"use client"

import axios from "axios"
import React, { useState } from "react"

export default function AddProduct() {
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const handlePostProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const newProduct = {
                name, brand, price, description
            }
            await axios.post('/api/products', newProduct).then((response) => {
                console.log(response.data)
                setName("")
                setBrand("")
                setPrice(0)
                setDescription("")
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section>
            <div className="max-w-[600px] mx-auto px-5 xl:px-0 my-[5rem]">
                <form onSubmit={handlePostProduct} className="bg-black rounded-md px-[20px] py-[40px] space-y-[15px]">
                    <input type="text" placeholder="Enter product name" className="rounded-sm px-[10px] py-[5px] w-full" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Enter product brand" className="rounded-sm px-[10px] py-[5px] w-full" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <input type="number" placeholder="Enter product price" className="rounded-sm px-[10px] py-[5px] w-full" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
                    <textarea rows={4} placeholder="Enter product description" className="rounded-sm px-[10px] py-[5px] w-full" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <div className="flex justify-center sm:justify-end">
                        <button type="submit" className="border border-white rounded-md px-[15px] py-[5px] text-white font-[500] text-[0.9rem] transition-all duration-300 hover:text-black hover:border-white hover:bg-white">Create Product</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
