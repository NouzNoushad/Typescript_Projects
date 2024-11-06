import { Request, Response } from "express"

export const createProducts = (req: Request, res: Response): void => {
    res.send('Product details created')
}