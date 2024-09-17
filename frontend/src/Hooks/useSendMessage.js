import { useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../Zustand/useConversation'
// import { useAuthContext } from '../context/authContext'

const useSendMessage = () => {
    const [loading,setLoading]=useState(false)
    const {selectedConversation,setMessages,messages}=useConversation()
    // const {authUser}=useAuthContext()
    const sendMessage = async(message)=>{
       setLoading(true)
       try {
        const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({message})
        })
        const data = await res.json()
        console.log("sendMessage : ",data)
        if(data.error){
            throw new Error(data.error)
        }
        setMessages([...messages,data])
        
       } catch (error) {
         console.log("error in send Message :",error.message)
         toast.error(error.message)
       }finally{
        setLoading(false)
       }
    }
    return {sendMessage,loading}
}

export default useSendMessage
