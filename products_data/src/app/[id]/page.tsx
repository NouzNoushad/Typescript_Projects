/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ProductDetails() {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        console.log(searchParams)
        console.log(pathName)
        async function fetchProduct() {
            const response = await axios.get(`/api/products/${pathName}`)
            console.log(response.data)
            setProduct(response.data)
        }
        fetchProduct()
    }, [])
    return (
        product && <section className='py-[5rem]'>
            <div className="max-w-[500px] mx-auto px-5 xl:px-0">
                <div className="bg-black text-white px-[30px] py-[40px] rounded-md">
                    <h1>{product.name}</h1>
                    <h3>{product.brand}</h3>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <div className="">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
