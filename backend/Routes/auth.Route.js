import express from "express"
import { Login, Logout, signup } from "../controllers/auth.controllers.js"

export const authRoutes = express.Router()

authRoutes.post("/signup",signup)
authRoutes.post("/login",Login)
authRoutes.post("/logout",Logout)