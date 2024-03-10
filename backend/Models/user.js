const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userschema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  posts: [
    {
      type: ObjectId,
      ref: "Post",
    },
  ],
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("User", userschema);
