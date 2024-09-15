import User from "../models/user.model.js"

export const getUsersidebar = async(req,res)=>{
    try {
        const loggedInUser = req.user._id

        const filteredUser =await User.find({_id:{$ne:loggedInUser}}).select("-password")

        res.status(200).json(filteredUser)
    } catch (error) {
        console.log("error in getUserSideber : ",error.messages)
        res.status(500).json({error:error.message})
    }
} 