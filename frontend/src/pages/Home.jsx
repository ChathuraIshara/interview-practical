import React, { useState } from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Postcard from "../components/postcard";
import PostPopup from "../components/PostPopup";
import CreatePostPopup from "../components/CreatePost";
import DeleteConfirmPopup from "../components/DeleteConfirmPopup";

function Home() {

    const [open,setOpen]=useState(false);  //state for open post details popup
    const [openCreatePost,setCreateOpenPost]=useState(false);  //state for open create post popup
    const [deleteConfirm,setDeleteCofirm]=useState(false);  //state for confirming the delet popup

    const handleCreatePost = () => {
        setCreateOpenPost(true);
      };
  return (
    <div>
      <AppBar position="static" color="white" sx={{ margin: "16px" }}>
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
      <Box display="flex" flexDirection="column" alignItems="center" my={3} gap={2}>
        <Postcard deleteConfirm={deleteConfirm} setDeleteCofirm={setDeleteCofirm} open={open} setOpen={setOpen}/>
        <Postcard   open={open} setOpen={setOpen}/>
      </Box>
      <PostPopup  open={open} setOpen={setOpen}></PostPopup>
      <CreatePostPopup openCreatePost={openCreatePost} setCreateOpenPost={setCreateOpenPost}></CreatePostPopup>
      <DeleteConfirmPopup deleteConfirm={deleteConfirm} setDeleteCofirm={setDeleteCofirm}></DeleteConfirmPopup>
      </div>  
    </div>
  );
}

export default Home;
