const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  Title: String,
  Description: String,
  Color: String,
});
const Post = mongoose.model("Posts", PostSchema);
module.exports = Post;
