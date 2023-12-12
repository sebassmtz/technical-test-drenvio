import { Request, Response } from "express"

import { GetUsersUseCase } from "../../../application/users/GetUsersUseCase"

export class GetUsersController {
  public constructor(private readonly _useCase: GetUsersUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this._useCase.execute()
      return res.json(result)
    } catch (err: any) {
      console.log(err.message) // Usersnot found
      return res.status(500).json({ message: err.message })
    }
  }
}
