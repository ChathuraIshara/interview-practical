const Post = require("../models/posts");

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({ posts });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const addPost = async (req, res, next) => {
  console.log(`----backreq${req.body.newPost}`)

  try {
    const newPost = new Post({
      Title: req.body.newPost.Title,
      Description: req.body.newPost.Description,
      Color: req.body.newPost.Color,
    });
    console.log(`------${newPost}-------back`)

    const savedPost = await newPost.save();
    res.json({ message: "Post created successfully", savedPost });
  } catch (error) {
    res.json({ message: error.message });
  }
};
const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const deletedPost = await Post.findOneAndDelete(postId);

    if (deletedPost) {
      res.json({ message: "Post deleted successfully", deletedPost });
    } else {
      res.json({ message: "Post not found" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
const updatePost = async (req, res, next) => {

  console.log(req.body);
  try {
    const postId = req.params.postId; 
    const updatedData = {
      Title: req.body.data.Title, 
      Description: req.body.data.Description, 
      Color: req.body.data.Color, 
    };

    console.log("updated dat",updatedData)

    const updatedPost = await Post.findByIdAndUpdate(postId, updatedData, {
      new: true,
    });

    console.log(updatedPost)

    if (updatedPost) {
      res.json({ message: "Post updated successfully", updatedPost });
    } else {
      res.json({ message: "Post not found" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

exports.updatePost = updatePost;

exports.deletePost = deletePost;

exports.getPosts = getPosts;
exports.addPost = addPost;
