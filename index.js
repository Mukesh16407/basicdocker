const express = require('express');


const app = express();


app.get('/',(req,res)=>{
  res.json([{
    id:1,
    name:"anil",
    age:29
  },
  {
    id:2,
    name:"peter",
    age:30
  },
  {
    id:3,
    name:"bruce",
    age:40
  }])
});

app.listen(5000,()=>{
    console.log("App is Running on 5000 port")
})