"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
class UserService extends user_model_1.UserModel {
    // private userModel: Model<UserModel>;
    constructor() {
        // this.userModel = UserModel;
        super();
    }
    async getAllUsers() {
        try {
            const users = await user_model_1.UserModel.find().lean();
            return users;
        }
        catch (error) {
            throw error;
        }
    }
    async getUserById(userId) {
        try {
            const user = await user_model_1.UserModel.findById(userId).lean();
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async createUser(userData) {
        try {
            const newUser = await user_model_1.UserModel.create(userData);
            return newUser.toObject();
        }
        catch (error) {
            throw error;
        }
    }
    async updateUser(userId, updatedUserData) {
        try {
            const updatedUser = await user_model_1.UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true })
                .lean();
            return updatedUser;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteUser(userId) {
        try {
            const result = await user_model_1.UserModel.findByIdAndDelete(userId).lean();
            return !!result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map