import React from 'react'

const Message = () => {
  return (
    
      <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  
  <div className={`chat-bubble text-white bg-blue-400`}>I hate you!</div>
  <time className="text-xs text-white">12:46</time>
    </div>
  )
}

export default Message
