import connectMongo from '@/app/lib/mongoose';
import Product from '@/app/models/Product';
import { NextResponse } from 'next/server';


export async function GET() {
    await connectMongo();
    const products = await Product.find({});
    return NextResponse.json(products, { status: 200 });
}

export async function POST(request: Request) {
    await connectMongo();
    const { name, brand, price, description } = await request.json();
    const newUser = await new Product({ name, brand, price, description }).save();
    return NextResponse.json(newUser, { status: 201 });
}