import React, { useState } from "react";

const Login = () => {
  const [username,setUsername]=useState()
  const [password,setPasswsord]=useState()

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log({username,password})
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
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
           
            <input value={password} onChange={(e)=>setPasswsord(e.target.value)} type="text" placeholder="Enter password" className="w-full input input-bordered" ></input>
          </div>
          <a href="e" className="text-md text-white hover:userline hover:text-blue-300 mt-2 inline-block">{"Don't "} have an account?

          </a>
          <div>
          <button  className="mt-2 btn btn-block btn-sm " >Login</button>
          </div>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
