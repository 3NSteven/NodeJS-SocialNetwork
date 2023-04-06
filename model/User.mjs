import mongoose from 'mongoose';
const fs = require('fs');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: Buffer, //casted to MongoDB's BSON type: binData
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;


const userData = {
    username: 'Artek',
    avatar: fs.readFileSync(`passport.jpeg`)
}
const user = new User(userData);

user.save()
    .then(() => console.log('User Saved Successfully!'))
    .then(() => mongoose.connection.close(() => console.log('Connection Closed successfully!')))
    .catch((err) => console.log(`Error in Saving User: ${err}`));