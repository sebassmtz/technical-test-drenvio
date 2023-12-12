import { UserModel } from "../../domain/models/UserModel";
import { IUseCase } from "../../shared/IUseCase";
import { IUserRepository } from "../../domain/repositories/UserRepository";

export class GetUsersUseCase implements IUseCase<void, UserModel[]> {
  public constructor(private readonly _userRepository: IUserRepository) {}

  public async execute(): Promise<UserModel[]> {
    const users = await this._userRepository.getUsers();
    if (!users) throw new Error("Users not found");
    return users;
  }
}