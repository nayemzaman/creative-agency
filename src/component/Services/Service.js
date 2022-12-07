import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
 ];
const Service = () => {
    return (
       <Box>
        <SectionTitle title = "Provide Awsome" colored='services'></SectionTitle>
       </Box>
    );
};

export default Service;