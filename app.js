const express = require("express");
// const request = require("request");

const app = express();
var tasks = [];

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
    // year: 'numeric'
  }

  day = today.toLocaleDateString("en-US", options);

  res.render("list",{kindOfDay: day, newTasks: tasks});
  // res.render("list",{task: task});

});

app.post("/",function(req, res){
  var task = req.body.task;
  tasks.push(task);
  console.log(tasks);
  res.redirect("/");
});


app.listen(3000, function(){
  console.log("server running on PORT 3000");
});
