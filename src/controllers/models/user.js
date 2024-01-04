// user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    contactNumber: String,
    profilePic: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
