import express, { Express } from "express"
import productsRoute from "./routes/products_route"

const app: Express = express()
const port: string | number = process.env.PORT || 4000

app.use('/', productsRoute)

app.listen(port, () => {
    console.log('Server started at port: ' + port)
})