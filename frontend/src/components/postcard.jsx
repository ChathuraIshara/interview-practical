import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostPopup from './PostPopup';
import EditPostModal from './EditPostmodal';
import DeleteConfirmPopup from './DeleteConfirmPopup';


const Postcard = ({ onEdit, onDelete,data,
  fetchPosts }) => {
  const [Comment, setComment] = useState([])
  const [open,setOpen]=useState(false);  //state for open the post popup
  const [editOpen,setEditOpen]=useState(false); //state for open the edit popup

  const [deleteConfirm,setDeleteCofirm]=useState(false);  //state for confirming the delet popup



  const handleOpen = () => {
    setOpen(true);
  }

  const handleEdit = () => {
    setEditOpen(true);
  }

  const handleDelete=()=>
  {
   
    setDeleteCofirm(true);
  }
  const fetchCommnet = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/posts/${data._id}`);
      setComment(response.data.comments); 
      console.log(`-------com---${response.data.comments}`);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log("first")
    

    fetchCommnet()
  }, []); 



  return (
    <Card variant="outlined" sx={{ maxWidth: 400, borderRadius: 2, padding: '16px',position:'relative' ,width:'300px'}}>
      <CardContent>
        <Typography variant="h6" sx={{ color: `${data.Color}`, fontWeight: 'bold' }}>
          {data.Title}
        </Typography>

        <Typography variant="body2" sx={{ marginY: '12px' }}>
         {data.Description}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">
           {Comment.length} comments
          </Typography>
          <Box>
            <Button size="small" color="primary" onClick={handleEdit} sx={{ marginRight: 1 }}>
              Edit
            </Button>
            <Button size="small" color="secondary" onClick={handleOpen}>
              View
            </Button>
          </Box>
        </Box>
      </CardContent>
      <DeleteIcon sx={{color:'red',position:"absolute",top:"10px",right:"10px",cursor:"pointer"}} onClick={handleDelete}/>
      <PostPopup data={data}  open={open} setOpen={setOpen} comments={Comment} postId={data._id} titleColor={data.Color} fetchCommnet={fetchCommnet}></PostPopup>
      <EditPostModal  fetchPosts={fetchPosts} data={data} editOpen={editOpen} setEditOpen={setEditOpen}></EditPostModal>
      <DeleteConfirmPopup fetchPosts={fetchPosts} postid={data._id} deleteConfirm={deleteConfirm} setDeleteCofirm={setDeleteCofirm}></DeleteConfirmPopup>
    </Card>
    
  );
};

export default Postcard;
