import React from 'react'

import useConversation from '../../Zustand/useConversation';
import { useAuthContext } from '../../context/authContext';
import { extractTime } from '../../utils/extractTime';


const Message = ({messages,message,messageSender,messageTime}) => {
const {authUser}=useAuthContext()
  const {selectedConversation}=useConversation()
  console.log("login userId :",authUser._id)
  const fromMe = authUser._id === messageSender
  const chatClassName=fromMe?"chat-end":"chat-start"
  const profilePic = fromMe?authUser.profilePic:selectedConversation.profilePic
  const chatColorChange=fromMe?"bg-blue-600":"bg-gray-500"

// console.log('messageshake:',message.shouldShake)
  // var shakeClass=messageshake?"shake":""
  const shakeClass = message.shouldShake?"shake":""

  
  return (
    
      <div className={`chat  ${chatClassName} `}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic} />
    </div>
  </div>
  
  <div className={`chat-bubble text-white ${chatColorChange} ${shakeClass} `}>{messages}</div>
  <time className="text-xs text-white">{extractTime(messageTime)}</time>
    </div>
  )
}

export default Message
