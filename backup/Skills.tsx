import React from "react";
import { Box, Typography, Chip } from "@mui/material";

const skills = ["JavaScript", "React", "Node.js", "C", "Python", "SQL", "HTML", "CSS"];

const Skills: React.FC = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" gutterBottom>Skills</Typography>
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {skills.map((skill) => (
        <Chip key={skill} label={skill} color="primary" />
      ))}
    </Box>
  </Box>
);

export default Skills;
