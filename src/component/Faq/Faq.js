import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Accor from './Accor';


const Faq = () => {
    return (
        <Box sx={{mb:8}}>
            <SectionTitle
          title="Frequently Asked"
          colored="Question"
          sx={{
            textAlign: "left",
            
          }}
        />
        <Box sx={{display:'flex',
      gap:1,
      flexDirection:'column',
      mt:5}}>
        <Accor title={'hello there'} description={'hi there'}></Accor>
        <Accor title={'hello there'} description={'hi there'}></Accor>
        <Accor title={'hello there'} description={'hi there'}></Accor>
        <Accor title={'hello there'} description={'hi there'}></Accor>
        <Accor title={'hello there'} description={'hi there'}></Accor>
        </Box>
        </Box>
    );
};

export default Faq;