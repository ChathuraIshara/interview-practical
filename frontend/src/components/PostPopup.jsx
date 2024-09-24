import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";

import axios from "axios";


const PostPopup = ({open,setOpen,comments,postId,fetchCommnet,titleColor,data}) => {

  const [commentvalue, setcommentvalue] = useState("")
  

 

  const handleClose = () => {
    setOpen(false);
  };
  const handlePublish = async () => {
    console.log("handle")
    try {
      const Comment = {
        Postid: postId,
        Comment: commentvalue,
        
      };
      await axios.post('http://localhost:3001/api/comment/create', Comment);
      fetchCommnet()
      setcommentvalue("");
      
    } catch (err) {
      console.log(err) 
    }
  };


  return (
    <div>

      {/* dialog of post popup*/}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{data.Title}</Typography>
            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            X
          </IconButton>
          </Box>
        </DialogTitle>

        {/* Content of the post*/}
        <DialogContent>
          <Card variant="outlined">
            <CardContent>
              {/* Post Title */}
              <Typography variant="h6" sx={{ color: `${titleColor}`, fontWeight: 'bold' }}>
                {data.Title}
              </Typography>
              {/* Post Content */}
              <Typography variant="body2" sx={{ marginY: '12px' }}>
               {data.Description}
              </Typography>
              {/*  Count */}
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="caption">{comments.length}</Typography>
              </Box>
            </CardContent>
          </Card>

         {/*comments*/}
         
          <Box my={2}>
            <Typography variant="p"  sx={{fontWeight:"600"}}>Comments</Typography>
            {comments.length == 0 ? (
              <Box sx={{padding:"1em"}}>
                <Typography variant="p">No Comments Yet</Typography>
              </Box>
            ):(
              comments.map(comment=>(
                <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                value={comment.Comment} 
                disabled
              />
 
             ))
            )
              
            }
           
          </Box>
          <Box sx={{marginBottom:"10px"}}>
            <Typography variant="p" sx={{fontWeight:"600"}} >Add New Comments</Typography>

          </Box>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="New Comment Text"
            sx={{ marginBottom: 2 }}
            value={commentvalue}
            onChange={(e)=>{setcommentvalue(e.target.value)}}
          />

          
          <Button variant="contained" fullWidth sx={{ backgroundColor: 'black', color: 'white' }}
          onClick={handlePublish}>
            Comment
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostPopup;
