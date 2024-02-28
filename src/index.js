const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection = require("./mongodb");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var bodyParser = require("body-parser"); // ravi was here, added body parser

const templatePath = path.join(__dirname, "../views");
app.use(bodyParser.json()); // edited by ravi
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", 'hbs');
app.set('views', templatePath);
require('dotenv').config();
app.use(express.static('public'));


// code by raviraj4
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

  if (email.trim() === '' || message.trim() === '') {
    console.log("Failed! Field can't be empty")
    res.redirect('error_page.html')
  } else {
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
  }
});
//  ends here  

// app.get("/", (req, res) => {

//     res.redirect("index.html");
//   })
app.get('/contacts', (req, res) => {
  res.render('contacts')
})

app.get('/', (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  res.render('home');
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/signup', (req, res) => {
  res.render('signup');
})

app.post('/signup', async (req, res) => {
  const password = req.body.password
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  const data = {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  }

  await collection.insertMany([data]);

  res.render('invoice');
})

app.post('/login', async (req, res) => {

  try {
    const check = await collection.findOne({ email: req.body.email });

    const isMatch = bcrypt.compareSync(req.body.password, check.password);

    if (isMatch) {
      res.render('invoice');
    } else {
      res.send("wrong password");
    }
  } catch {
    res.send("wrong details");
  }
})

app.listen(3080, () => {
  console.log("App is running on port 3080");
})
