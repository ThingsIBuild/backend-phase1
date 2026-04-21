import { prisma } from "../../../infrastructure/database/prisma/client";
import {IUserRequest, IUserResponse} from  "../types/user.types"


class UserRepository {
  async create(data:IUserRequest): Promise<IUserResponse | null> {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }

    async findByEmail(email: string): Promise<IUserResponse | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;        
}

}


export const userRepository = new UserRepository();