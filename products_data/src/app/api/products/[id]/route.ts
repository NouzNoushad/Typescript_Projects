import connectMongo from '@/app/lib/mongoose';
import Product from '@/app/models/Product';
import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await connectMongo();
    const { id } = params;
    const data = await request.json();
    const updatedUser = await Product.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    await connectMongo();
    const { id } = params;
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: 'User deleted' }, { status: 200 });
}
