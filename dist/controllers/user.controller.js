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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    constructor() {
        this.userService = new user_service_1.UserService(); // Instantiate your UserService
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getAllUsers();
                res.status(200).json(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            try {
                const user = yield this.userService.getUserById(userId);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).send('User not found');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            try {
                const newUser = yield this.userService.createUser(userData);
                res.status(201).json(newUser);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            const updatedUserData = req.body;
            try {
                const updatedUser = yield this.userService.updateUser(userId, updatedUserData);
                if (updatedUser) {
                    res.status(200).json(updatedUser);
                }
                else {
                    res.status(404).send('User not found');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.id;
            try {
                const deletedUser = yield this.userService.deleteUser(userId);
                if (deletedUser) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('User not found');
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Internal Server Error');
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map