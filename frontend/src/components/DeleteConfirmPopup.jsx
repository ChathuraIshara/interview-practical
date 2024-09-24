import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import axios from 'axios';

const DeleteConfirmPopup = ({ deleteConfirm, setDeleteCofirm,postid,fetchPosts}) => {

   
  const handleClose = () => {
    setDeleteCofirm(false);
  };

  const deletePost = async (postId) => {
    try {
      console.log("fff")
      const response = await axios.delete(`http://localhost:3001/api/posts/${postid}`);
      setDeleteCofirm(false);
      fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <Dialog open={deleteConfirm} onClose={handleClose}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this post?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={deletePost} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmPopup;
