import React from 'react'
import { SlLogout } from "react-icons/sl";
import useLogout from '../../Hooks/useLogout';
const LogoutButton = () => {


  const {loading,Logout}=useLogout()

  const handleLogout = ()=>{
    Logout()
  }

  return (
    <div className="mt-auto">
      <button onClick={handleLogout} disabled={loading}  >
        {loading?<span className="loading loading-spinner"></span>:<SlLogout className="mt-5 w-6 h-5 hover:text-black"/>}

      </button>
    </div>
  )
}

export default LogoutButton
