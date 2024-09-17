import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../../Hooks/useSendMessage';
import toast from 'react-hot-toast';

const MessageInput = () => {
  const [message,setMessage]=useState('')
  
 const {loading,sendMessage}=useSendMessage()

  const handleSubmit =async (e)=>{
     e.preventDefault()
     if(message){
      await sendMessage(message)
      setMessage("")
     }else{
      toast.error("Write a message to send")
     }
 
    
  }
  return (
    <form onSubmit={handleSubmit} className="px-4 my-4 ">
      <div className="w-full relative">
      
      <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Send a Message" className=" border  rounded-lg black w-full  p-2.5 bg-gray-200 border-gray-600 "/>
      <button disabled={loading} className="absolute inset-y-0 end-0 flex items-center pe-3">
      {loading?<span className="loading loading-spinner"></span>:<IoIosSend className="w-6 h-6" />}
      </button>
      </div>
    </form>
  )
}

export default MessageInput
