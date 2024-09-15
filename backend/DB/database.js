import mongoose from "mongoose"

export const connectionDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDb connected")
    } catch (error) {
        console.log("error connect mongo",error.message)
    }
}