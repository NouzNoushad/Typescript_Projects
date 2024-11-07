"use client"

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function HomeSection() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get('/api/products')

            console.log(response.data)
            setProducts(response.data)
        }

        fetchProducts()
    }, [])

    return (
        <section className="mt-[5rem]">
            <div className="max-w-[1200px] mx-auto px-5 xl:px-0">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                    {
                        products.map((product) =>
                            <Link href={`/${product._id}`} key={product._id} className="bg-black text-white rounded-md px-[20px] py-[20px]">
                                <h2 className="font-bold text-[1.15rem]">{product.name}</h2>
                                <h3 className="text-[0.9rem] font-[500]">{product.brand}</h3>
                                <p className="text-[1.3rem] font-bold">${product.price}</p>
                                <p className="text-[0.8rem]">{product.description}</p>
                            </Link>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
