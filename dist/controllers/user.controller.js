"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class UserController extends user_service_1.UserService {
    // public userService: UserService;
    constructor() {
        super();
    }
    async search(req, res) {
        try {
            const users = await user_service_1.UserService.prototype.getAllUsers();
            res.status(200).json(users);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    async getById(req, res) {
        const userId = req.params.id;
        try {
            const user = await user_service_1.UserService.prototype.getUserById(userId);
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
    }
    async create(req, res) {
        const userData = req.body;
        try {
            const newUser = await user_service_1.UserService.prototype.createUser(userData);
            res.status(201).json(newUser);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    async update(req, res) {
        const userId = req.params.id;
        const updatedUserData = req.body;
        try {
            const updatedUser = await user_service_1.UserService.prototype.updateUser(userId, updatedUserData);
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
    }
    async delete(req, res) {
        const userId = req.params.id;
        try {
            const deletedUser = await user_service_1.UserService.prototype.deleteUser(userId);
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
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map