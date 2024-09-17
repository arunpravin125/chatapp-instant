import React, { createContext, useContext, useEffect, useState } from 'react'

import io from "socket.io-client"
import {useAuthContext} from "./authContext"


export const SocketContext = createContext()

export const useSocketContext = ()=>{
    
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children})=>{
    
    const [socket,setSocket]=useState(null)
    const [onlineUsers,setOnlineUsers]=useState([])
   const {authUser}=useAuthContext()
    useEffect(()=>{
       
        if(authUser){
            const socket = io("https://chatapp-instants.onrender.com",{
                query:{
                    userId:authUser._id
                }
            })// backend connect
            setSocket(socket)
 // socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users)
            })


            return ()=>socket.close()
        }else{
            if(socket){
                socket.close()
                setSocket(null)
            }
        }

    },[authUser])
    return(
        <SocketContext.Provider value={{socket,onlineUsers}} >
            {children}
        </SocketContext.Provider>
    )
}
