import { ProductModel } from "../../domain/models/ProductModel"
import { IUseCase } from "../../shared/IUseCase"
import { IProductRepository } from "../../domain/repositories/ProductRepository"

// No tiene entrada porque es un get All
export class GetStockProductsUseCase implements IUseCase<void, ProductModel[]> {
  public constructor(private readonly _productRepository: IProductRepository) {}

  public async execute(): Promise<ProductModel[]> {
    const products = await this._productRepository.getProductsStock()
    if (!products) throw new Error("No products found")

    return products
  }
}
