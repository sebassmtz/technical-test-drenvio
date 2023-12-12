import { UserModel } from "../models/UserModel";

export interface IPriceSpecial {
  name: string;
  brand: string;
  special_price?: number;
  price?: number;

}

export interface IUserRepository {
  getUsers(): Promise<UserModel[]>;
  getPriceSpecialForUser(user_id:string, product_brand:string): Promise<IPriceSpecial[]>;
}