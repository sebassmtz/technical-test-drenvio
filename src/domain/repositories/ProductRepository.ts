import { ProductModel } from "../../domain/models/ProductModel";

export interface IProductRepository {
  find(id: string): Promise<ProductModel | null>;
  getProductsStock(): Promise<ProductModel[]>;
}