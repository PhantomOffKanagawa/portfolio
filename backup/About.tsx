import React from "react";
import { Box, Typography } from "@mui/material";

const About: React.FC = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" gutterBottom>About Me</Typography>
    <Typography>
      I'm Harrison Surma, a Computer Science major with a passion for software development,
      problem-solving, and creating impactful projects. I thrive in collaborative and
      innovative environments.
    </Typography>
  </Box>
);

export default About;
