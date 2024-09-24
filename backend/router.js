const express=require('express')
const router=express.Router();
const { getPosts, addPost, deletePost, updatePost } = require('./Controllers/PostController');
const { getCommentsByPostId, addComment } = require('./Controllers/CommentController');

router.get('/posts',getPosts);
router.post("/create", addPost);
router.get('/posts/:postId',getCommentsByPostId);
router.post("/comment/create", addComment);
router.delete('/posts/:postId',deletePost);
router.put('/posts/:postId',updatePost);

module.exports=router;