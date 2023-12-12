import { IUseCase } from "../../shared/IUseCase"
import {
  IUserRepository,
  IPriceSpecial,
} from "../../domain/repositories/UserRepository"

interface IPriceSpecialInput {
  user_id: string
  product_brand: string
}

export class GetPriceSpecialForUserUseCase
  implements IUseCase<IPriceSpecialInput, IPriceSpecial[]>
{
  public constructor(private readonly _userRepository: IUserRepository) {}

  public async execute(input: IPriceSpecialInput): Promise<IPriceSpecial[]> {
    const users = await this._userRepository.getPriceSpecialForUser(
      input.user_id,
      input.product_brand
    )
    return users
  }
}
