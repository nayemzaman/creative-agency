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
        <Accor></Accor>
        </Box>
    );
};

export default Faq;