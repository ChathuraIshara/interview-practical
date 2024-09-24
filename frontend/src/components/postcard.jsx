import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Postcard = ({open,setOpen}) => {

    const handleOpen=()=>
    {
        setOpen(true);
    }


  return (
    <Card onClick={handleOpen} variant="outlined" sx={{ maxWidth: 400, borderRadius: 2, padding: '16px' }}>
      <CardContent>
       
        <Typography variant="h6" sx={{ color: 'salmon', fontWeight: 'bold' }}>
          Title
        </Typography>
        
      
        <Typography variant="body2" sx={{ marginY: '12px' }}>
          new project of mine fdsfa f dsaf sfd  fkldsf lfds
        </Typography>
        
      
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="caption">
            5 Comments
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Postcard;
