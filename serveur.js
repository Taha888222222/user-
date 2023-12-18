const express=require("express")
 const app=express()

 // require env and config
 require("dotenv").config();


  //middleware bodyparser
 app.use(express.json())
  // create port
  const PORT=process.env.PORT

  //create our Db
  const connectDb=require("./config/connectDb");
  connectDb();


    app.use('/api/user',require('./Routes/user'))
    




  //create serveur 
  app.listen(PORT,error=> {
    error ? console.error("fail to connect"):
    console.log(`serveur is running ${PORT}`)
  }) 