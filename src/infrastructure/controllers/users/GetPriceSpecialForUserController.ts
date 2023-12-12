import { Request, Response } from "express"

import { GetPriceSpecialForUserUseCase } from "../../../application/users/GetPriceSpecialForUserUseCase"

export class GetPriceSpecialForUserController {
  public constructor(private readonly _useCase: GetPriceSpecialForUserUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { user_id, product_brand } = req.params
      const result = await this._useCase.execute({ user_id, product_brand})
      return res.json(result)
    } catch (err: any) {
      console.log(err.message) // Users not found
      return res.status(500).json({ message: err.message })
    }
  }
}