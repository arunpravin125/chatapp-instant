import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getReceiverSocketId, io } from "../socket/socket.js"
// import io from "../socket/socket.js"
export const getMessage = async(req,res)=>{
    try {
        const {id:userToChatId}=req.params
         const senderId = req.user._id

         let conversation = await Conversation.findOne({
            participants:{
                $all :[senderId,userToChatId]
            }
         }).populate("messages")

         if(!conversation){
            return res.status(200).json([])
         }

         const messages = conversation.messages

         res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessage : ",error.message)
        res.status(401).json({error:error.message})
        
    }
}
export const sendMessage = async(req,res)=>{
    try {
        const {id:receiverId}=req.params
        const {message}= req.body
         const senderId = req.user._id
        //  console.log("senderId : ",senderId)
         
         let conversation = await Conversation.findOne({
            participants:{
                $all :[senderId,receiverId]
            }
         })
         if(!conversation){
           conversation =await  Conversation.create({
            participants:[senderId,receiverId]
            })
         }
         const newMessage = await Message({
            senderId,
            receiverId,
            message
         })

         if(newMessage){
            conversation.messages.push(newMessage._id)
         }

         await Promise.all([conversation.save(),newMessage.save()])
      // socket receiver id
         const receiverSocketId = getReceiverSocketId(receiverId)
         if(receiverSocketId){
            // io.to(socket_id).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
         }

         res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage : ",error.message)
        res.status(401).json({error:error.message})
        
    }
}