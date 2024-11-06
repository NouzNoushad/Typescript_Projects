/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const MONOGODB_URI: string = process.env.MONGODB_URI as string

if(!MONOGODB_URI){
    throw new Error('Please define the mongodb uri')
}

const globalAny: any = global;

let cached: any = globalAny.mongoose

if(!cached) {
    cached = globalAny.mongoose = {
        conn: null,
        promise: null
    }
}

async function connectToDatabase() {
    if(cached.conn) {
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONOGODB_URI, opts).then((mongoose) => mongoose)
    }

    cached.conn = await cached.promise
    return cached.conn
}

export default connectToDatabase