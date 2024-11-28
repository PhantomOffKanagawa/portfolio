import { Box, Heading, Text, Link, SimpleGrid, Image } from "@chakra-ui/react";
import { Project } from "@utils/homepage-values";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <Box my={2}>
    <Heading as="h2" size={["lg", "xl"]} mb={4}>
      Projects
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} gap={[4, 6, 10]} minHeight={["auto", "750px"]}>
      {projects.map((project) => (
        <Box
          key={project.title}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          height={["auto", "100%"]}
          display="flex"
          flexDirection="column"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width="100%"
              aspectRatio={"5/3"}
              fit="cover"
              flexShrink={1}
            />
          ) : 
            <Box 
              width="100%" 
              aspectRatio="5/3" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              bg="colorPalette.200/40"
              flexShrink={1}
            >
              {project.icon}
            </Box>
          }
            <Box p={[2, 4]} flex-grow={1} display="flex" flexDirection="column" height="100%">
            <Heading as="h3" size={["sm", "md"]} mb={2} lineClamp={2}>
              {project.title}
            </Heading>
            <Text mb={3} lineClamp={3} fontSize={["sm", "md"]}>
              {project.description}
            </Text>
            <Box 
              display="flex" 
              justifyContent="space-between" 
              alignItems="center"
              flexWrap="wrap"
              gap={0}
              mt="auto"
            >
              {project.link && (
              <Link href={project.link} color="colorPalette.500" fontSize={["sm", "md"]}>
                View Demo
              </Link>
              )}
              {project.repo && (
              <Link href={project.repo} color="colorPalette.500" fontSize={["sm", "md"]}>
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
