import { ProductModel } from "../../domain/models/ProductModel"
import { Product as ProductDTO } from "./dto/ProductsDTO"
import { IProductRepository } from "../../domain/repositories/ProductRepository"

export class ProductRepositoryImp implements IProductRepository {


  public async find(id: string): Promise<ProductModel | null> {
    console.log(id)

    return null
  }

  public async getProductsStock(): Promise<ProductModel[]> {
    const products = await ProductDTO.find({ stock: { $gt: 0 } })
    if (!products) return []

    return products.map((product) => {
      return new ProductModel(
        product._id,
        product.name,
        product.price,
        product.brand,
        product.stock,
        product.special_price
      )
    })
  }
}
