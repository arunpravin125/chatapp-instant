import React from "react";
import useConversation from "../../Zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({conversation,emoji,lastIdx,conversationId}) => {
  console.log("lastIdx:",lastIdx)
  const {selectedConversation,setSelectedConversation} = useConversation()
 const isSelected = selectedConversation._id == conversationId

const {onlineUsers}=useSocketContext()
const isOnline = onlineUsers.includes(conversationId)

  return (
    <>
      <div onClick={()=>setSelectedConversation(conversation)} className={`flex gap-2 items-center ${isSelected?"bg-blue-400":""}  hover:bg-sky-400 rounded p-2 py-1 cursor-pointer`}>
        
          <div className={`avatar ${isOnline?'online':""}`}>
            <div className="w-12 rounded-full">
              <img
                alt="User-avatar"
                src={conversation.profilePic}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1" >
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{conversation.fullName}</p>
                <span className="text-xl">{emoji}</span>
            </div>
          </div>
     
        {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
      </div>
    </>
  );
};

export default Conversation;
