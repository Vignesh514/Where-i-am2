
require('dotenv').config()
const express = require('express')
const app= express();
//const port = process.env.PORT

//app.get('/second',function(req,res){
//  res.send("Hello welcome to second Page")
//})

app.listen(3000,()=>{
  console.log("listening at 3000")
})
app.use(express.static('public'));

