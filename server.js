const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('D:\\AAD Project\\Billing-Solution-App\\public\\index.html');
});

app.get('/login', (req, res) => {
    res.sendFile('D:\\AAD Project\\Billing-Solution-App\\public\\login.html');
});

app.get('/signup', (req, res) => {
    res.sendFile('D:\\AAD Project\\Billing-Solution-App\\public\\signup.html');
    const userName = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
