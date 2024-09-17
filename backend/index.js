import express from "express"
import cors from "cors"
import path from "path"
import dotenv from "dotenv"
import { connectionDB } from "./DB/database.js"
import { authRoutes } from "./Routes/auth.Route.js"
import { messageRouter } from "./Routes/message.routes.js"
import cookieParser from "cookie-parser"
import { userRouter } from "./Routes/users.routes.js"
import {app, server } from "./socket/socket.js"

app.use(express.json())
app.use(cors())
dotenv.config()
app.use(cookieParser())

const __dirname = path.resolve()

const usePort = process.env.PORT || 4801


app.use(express.static(path.join(__dirname,"/frontend/dist")))



app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRouter)
app.use("/api/users",userRouter)

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(usePort,()=>{
    connectionDB()
    console.log(`server started.....${usePort}`)
})