"use client"

import axios from "axios";
import React, { useEffect } from "react";

export default function HomeSection() {

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get('/api/products')

            console.log(response)
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Home Screen</h1>
        </>
    );
}
