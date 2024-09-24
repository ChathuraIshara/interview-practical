import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton, Box } from '@mui/material';
import axios from 'axios';

export default function CreatePostPopup({ openCreatePost, setCreateOpenPost ,fetchPosts}) {

  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Color, setColor] = useState("Black")
  const handleClose = () => {
    setCreateOpenPost(false); 
  };

  const handleColorChange = (color) => {
    setColor(color);

  };

  const handlePublish = async () => {
    console.log("handle")
    try {
      const newPost = {
        Title: Title,
        Description: Description,
        Color: Color,
      };
      console.log(newPost)
     
      await axios.post('http://localhost:3001/api/create', {"newPost":newPost});
     
      setTitle("");
      setDescription("");
      setColor("Black");
      fetchPosts();
     
      handleClose();
    } catch (err) {
      setError(err.message); 
    }
  };


  return (
    <div>
      <Dialog open={openCreatePost} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Create Post
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
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Title"
              variant="outlined"
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
            />
            <Box>
              <p>Title Color</p>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton
                  onClick={() => handleColorChange('blue')}
                  sx={{ backgroundColor: 'blue', borderRadius: '50%' }}
                />
                <IconButton
                  onClick={() => handleColorChange('yellow')}
                  sx={{ backgroundColor: 'yellow', borderRadius: '50%' }}
                />
                <IconButton
                  onClick={() => handleColorChange('red')}
                  sx={{ backgroundColor: 'red', borderRadius: '50%' }}
                />
              </Box>
            </Box>
            <Button variant="contained" color="primary" onClick={handlePublish}>
              Publish
            </Button>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={handleClose} 
              sx={{ marginTop: 2 }} 
            >
              Close
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
