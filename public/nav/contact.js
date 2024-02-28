var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");

require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;
// lets check if connection to database is ok?
db.on("error", () => {
  console.log("error connecting to the database!");
});
db.once("open", () => {
  console.log("Connection to Database successful");
});

app.post("/contact", (req, res) => {
  var email = req.body.email;
  var message = req.body.message;

  if(email.trim()==='' || message.trim()===''){
    console.log("Failed! Field can't be empty")
    res.redirect('error_page.html')
  }else{
  console.log(`recieved data ${email} - ${message} `)
  var data = {
    "email": email,
    "message": message
  };
  db.collection("messages").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
      console.log("Response saved!");

  });
  return res.redirect('succes_page.html')
}});
// app.get("/", (request, response)=>{}) "/" means root path,


app.get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-Origin": "*",
    });
    res.redirect("index.html");
  })
  .listen(3090);


console.log("Listening at port https://localhost:3080");
