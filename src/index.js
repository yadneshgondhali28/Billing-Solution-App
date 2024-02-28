const express = require('express');
const serverless = require('serverless-http');
const app = express();
const path = require('path');
const hbs = require('hbs');
const collection = require("./mongodb");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const templatePath = path.join(__dirname, "../templates");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", 'hbs');
app.set('views', templatePath);

app.use(express.static('public'));


app.get('/', (req, res) => {
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

// app.listen(3000, () => {
//     console.log("App is running on port 3000");
// })

module.exports.handler = serverless(app);