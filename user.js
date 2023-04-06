const express = require('express');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();


const mongoose = require("mongoose");


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
const fs = require('fs');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    /*password: {
        type: String,
        required: true
    },*/
    avatar: {
        type: Buffer, //casted to MongoDB's BSON type: binData
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;


const userData = {
    username: 'Artek',
    avatar: fs.readFileSync(`image-save/passport.jpeg`)
}
const user = new User(userData);

user.save()
    .then(() => console.log('User Saved Successfully!'))
    .then(() => mongoose.connection.close(() => console.log('Connection Closed successfully!')))
    .catch((err) => console.log(`Error in Saving User: ${err}`));