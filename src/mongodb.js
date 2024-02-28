const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URI)
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