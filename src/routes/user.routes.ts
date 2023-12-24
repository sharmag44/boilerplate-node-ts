import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
const router = Router();
const userController = new UserController();

router.get('/', userController.search);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export { router as userRoutes };
