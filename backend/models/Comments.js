const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  Postid: String,
  Comment: String,
  
});
const Comment = mongoose.model("comment", CommentSchema);
module.exports = Comment;
