import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton, Box } from '@mui/material';
import axios from 'axios';


export default function EditPostmodal({ editOpen, setEditOpen,data,fetchPosts }) {
  const [titleColor, setTitleColor] = useState('blue'); 

  const [Title, setTitle] = useState(data.Title)
  const [Description, setDescription] = useState(data.Description)
  


  const handleClose = () => {
    setEditOpen(false); 
  };

  const handleColorChange = (color) => {
    setTitleColor(color);
  };


  const handleUpdate = async () => {
    const postPayload = {
      Title: Title,
      Description: Description,
      Color: titleColor,
    };

try {
  
  await axios.put(`http://localhost:3001/api/posts/${data._id}`, {"data":postPayload});
  setEditOpen(false);
  fetchPosts();
} catch (error) {
  console.log("errro",error)
}
      // Update existing post


  }

  

  return (
    <div>
      <Dialog open={editOpen} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Edit Post
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
              value={Title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={Description}
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
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Edit
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
