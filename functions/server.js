const express = require("express")
const static = require("express-static")
const path = require("path")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const serverless = require("serverless-http")

mongoose.connect("mongodb+srv://mongoadmin:mongoadmin@cluster0.exxx1cv.mongodb.net/sathvik?retryWrites=true&w=majority")

mongoose.connection.once("open" ,()=>{
  console.log("connected!");
  startserver()
}).on("error",()=>{
  console.log("database error");
})

function startserver(){

  
  var app = express()
  
  
  
  
  app.use ( express.static(path.join(__dirname , "static")) )
  
  app.use(bodyparser.urlencoded({"extended" : false}))
  app.use(bodyparser.json())
  
  app.listen(542)
  
  app.get("/home",(req,resp)=>{
      resp.sendFile("index.html" ,{root : "./public"})
  })
  app.get("/postidea",(req,resp)=>{
    resp.sendFile("postidea.html" , {root : "./public"} )
  })
  
  app.get("/browse",(req,resp)=>{
    resp.sendFile("browse.html" , {root : "./public"} )
  })
  
  app.post("uploadidea",async (req,resp)=>{
  console.log(req.body);
  let data = req.body


  let domains = data.domains.split(" ")

domains.forEach(async element => {
  
  await mongoose.connection.collection("ideas").insertOne({ "domain" : element , "idea" : data.idea } )
});

  
  // resp.send("your idea is submitted !")
  // resp.redirect("home")
  })
  
  app.use((req,resp)=>{
  // resp.redirect("home")
  console.log("last use accessed");
  })
}

module.exports.handler = serverless(app)