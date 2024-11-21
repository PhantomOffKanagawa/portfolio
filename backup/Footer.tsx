import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => (
  <Box sx={{ mt: 4, py: 2, textAlign: "center", bgcolor: "background.paper" }}>
    <Typography>&copy; {new Date().getFullYear()} Harrison Surma</Typography>
  </Box>
);

export default Footer;
