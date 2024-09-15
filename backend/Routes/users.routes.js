import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { getUsersidebar } from "../controllers/users.controller.js"

export const userRouter = express.Router()

userRouter.get("/",protectRoute,getUsersidebar)