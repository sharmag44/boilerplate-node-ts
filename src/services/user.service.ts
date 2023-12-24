import { Model, Document, ObjectId } from 'mongoose';
import { UserModel, User } from '../models/user.model';

export class UserService extends UserModel {
  // private userModel: Model<UserModel>;

  constructor() {
    // this.userModel = UserModel;
    super()
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const users = await UserModel.find().lean();
      return users as User[];
    } catch (error) {
      throw error;
    }
  }

  async getUserById(userId: string): Promise<User | null> {
    try {
      const user = await UserModel.findById(userId).lean();
      return user as User | null;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData: User): Promise<User> {
    try {
      const newUser = await UserModel.create(userData);
      return newUser.toObject() as User;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(userId: string, updatedUserData: Partial<User>): Promise<User | null> {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true })
        .lean();
      return updatedUser as User | null;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(userId: string): Promise<boolean> {
    try {
      const result = await UserModel.findByIdAndDelete(userId).lean();
      return !!result;
    } catch (error) {
      throw error;
    }
  }
}
