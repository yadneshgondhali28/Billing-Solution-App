const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/userdb")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log("failed to connect");
    })

const logInSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model('userinfo', logInSchema);

module.exports = collection;