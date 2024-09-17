import toast from 'react-hot-toast'
import useConversation from '../Zustand/useConversation'
import { useEffect, useState } from 'react'

const useGetMessages = () => {
 const [loading,setLoading]=useState(false)

 const {messages,setMessages,selectedConversation}=useConversation()

 useEffect(()=>{
    const getMessage = async()=>{
       setLoading(true)
    
        try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`)
            const data = await res.json()
    
            console.log("getMessages:",data)
            if(data.error){
                throw new Error(data.error)
            }
            setMessages(data)
            
        } catch (error) {
            toast.error(error.message)
            console.log("error in get messages : ",error.message)
            
        }finally{
            setLoading(false)
        }
    
     }
     if(selectedConversation?._id)getMessage()
    
 },[,selectedConversation?._id,setMessages])
     return {messages,loading}
}

export default useGetMessages
