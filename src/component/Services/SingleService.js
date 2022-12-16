import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const SingleService = ({image}) => {
    return (
        <Card sx={{ maxWidth: 345,mx:'auto',boxShadow:'none', '&:hover':{
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)'
        } }}>
        <CardMedia
          component="img"
          height="140"
          sx={{
            width:'auto',
            mx:'auto'
          }}
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{textAlign:'center'}}>
          <Typography gutterBottom variant="h5" sx={{fontWeight:'bold'}} component="div">
          Web & Mobile design
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We craft stunning and amazing web UI, using a well drrafted UX to
               fit your product.
          </Typography>
        </CardContent>
        
      </Card>
    );
};

export default SingleService;