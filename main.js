
require('dotenv').config()
const express = require('express')
const app= express();

//app.use('/',function)

app.get('/iss',function(req,res){
  res.sendFile(__dirname+'/public/iss.html')
})

app.listen(3000,()=>{
  console.log("listening at 3000")
})
app.use(express.static('public'));

