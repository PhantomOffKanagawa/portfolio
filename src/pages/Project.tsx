import { Box, Button, Link } from "@chakra-ui/react";
import Header from "@components/Header";
import { useTheme } from '../contexts/ThemeContext';
import { useParams } from 'react-router-dom'
import { projects } from '@utils/homepage-values';

function Project() {
  const { appearance } = useTheme();
  const { projectName } = useParams<{ projectName: string }>();

  const project = projects.find((project) => project.key === projectName);

  return (
    <Box
      bg={appearance === 'dark' ? 'gray.800' : 'white'}
      p={8}
      fontFamily="Arial, sans-serif"
      color={appearance === 'dark' ? 'white' : 'gray.700'}
      width="100%"
      minHeight={"100vh"}
    >
      <Header />

      {project ? (
        <Box>
          <Box display="flex" alignItems="center" mb={4}>
            {project.icon}
            <Box ml={4}>
              <Box as="h1" fontSize="2xl" fontWeight="bold">
                {project.title}
              </Box>
              <Box as="p" fontSize="md">
                {project.description}
              </Box>
            </Box>
          </Box>
          {project.link && (
            <Link href={project.link} target="_blank">
            <Button colorScheme="teal" mr={4}>
              View Project
            </Button>
            </Link>
          )}
          {project.repo && (
            <Link href={project.repo} target="_blank">
            <Button colorScheme="teal" mr={4}>
              View Repository
            </Button>
            </Link>
          )}
        </Box>
      ) : (
        <Box>
          <Box as="h1" fontSize="2xl" fontWeight="bold">
            Project not found
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Project;