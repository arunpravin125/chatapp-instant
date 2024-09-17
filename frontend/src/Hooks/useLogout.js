import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext'
import toast from 'react-hot-toast'

const useLogout = () => {
  const [loading,setLoading]=useState(false)
  const {setAuthUser}=useAuthContext()
  const Logout = async()=>{
    setLoading(true)
    try {
        const res = await  fetch("/api/auth/logout",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
    const data = await res.json()
    console.log("Logout",data)
    toast.success("Logout Successfull")
    localStorage.removeItem("chat-user")
    setAuthUser("")
    

    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }finally{
        setLoading(false)
    }
    
  }
  return {loading,Logout}
}

export default useLogout
