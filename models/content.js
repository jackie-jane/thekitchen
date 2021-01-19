const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    text: { type: String, required: true },
    image: { type: String, required: true },
    number: {type: Number, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("content", Content);
