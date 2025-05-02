import {
  Box,
  Heading,
  Text,
  Link,
  SimpleGrid,
  Image,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import { Project } from "@utils/homepage-values";
import { Link as RouterLink } from "react-router-dom";
import { Tag } from "@components/ui/tag";

interface ProjectsProps {
  projects: Project[];
  showAllLink?: boolean;
}

const ProjectsGrid: React.FC<ProjectsProps> = ({ projects }) => (
  <SimpleGrid
    columns={[1, 2, 3]}
    gap={[4, 6, 10]}
    minHeight={["auto"]}
  >
    {projects.map((project) => (
      // <RouterLink
      //   key={project.key}
      //   to={`/project/${project.key}`}
      //   >
      <Box
        key={project.title}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height={["auto", "100%"]}
        display="flex"
        flexDirection="column"
        _hover={{ textDecoration: "none", shadow: "md" }} // Add hover effect
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
        ) : (
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
        )}
        <Box
          p={[2, 4]}
          flex-grow={1}
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Heading as="h3" size={["sm", "md"]} mb={2} lineClamp={2}>
            {project.title}
          </Heading>
          <Text mb={3} lineClamp={3} fontSize={["sm", "md"]}>
            {project.description}
          </Text>

          {/* Categories */}
          {project.categories && project.categories.length > 0 && (
            <Flex wrap="wrap" gap={2} mb={3}>
              {project.categories.map((category) => (
                <RouterLink
                  key={category}
                  to={`/category/${category}`}
                >
                  <Tag size="sm" colorScheme="teal" borderRadius="full">
                    {category}
                  </Tag>
                </RouterLink>
              ))}
            </Flex>
          )}

          {/* Trying out whole card links */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={0}
            mt="auto"
          >
            {project.link && (
              <Link
                href={project.link}
                color="colorPalette.500"
                fontSize={["sm", "md"]}
              >
                View Demo
              </Link>
            )}
            {project.repo && (
              <Link
                href={project.repo}
                color="colorPalette.500"
                fontSize={["sm", "md"]}
              >
                View Repo
              </Link>
            )}
          </Box>
        </Box>
      </Box>
      // </RouterLink>
    ))}
  </SimpleGrid>
);

const Projects: React.FC<ProjectsProps> = ({
  projects,
  showAllLink = false,
}) => (
  <Box my={2}>
    <Heading as="h2" size={["lg", "xl"]} mb={4}>
      Projects
    </Heading>
    <ProjectsGrid projects={projects} /> {/* Use the new Grid component */}
    {showAllLink && (
      <Center mt={6}>
        <RouterLink to={"/projects"}>
          <Button colorScheme="teal" variant="outline">
            See All Projects
          </Button>
        </RouterLink>
      </Center>
    )}
  </Box>
);

export default Projects;
export { ProjectsGrid };
