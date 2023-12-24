"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
class UserService {
    constructor() {
        this.userModel = user_model_1.UserModel;
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userModel.find().lean();
                return users;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userModel.findById(userId).lean();
                return user;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.userModel.create(userData);
                return newUser.toObject();
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateUser(userId, updatedUserData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield this.userModel
                    .findByIdAndUpdate(userId, updatedUserData, { new: true })
                    .lean();
                return updatedUser;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.userModel.findByIdAndDelete(userId).lean();
                return !!result;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map