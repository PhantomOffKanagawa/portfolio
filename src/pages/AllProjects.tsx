import React, { useMemo } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { ProjectsGrid } from "@components/Projects"; // Import the grid component
import {
  projects as allProjects,
  githubProfileUrl,
} from "@utils/homepage-values"; // Import all projects
import { Tag } from "@components/ui/tag";
import FloatingGithubLink from "@components/ui/floating-icon";

const AllProjects: React.FC = () => {
  // Extract all unique categories from projects
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    allProjects.forEach((project) => {
      project.categories?.forEach((category) => {
        categories.add(category);
      });
    });
    return Array.from(categories).sort();
  }, []);

  return (
    <Box minHeight="100vh" p={4}>
      <Header />
      <VStack align="stretch" maxW="800px" mx="auto" gap={8} py={8}>
        <VStack gap={4}>
          <Heading as="h1" size="xl" textAlign="center">
            All Projects
          </Heading>

          {allCategories.length > 0 && (
            <VStack gap={2}>
              <Text fontSize="sm" color="gray.500">
                Filter by category:
              </Text>{" "}
              <Flex wrap="wrap" justify="center" gap={2}>
                {allCategories.map((category) => (
                  <RouterLink
                    key={category}
                    to={`/category/${encodeURI(category)}`}
                  >
                    <Tag colorScheme="teal" size="md" borderRadius="full">
                      {category}
                    </Tag>
                  </RouterLink>
                ))}
              </Flex>
            </VStack>
          )}
        </VStack>
        <ProjectsGrid projects={allProjects} />{" "}
        {/* Display all projects using the grid */}
      </VStack>
      <Footer />

      {/* Floating GitHub Link */}
      <FloatingGithubLink link={githubProfileUrl} text="Profile" />
    </Box>
  );
};

export default AllProjects;
