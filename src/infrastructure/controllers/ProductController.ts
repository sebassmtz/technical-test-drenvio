import { Request, Response } from "express"
import { GetStockProducts } from "../../application/GetStockProducts"

export class ProductsController {
  public constructor(private readonly _useCase: GetStockProducts) {}

  public async handle(req: Request, res: Response): Promise<void> {
    try {
      const result = await this._useCase.execute()
      res.json(result)
    } catch (err) {
      res.status(500).json({ message: err })
    }
  }
}
