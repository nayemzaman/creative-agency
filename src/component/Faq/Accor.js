import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accor = () => {
  return (
    <div>
      <Accordion sx={{boxShadow:'none',
     border:'1px solid #E5EAF4',
     p:2,
    }}>
        <AccordionSummary sx={{ '& p': {
                  color: 'primary.main',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
               },
               '& .Mui-expanded': {
                '& p': {
                   color: 'primary.green',
                },
             },}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
                  color: '#5A7184',
               }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accor;
