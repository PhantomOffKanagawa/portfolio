import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const experiences = [
  {
    role: "Host",
    company: "Red Robin",
    description: "Provided excellent customer service and managed to-go orders.",
    duration: "May 2021 - August 2021",
  },
  {
    role: "Software Lead",
    company: "SURF Underwater Robotics",
    description: "Led software group and worked on motor communication/image processing.",
    duration: "2023-2024",
  },
];

const Experience: React.FC = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" gutterBottom>Experience</Typography>
    <List>
      {experiences.map((exp) => (
        <ListItem key={exp.role}>
          <ListItemText
            primary={`${exp.role} at ${exp.company}`}
            secondary={`${exp.description} (${exp.duration})`}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Experience;
