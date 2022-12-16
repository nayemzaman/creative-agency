import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import Faq from '../Faq/Faq';
import OurWorks from '../OurWorks/OurWorks';
import Service from '../Services/Service';
import Testimonial from '../Testimonial/Testimonial';
import Brand from './Brand';

const Home = () => {
    const BrandingWrapper = styled(Box)(({theme})=>({
        height: '70vh',
        backgroundColor: 'rgba(122, 178, 89, 0.15)',
        padding: theme.spacing(5),
        margin: '1rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }))
    return (
        <Box>
        <BrandingWrapper sx={{clipPath:{md:'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}}}>
         <Stack spacing={5}>
            <Typography
               sx={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
               }}
            >
               Let’s Grow Your Brand <br /> To The Next Level
            </Typography>
            <Typography>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
               </br> Purus
               commodo ipsum duis laoreet maecenas. Feugiat{' '}
            </Typography>
            <Button
               sx={{
                  width: '200px',
               }}
            >
               Hire Us
            </Button>
         </Stack>
         <Box
            sx={{
               width: '50%',
               // display: ['none', 'none', 'block'],
               display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
               },
            }}
         >
            <img
               src='https://i.ibb.co/sPXVMbC/Frame.png'
               alt='branding'
               style={{ width: '100%' }}
            />
         </Box>
        </BrandingWrapper>
        <Brand></Brand>
        <Service></Service>
        <OurWorks></OurWorks>
        <Testimonial></Testimonial>
        <Faq></Faq>
        </Box>
    );
};

export default Home;