import { Request, Response } from 'express';

import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    const result = await UserServices.crateAUserIntoDB(userData);

    res.status(200).json({
      success: true,
      message: 'User Created Successfuly',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createUser,
};
