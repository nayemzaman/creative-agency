import React from "react";
import { Box, Grid } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";
import SingleService from "./SingleService";
const serviceImages = [
  "https://i.ibb.co/HNhykGp/iphone-1.png",
  "https://i.ibb.co/r0gHkvM/color-palette-1.png",
  "https://i.ibb.co/CvQwzKC/coding-1.png",
];
const Service = () => {
  return (
    <Box>
      <SectionTitle title="Provide Awsome" colored="services"></SectionTitle>

      <Grid container spacing={2} sx={{marginTop: '20px'}}>
        {serviceImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SingleService image={image} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Service;
