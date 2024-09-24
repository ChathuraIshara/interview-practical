import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Postcard = ({ open, setOpen, onEdit, onDelete,deleteConfirm,setDeleteCofirm }) => {

  const handleOpen = () => {
    setOpen(true);
  }

  const handleDelete=()=>
  {
   
    setDeleteCofirm(true);
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 400, borderRadius: 2, padding: '16px',position:'relative' }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: 'salmon', fontWeight: 'bold' }}>
          Title
        </Typography>

        <Typography variant="body2" sx={{ marginY: '12px' }}>
          new project of mine fdsfa f dsaf sfd fkldsf lfds
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption">
            5 Comments
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
    </Card>
  );
};

export default Postcard;
