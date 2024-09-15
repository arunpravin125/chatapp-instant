import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt

        if(!token){
            res.status(404).json({message:"no token found"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            res.status(401).json({error:"Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password")
        console.log("login user id : ",user)
        req.user = user
        next()
    } catch (error) {
        console.log("Error in protectRoutes : ",error.messsage)
        res.status(500).json({error:error.message})
    }
}