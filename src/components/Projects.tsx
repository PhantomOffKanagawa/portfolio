import { Box, Heading, Text, Link, SimpleGrid, Image } from "@chakra-ui/react";
import { Project } from "@utils/homepage-values";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Box my={2}>
    <Heading as="h2" size="xl" mb={4}>
      Projects
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} gap={10} height="750px">
      {projects.map((project) => (
        <Box
          key={project.title}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          height="100%"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width="100%"
              aspectRatio={"5/3"}
              fit="cover"
            />
          ) : 
            <Box 
              width="100%" 
              aspectRatio="5/3" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              bg="colorPalette.200/40"
            >
              {project.icon}
            </Box>
            }
          <Box p={6} display="flex" flexDirection="column" height="100%">
            <Link color="MenuText" href={`/portfolio/project/${project.key}`} minHeight="3rem">
              <Heading as="h3" size="md" mb={2} lineClamp={2}>
                {project.title}
              </Heading>
            </Link>
            <Text mb={3} lineClamp={3}>
              {project.description}
            </Text>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              {project.link && (
              <Link href={project.link} color="colorPalette.500">
                View Demo
              </Link>
              )}
              {project.repo && (
              <Link href={project.repo} color="colorPalette.500">
                View Repo
              </Link>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default Projects;
