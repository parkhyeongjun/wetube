import express from "express";
import { edit, remove } from "../controllers/userController";
const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter