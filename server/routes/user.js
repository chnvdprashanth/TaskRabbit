import { Router } from 'express'
import { handleUserLogin } from '../controllers/user.js';

export const userRouter = Router();

userRouter.post("login",handleUserLogin);