import React from 'react'
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <form className="px-4 my-4 ">
      <div className="w-full relative">
      
      <input type="text" placeholder="Send a Message" className=" border  rounded-lg black w-full  p-2.5 bg-gray-200 border-gray-600 "/>
      <button className="absolute inset-y-0 end-0 flex items-center pe-3">
      <IoIosSend className="w-6 h-6" />
      </button>
      </div>
    </form>
  )
}

export default MessageInput
