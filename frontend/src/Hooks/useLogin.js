import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";


const useLogin = () => {
 
    const [loading,setLoading]=useState(false)
    const {setAuthUser}=useAuthContext()

    const login = async(username,password)=>{
        const success = handleInputError(username,password)
        if(!success){
            return;
        }
        setLoading(true)
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({username,password})
            })
            const data = await res.json()

            console.log("login:",data)
            if(data.error){
                throw new Error(data.error)
            }
            if(!data.error){
                toast.success(' Login Successfull')
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,login}
}

export default useLogin


const handleInputError = (username,password)=>{
    if(!username||!password){
        toast.error("Please fill username & password input fields")
        return false
       
    }

    return true
}