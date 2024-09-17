import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../Hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emojis'

const Conversations = () => {
  const {loading,conversations}=useGetConversation()
  console.log("conversations:",conversations)
  return (
    <div className="py-1 flex flex-col overflow-auto">
      
    

      {conversations.map((conversation,index)=>{
        return <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()}
          lastIdx={index==conversations.length-1} conversationId={conversation._id}
        />
      })}
       
      
    </div>
  )
}

export default Conversations
