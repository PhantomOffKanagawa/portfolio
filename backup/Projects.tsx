import React from "react";
import { Box, Typography, Card, CardContent, Link } from "@mui/material";

const projects = [
  {
    title: "Halloween Laser Tag",
    description: "Hardware and software system for registering laser hits with IoT APIs.",
    link: "https://github.com/PhantomOffKanagawa",
  },
  {
    title: "Personal Web Apps",
    description: "Shuttle Timing, Availability Planning, & Linear Meal Plan Generation.",
    link: "https://github.com/PhantomOffKanagawa",
  },
  {
    title: "Disney FastPass Ornament",
    description: "Arduino-powered NFC reader with animated RGB ring light.",
    link: "https://github.com/PhantomOffKanagawa",
  },
];

const Projects: React.FC = () => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h4" gutterBottom>Projects</Typography>
    {projects.map((project) => (
      <Card key={project.title} sx={{ my: 2 }}>
        <CardContent>
          <Typography variant="h5">{project.title}</Typography>
          <Typography>{project.description}</Typography>
          <Link href={project.link} target="_blank" rel="noopener">
            View Project
          </Link>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default Projects;
