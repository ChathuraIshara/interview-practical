const Comment = require("../models/Comments");

const addComment = async (req, res, next) => {
  try {
    const newComment = new Comment({
      Postid: req.body.Postid, 
      Comment: req.body.Comment, 
    });

    const savedComment = await newComment.save();
    res.json({ message: "Comment added successfully", savedComment });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getCommentsByPostId = async (req, res, next) => {
  try {
    const postId = req.params.postId; 
    const comments = await Comment.find({ Postid: postId });
    res.json({ comments });
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.addComment = addComment;
exports.getCommentsByPostId = getCommentsByPostId;
