import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({title,colored},{theme}) => {
    return (
        <Typography sx={{fontSize:'34px',
        fontWeight:'bold',
        textAlign:'center'}}>
            {title} {''} {colored && <span style={{color:'#7AB259'}}>{colored}</span>}
        </Typography>
    );
};

export default SectionTitle;