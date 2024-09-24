import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Postcard from "../components/postcard";
import PostPopup from "../components/PostPopup";
import CreatePostPopup from "../components/CreatePost";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";
import axios from "axios";


function Home() {

   // const [open,setOpen]=useState(false);  //state for open post details popup
    const [openCreatePost,setCreateOpenPost]=useState(false);  //state for open create post popup
    const [deleteConfirm,setDeleteCofirm]=useState(false);  //state for confirming the delet popup

    const [posts,setPosts]=useState([]);

    const handleCreatePost = () => {
        setCreateOpenPost(true);
      };
      const fetchPosts = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/posts');
          setPosts(response.data.posts); 
          console.log(response.data.posts);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
       
    
        fetchPosts();
      }, []); 



  return (
    <div>
      <AppBar position="static" color="white" sx={{ marginBottom: "16px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Button
        variant="contained"
        onClick={handleCreatePost}
        sx={{ backgroundColor: "black", color: "white", width: "250px" }}
      >
        Create New Post
      </Button>
      <div>
      <Box display="flex" flexDirection="row" alignItems="center" my={3} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
        {/* <Postcard deleteConfirm={deleteConfirm} setDeleteCofirm={setDeleteCofirm} open={open} setOpen={setOpen}/> */}
        {posts.map(post=>(
           <Postcard data={post} deleteConfirm={deleteConfirm} setDeleteCofirm={setDeleteCofirm} />
        

      ))}
       
      </Box>
    
      <CreatePostPopup openCreatePost={openCreatePost} setCreateOpenPost={setCreateOpenPost} fetchPosts={fetchPosts}></CreatePostPopup>
      <DeleteConfirmPopup deleteConfirm={deleteConfirm} setDeleteCofirm={setDeleteCofirm}></DeleteConfirmPopup>
      </div>  
    </div>
  );
}

export default Home;
