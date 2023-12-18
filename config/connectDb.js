const mongoose=require("mongoose")
const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.BD_URI)
        console.log("database is connected")
    } catch(error){
        console.log("database not connected")
    }
}
module.exports=connectDb