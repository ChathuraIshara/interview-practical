import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, IconButton, Box } from '@mui/material';

export default function EditPostmodal({ openCreatePost, setCreateOpenPost }) {
  const [titleColor, setTitleColor] = useState('blue'); 
  const handleClose = () => {
    setCreateOpenPost(false); 
  };

  const handleColorChange = (color) => {
    setTitleColor(color);
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
            />
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
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
            <Button variant="contained" color="primary">
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
