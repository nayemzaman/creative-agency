import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Avatar } from "@mui/material";
const SingleReview = () => {
  return (
    <Card sx={{ maxWidth: 345,border:'1px solid #7AB259',marginTop:'30px'}}>
      <CardContent>
        <Box sx={{
            display:'flex',
            flexDirection:{md:'row',xs:'column'},
            alignItems:'center', 
            
          }}>
          <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Box sx={{
            marginLeft:'10px',
          }}>
            <Typography
              gutterBottom
              variant="h6"
              margin={0}
              padding={0}
              
              color="text.secondary"
            >
              Web Design
            </Typography>
            <Typography
              variant="body2"
              color="primary.main"
              fontWeight={600}
              
            >
              Web design research
            </Typography>
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary" marginBottom={0} marginTop={'10px'}>
          Lizards are a widespread group of squamate reptiles
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleReview;
