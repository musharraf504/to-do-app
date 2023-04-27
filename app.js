const express = require("express");
const date = require(__dirname+"/date.js");
// const request = require("request");

const app = express();
var tasks = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  // console.log(date.getDate());

  let day = date.getDate();
  res.render("list",{kindOfDay: day, newTasks: tasks});

});

app.post("/",function(req, res){
  var task = req.body.task;
  tasks.push(task);
  console.log(tasks);
  res.redirect("/");
});


app.listen(process.env.PORT || 3000, function(){
  console.log("server running on PORT 3000");
});
