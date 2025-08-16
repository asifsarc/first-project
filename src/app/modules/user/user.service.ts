import { User } from './user.interface';
import { UserModel } from './user.model';

const crateAUserIntoDB = async (user: User) => {
  try {
    const result = await UserModel.create(user);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const UserServices = {
  crateAUserIntoDB,
};
