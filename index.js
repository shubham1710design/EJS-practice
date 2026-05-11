const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.listen(port,()=>{
console.log(`app is listening on port ${port}`);
});

app.get("/rolldice",(req,res) =>{
    let radnum = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{radnum});
});

app.get("/ig/:username",(req,res) =>{
 const instdata = require("./data.json");
  let {username} = req.params;
  const data = instdata[username];
  res.render("instagram.ejs",{data});
});

app.get("/",(req,res) => {
res.render("home.ejs")
});

app.get("/hello",(req,res) => {
res.send("hello");
});



