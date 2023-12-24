import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController extends UserService {
  // public userService: UserService;

  constructor() {
    super();
  }

  async search(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.prototype.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;

    try {
      const user = await UserService.prototype.getUserById(userId);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const userData = req.body;

    try {
      const newUser = await UserService.prototype.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;
    const updatedUserData = req.body;

    try {
      const updatedUser = await UserService.prototype.updateUser(userId, updatedUserData);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    const userId = req.params.id;

    try {
      const deletedUser = await UserService.prototype.deleteUser(userId);
      if (deletedUser) {
        res.status(204).send();
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
