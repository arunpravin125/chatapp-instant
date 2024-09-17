import React, { useState } from "react";
import { Link } from "react-router-dom";

import useLogin from "../../Hooks/useLogin";


const Login = () => {
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()
  const {loading,login}=useLogin()
  const handleSubmit =async(e)=>{
    e.preventDefault()

   
      await login(username,password)
      
    
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-3 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-400">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit} >
          <div>
            <label className="label p-2" >
              <span  className="text-base label-text"  >Username</span>
            </label>
           
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter Username" className="w-full input input-bordered" ></input>
          </div>
          <div>
            <label className="label p-2" >
              <span  className="text-base label-text"  >Password</span>
            </label>
           
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter password" className="w-full input input-bordered" ></input>
          </div>
          <Link to="/signup" className="text-md text-white hover:userline hover:text-blue-300 mt-2 inline-block">{"Don't "} have an account?

          </Link>
          <div>
          <button  className={`mt-2 btn btn-block btn-sm `} disabled={loading}>{loading?<span className="loading loading-spinner"></span>:"Login"}</button>
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
