import express from "express"
import { getMessage, sendMessage } from "../controllers/message.controllers.js"
import { protectRoute } from "../middleware/protectRoute.js"

export const messageRouter = express.Router()

messageRouter.post("/send/:id",protectRoute,sendMessage)
messageRouter.get("/:id",protectRoute,getMessage)