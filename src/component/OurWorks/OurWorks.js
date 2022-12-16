import { Box, IconButton } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Grid } from "@mui/material";

import SectionTitle from "../SectionTitle/SectionTitle";
import CreativeCard from "./CreativeCard";
import { cardData } from "./CardData";

const OurWorks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    
    setValue(newValue);
  };
  console.log(value);
  return (
    <Box sx={{ my: 5, mb: 10 }}>
      {/* heading section */}
      <Box
        sx={{
          display: {md:"flex"},

          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
        }}
      >
        <SectionTitle
          title="Here are some of"
          colored="our works"
          sx={{
            textAlign: "left",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection:{xs:'column',md:'row'},
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            mb:'40px'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
                
              },
              '& .Mui-selected': {
                color: 'primary.green',
                fontWeight: 'bold',
             },
             '& .MuiButtonBase-root': {
                textTransform: 'capitalize',
                
             },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="App Development" />
          </Tabs>
          <Box>
            <IconButton sx={{ border: theme => `1px solid ${value === 0 ? '#959EAD' : theme.palette.primary.main}`,mr:2, color:'primary.main'}} onClick={()=>setValue(value-1)} disabled={value===0}>
                <ArrowBackIcon></ArrowBackIcon>
            </IconButton>
            <IconButton sx={{
                transform:'rotate(180deg)', border: theme => `1px solid ${value === 2 ? '#959EAD' : theme.palette.primary.main}`, color:'primary.main'
            }} onClick={()=>setValue(value+1)} disabled={value===2}>
                <ArrowBackIcon></ArrowBackIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/*  card section */}
      <Grid container spacing={3} justifyContent={'center'}>
        {cardData[value].map(image=>(
          <Grid item><CreativeCard image={image}></CreativeCard></Grid>
        ))}

      </Grid>
      
    </Box>
  );
};

export default OurWorks;
