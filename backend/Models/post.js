const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const postschema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        comment: { type: String },
        postedby: { type: ObjectId, ref: "User" },
      },
    ],
    postedby: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postschema);
