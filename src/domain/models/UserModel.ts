export class UserModel {
  public constructor(
    public readonly _id: string,
    public readonly email: string,
    public readonly name: string,
    public readonly special_price: string[],
  ) {}
}