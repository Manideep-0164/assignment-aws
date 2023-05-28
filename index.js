const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Server-1");
});

app.listen(1230, ()=>{
    console.log("Sever is running on the port: 1230")
});