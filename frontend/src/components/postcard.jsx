import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PostPopup from './PostPopup';

const Postcard = ({ onEdit, onDelete,deleteConfirm,setDeleteCofirm,data }) => {
  const [Comment, setComment] = useState([])
  const [open,setOpen]=useState(false);


  const handleOpen = () => {
    setOpen(true);
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
            <Button size="small" color="primary" onClick={onEdit} sx={{ marginRight: 1 }}>
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
    </Card>
    
  );
};

export default Postcard;
