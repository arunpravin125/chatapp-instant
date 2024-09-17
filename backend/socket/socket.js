import { Server } from "socket.io";
import http from "http"
import express from "express"

const app = express()

const server = http.createServer(app)

export var io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
})

export const getReceiverSocketId = (receiverId)=>{
    return userSocketMap[receiverId]
}

const userSocketMap = {} //{userId:socketId}

io.on("connection",(socket)=>{
    console.log("A user connected : ",socket.id)

    const userId = socket.handshake.query.userId

    if(userId !==undefined){
        userSocketMap[userId] =socket.id
    }
     //socket.io is used to listen to the events. can be used both on client and server side

    io.emit("getOnlineUsers",Object.keys(userSocketMap))// keys means this userId connected,every user connected 
   // his owne userId that store in userSokcetMap we used that key userId to view who are connected online

    // socket.on() is used to listen to the events. can be used both on client and server side
    socket.on("disconnect",()=>{
        console.log("user Disconnected:",socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap)) // after discoonect .who are connected userSokcet updated
    })
})


export {app,server}