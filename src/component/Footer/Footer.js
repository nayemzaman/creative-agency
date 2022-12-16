import React from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        py: 8,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justiFyContent: "space-between",
            alignItems: "center",
            flexDirection:{xs:'column',sm:'row'}
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#fff",
              flex: 1,
              mb:2
            }}
          >
            Creative Agency
          </Typography>
          <Box
            sx={{
              display: "flex",
              justiFyContent: "space-between",
              alignItems: "center",
              flexDirection:{xs:'column',sm:'row'}
            }}
          >
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                mb:2
              }}
            >
              Creative Agency
            </Typography>
            <Button
              sx={{
                bgcolor: "primary.green",
                "&:hover": {
                  bgcolor: "primary.green",
                },
                ml: 2,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Divider
          sx={{
            mt: 3,
            bgcolor: "rgba(255,255,255,0.5)",
          }}
        />
      </Container>
    </Box>
  );
};

export default Footer;
