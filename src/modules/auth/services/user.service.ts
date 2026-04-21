import * as argon2 from "argon2";

import { userRepository } from "../repositories/use.repositories";
import { IUserRequest, IUserResponse } from "../types/user.types";



export const registerUserService = async (data: IUserRequest): Promise<IUserResponse | null> => {
  const existingUser = await userRepository.findByEmail(data.email);
  if (existingUser) {
    throw new Error("A user with this email already exists.") as unknown as Error;
  }

  const hashedPassword: string = await argon2.hash(data.password);
  data.password = hashedPassword;

  const userData: IUserRequest = {
    ...data,
    password: hashedPassword,
  }

  const user = await userRepository.create(userData);
  return user;
};
