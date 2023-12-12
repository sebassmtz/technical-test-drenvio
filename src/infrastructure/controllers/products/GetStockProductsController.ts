import { Request, Response } from "express"
import { GetStockProductsUseCase } from "../../../application/products/GetStockProductsUseCase"

export class GetStockProductsController {
  public constructor(private readonly _useCase: GetStockProductsUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._useCase.execute()
      return res.json(result)
    } catch (err: any) {
      console.log(err.message) // Products not found
      return res.status(500).json({ message: err.message })
    }
  }
}
