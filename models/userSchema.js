const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rights: {
    type: String,
    required: true,
  },
});

const userData = mongoose.model('userData', userSchema, "userDatas");

module.exports = userData;
