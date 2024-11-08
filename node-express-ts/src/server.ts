import express, { Express } from "express"
import productsRoute from "./routes/products_route"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import path from "path"
import cors from "cors"

const app: Express = express()
const port: string | number = process.env.PORT || 4000

const envPath = path.resolve(__dirname, '..', '.env')
dotenv.config({ path: envPath })

mongoose.connect(`${process.env.CONN_STR}`)
const db = mongoose.connection

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database connected'))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', productsRoute)

app.listen(port, () => {
    console.log('Server started at port: ' + port)
})