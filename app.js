const express = require("express")
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
var exec = require('child_process').exec;
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static("Public"));
app.listen(3000,function(){
  console.log("Server is running on Port 3000")
})

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
  console.log(req.body.hashkey1);
  var child = exec('java -jar ./hello.jar',function(error,stdout,stderr){
    console.log(stdout);
    if(error!= null){
      cosole.console.log(error);
    }
    else{
      res.send(stdout);
    }
  });
  module.exports=child;

})
