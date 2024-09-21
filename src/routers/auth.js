import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import { loginUserSchema, registerUserSchema } from '../validation/users.js';
import {
  loginUserController,
  refreshController,
  registerUserController,
  signoutController,
} from '../controllers/auth.js';
const authRouter = Router();
authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
authRouter.post('/refresh', ctrlWrapper(refreshController));
authRouter.post('/signout', ctrlWrapper(signoutController));
export default authRouter;
