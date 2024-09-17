
import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signup = async(req,res)=>{
   try {
    const {fullName,username,password,confirmPassword,gender}=req.body

    if(password !== confirmPassword){
        return res.status(400).json({error:"Password do not match"})
    }

    const user = await User.findOne({username})

    if(user){
        return res.status(400).json({error:"Username already exits"})
    }

    //hash password
    const salt = await bcryptjs.genSalt(10)
    const hashpassword = await bcryptjs.hash(password,salt)

   

    // const bodyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`
    // const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girl?username=${username}`

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = await new User({
        fullName,
        username,
        password:hashpassword,
        gender,
        profilePic:gender == "male"?boyProfilePic:girlProfilePic
    })

    if(newUser){
        //Generate token
       generateTokenAndSetCookie(newUser._id,res)
    await newUser.save()
    res.status(201).json({_id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
         password:newUser.password,
        gender:newUser.gender,
        profilePic:newUser.profilePic
    })
    }else{
        res.status(400).json({error:"Invalid user data"})
    }
    
   } catch (error) {
    console.log("error in signup controller",error.message)
    res.status(500).json({error:"Internal server error"})
   }
}

export const Login = async(req,res)=>{
   try {
   const {username,password}=req.body

   if(username && password){

    const user =await User.findOne({username})

  
    const comparePassword =await bcryptjs.compare(password,user?.password || "")

    if(!user || !comparePassword){
        return res.status(400).json({error:" username and password wrong"})
     }
    
     generateTokenAndSetCookie(user._id,res)

     res.status(200).json({_id:user._id,
        fullName:user.fullName,
        username:user.username,
        gender:user.gender,
        profilePic:user.profilePic
    })
   
   }else{
    return res.status(500).json({error:"invalid username and password"})
   }
    
   } catch (error) {
    console.log("error in Login controller",error.message)
    res.status(500).json({error:"Internal server error"})
   }
}

export const Logout = (req,res)=>{
   try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"Logged out Successfully"})
   } catch (error) {
    console.log("error in Logout controller",error.message)
    res.status(500).json({error:"Internal server error"})
   }
}