import { ProductModel } from "../../domain/models/ProductModel"
import { Product as ProductDTO } from "./dto/ProductsDTO"
import { IProductRepository } from "../../domain/repositories/ProductRepository"

export class ProductRepositoryImp implements IProductRepository {
  public async find(id: string): Promise<ProductModel | null> {
      const result = await ProductDTO.findById(id)
      if(!result) return result
    return new ProductModel(
      result._id.toString(),
      result.name,
      result.price,
      result.brand,
      result.stock,
      result.special_price
    );
  }

  public async getProductsStock(): Promise<ProductModel[]> {
    const products = await ProductDTO.find({ stock: { $gt: 0 } })
    if (!products) return []
    // Tengo que pasar de DTO a Model
    return products.map((product) => {
      return new ProductModel(
        product._id.toString(),
        product.name,
        product.price,
        product.brand,
        product.stock,
        product.special_price
      )
    })
  }
}
