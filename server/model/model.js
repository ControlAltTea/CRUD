const mongoose = require("mongoose");
const { update_user } = require("../services/render");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model("userdb", schema);
module.exports = Userdb;
