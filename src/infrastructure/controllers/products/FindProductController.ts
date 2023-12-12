import { Request, Response } from "express"
import { FindProductUseCase } from "../../../application/products/FindProductUseCase"

export class FindProductController {
  public constructor(private readonly _useCase: FindProductUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const result = await this._useCase.execute(id)
      if (!result._id) return res.status(404).json({ message: "Product not found" })
      return res.status(200).json(result)
    } catch (err: any) {
      console.log(err.message) // Product not found
      return res.status(500).json({ message: err.message })
    }
  }
}
