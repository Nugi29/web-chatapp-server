import express from 'express';
import { signUp, login, updateProfile, checkAuth } from '../controllers/userController.js';
import { protectRoute } from '../middleware/auth.js';
import e from 'express';

const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);
userRouter.put("/update-profile", protectRoute, updateProfile);
userRouter.get("/check", protectRoute, checkAuth);

export default userRouter;
