import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectionDB } from "./DB/database.js"
import { authRoutes } from "./Routes/auth.Route.js"
import { messageRouter } from "./Routes/message.routes.js"
import cookieParser from "cookie-parser"
import { userRouter } from "./Routes/users.routes.js"
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRouter)
app.use("/api/users",userRouter)

const usePort = process.env.PORT || 4801

app.listen(usePort,()=>{
    connectionDB()
    console.log(`server started.....${usePort}`)
})