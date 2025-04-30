import React from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { ProjectsGrid } from '@components/Projects'; // Import the grid component
import { projects as allProjects } from '@utils/homepage-values'; // Import all projects

const AllProjects: React.FC = () => {

  return (
    <Box
      minHeight="100vh"
      p={4}
    >
      <Header />
      <VStack align="stretch" maxW="1200px" mx="auto" gap={8} py={8}>
        <Heading as="h1" size="xl" textAlign="center">
          All Projects
        </Heading>
        <ProjectsGrid projects={allProjects} /> {/* Display all projects using the grid */}
      </VStack>
      <Footer />
    </Box>
  );
};

export default AllProjects;