export class ProductModel {
  public constructor(
    public readonly _id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly brand: string,
    public readonly stock: number,
    public readonly special_price: number,
  ) {}
}
