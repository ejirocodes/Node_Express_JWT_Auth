const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: [6, 'password should be 6 characters or more'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
