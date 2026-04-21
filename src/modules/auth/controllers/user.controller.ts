import { Request, Response } from "express";

import { registerUserService } from "../services/user.service";
import { IUserRequest } from "../types/user.types";

export const registerUserController = async (req: Request, res: Response) => {
  try {
    await registerUserService(req.body as IUserRequest);

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Register error:", error);

    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
