import { ProductModel } from "../../domain/models/ProductModel"
import { IUseCase } from "../../shared/IUseCase"
import { IProductRepository } from "../../domain/repositories/ProductRepository"

export class FindProductUseCase implements IUseCase<string, ProductModel> {
  public constructor(private readonly _productRepository: IProductRepository) {}

  public async execute(id: string): Promise<ProductModel> {
    const product = await this._productRepository.find(id)
    if (!product) return {
      _id: '',
      name: '',
      price: 0,
      brand: '',
      stock: 0,
      special_price: 0
    };
    return product
  }
}
