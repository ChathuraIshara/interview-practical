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


const PostPopup = ({open,setOpen}) => {
  

 

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      {/* dialog of post popup*/}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Title of the post</Typography>
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
              <Typography variant="h6" sx={{ color: 'blue', fontWeight: 'bold' }}>
                Title
              </Typography>
              {/* Post Content */}
              <Typography variant="body2" sx={{ marginY: '12px' }}>
               this is about my new project
              </Typography>
              {/*  Count */}
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="caption">3 Comments</Typography>
              </Box>
            </CardContent>
          </Card>

         {/*comments*/}
          <Box my={2}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              value="beautiful" 
              disabled
            />
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              value="good coneten"
              disabled
            />
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              value="nice work"
              disabled
            />
          </Box>

          {/* New Comment Input */}
          <TextField
            variant="outlined"
            fullWidth
            placeholder="New Comment Text"
            sx={{ marginBottom: 2 }}
          />

          
          <Button variant="contained" fullWidth sx={{ backgroundColor: 'black', color: 'white' }}>
            Comment
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostPopup;
