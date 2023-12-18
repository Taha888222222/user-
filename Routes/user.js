const express=require("express")

const User = require("../Models/User")
const router = express.Router()

router.get('/test',(req,res)=> {
    res.send('hello')
})

  //create add

  router.post('/add',async (req,res)=> {
    try{
        const {name,email,phone}=req.body
        const newUser= new User ({name,email,phone})
        await newUser.save();
        res.status(200).send({msg:'user added' ,newUser})
    }
    catch (error) {
        res.status(400).send({msg:'can not add this user'})
    }
  })

  //create get all
  router.get('/all',async (req,res)=> {
    try{
        listUsers = await User.find();
        res.status(200).send({msg:'user list',listUsers})
    } catch (error){
        res.status(400).send({msg:'can not get user list'})
    }
  })
  // remove contact 
  router.delete('/:_id',async(req,res)=>{
    try{
        const {_id}=req.params;
        await User.findOneAndDelete({_id})
        res.status(200).send({msg:'user deleted'})
    } catch (error){
        res.status(400).send({msg:'can not find this user'})
    }
  })

  //upadte contact
  router.put('/:_id',async(req,res)=>{
    try{
        const {_id}=req.params
        const updatedUser=await User.updateOne({_id},{...req.body})
        res.status(200).send({msg:'user updated'})
    } catch (error){
        res.status(400).send({msg:'can not upadated this user'})
    }
  })
  // get one 
  router.get('/:_id',async(req,res)=>{
    try{
        const userToGet=await User.findOne({_id:req.params._id})
        res.status(200).send({msg:'user getted',userToGet})
    } catch (error){
        res.status(400).send({msg:'can not find this user'})
    }
  })


module.exports=router;