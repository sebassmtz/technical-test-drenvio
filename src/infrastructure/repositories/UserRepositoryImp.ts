import { IPriceSpecial } from "../../domain/repositories/UserRepository"
import { User as UserDTO } from "./dto/UsersDTO"
import { Product as ProductDTO } from "./dto/ProductsDTO"
import { IUserRepository } from "../../domain/repositories/UserRepository"
import { UserModel } from "../../domain/models/UserModel"

export class UserRepositoryImp implements IUserRepository {

  public async getUsers(): Promise<UserModel[]> {
    const users = await UserDTO.find()
    if (!users) return []
    return users.map((user) => {
      return new UserModel(
        user._id.toString(),
        user.name,
        user.email,
        user.special_price
      )
    })
  }

  public async getPriceSpecialForUser(
    user_id: string,
    product_brand: string
  ): Promise<IPriceSpecial[]> {
    console.log("UserRepositoryImp.getPriceSpecialForUser")
    const user: UserModel | null = await UserDTO.findById(user_id)
    const products = await ProductDTO.find({
      brand: product_brand,
      stock: { $gt: 0 },
    })

    if (!user || !products.length) throw new Error("User or Brand not found")

    if (
      user.special_price.length > 0 &&
      user.special_price.includes(product_brand)
    ) {
      return products.map((product) => {
        return {
          name: product.name,
          brand: product.brand,
          special_price: product.special_price,
        }
      })
    } else {
      return products.map((product) => {
        return {
          name: product.name,
          brand: product.brand,
          price: product.price,
        }
      })
    }
  }
}
