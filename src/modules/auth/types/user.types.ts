import { Prisma, User } from "../../../generated/prisma/client";

interface IUserRequest extends Prisma.UserCreateInput {
  email: string;
  name: string;
  password: string;
}

interface IUserResponse extends User {
  createdAt: Date;
  email: string;
  id: string;
  name: null | string;
  password: string;
  updatedAt: Date;
}

export type { IUserRequest, IUserResponse };
