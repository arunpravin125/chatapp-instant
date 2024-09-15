import React, { useState } from 'react'
import GenerateGender from './GenerateGender'

const Signup = () => {
  const [user,setUser]=useState({fullName:"",username:"",password:"",confirmPassword:"",gender:""})
  const [genderCheck,setGenderCheck]=useState(null)
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user)
  }
  const CheckGender =(gender)=>{
   setGenderCheck(gender)
   setUser({...user,gender:gender})

  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-2 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        SignUp
        <span className="text-blue-400">ChatApp</span>
      </h1>
      <form onSubmit={handleSubmit} >
      <div>
          <label className="label p-2" >
            <span  className="text-base label-text"  >FullName</span>
          </label>
         
          <input value={user.fullName} onChange={(e)=>setUser({...user,fullName:e.target.value})} type="text" placeholder="Enter FullName" className="w-full input input-bordered" ></input>
        </div>
        <div>
          <label className="label p-2" >
            <span  className="text-base label-text"  >Username</span>
          </label>
         
          <input value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} type="text" placeholder="Enter Username" className="w-full input input-bordered" ></input>
        </div>
        <div>
          <label className="label p-2" >
            <span  className="text-base label-text"  >Password</span>
          </label>
         
          <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} type="text" placeholder="password" className="w-full input input-bordered" ></input>
        </div>
        <div>
          <label className="label p-2" >
            <span  className="text-base label-text"  >confirmPassword</span>
          </label>
         
          <input value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})} type="text" placeholder="confirmPassword" className="w-full input input-bordered" ></input>
        </div>
         {/* //Gender check box */}
        <GenerateGender CheckGender={CheckGender} genderCheck={genderCheck} ></GenerateGender>
       
        <a href="e" className="text-md text-white hover:userline hover:text-blue-300  inline-block">Already have an account?

        </a>
        <div>
        <button  className=" btn btn-block btn-sm " >SignUp</button>
        </div>
      
      </form>
    </div>
  </div>
  )
}

export default Signup
