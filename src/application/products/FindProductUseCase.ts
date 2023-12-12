import { ProductModel } from "../../domain/models/ProductModel"
import { IUseCase } from "../../shared/IUseCase"
import { IProductRepository } from "../../domain/repositories/ProductRepository"

export class FindProductUseCase implements IUseCase<string, ProductModel> {
  public constructor(private readonly _productRepository: IProductRepository) {}

  public async execute(id: string): Promise<ProductModel> {
    const product = await this._productRepository.find(id)
    if (!product) throw new Error("Product not found")
    return product
  }
}
