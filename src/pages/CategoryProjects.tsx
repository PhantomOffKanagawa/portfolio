import React from 'react';
import { Box, VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { ProjectsGrid } from '@components/Projects';
import { projects as allProjects, githubProfileUrl } from '@utils/homepage-values';
import FloatingGithubLink from '@components/ui/floating-icon';

const CategoryProjects: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();

  // Convert category name back to actual name
  // e.g., "web-development" from url to "Web Development"
  const formattedCategoryName = categoryName
    ? categoryName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    : '';

  // Filter projects by the category
  const categoryProjects = allProjects.filter(project => 
    project.categories?.includes(formattedCategoryName || '')
  );

  return (
    <Box
      minHeight="100vh"
      p={4}
    >
      <Header />
      <VStack align="stretch" maxW="800px" mx="auto" gap={8} py={8}>
        <VStack align="center" gap={4}>
          <Heading as="h1" size="xl" textAlign="center">
            {formattedCategoryName} Projects
          </Heading>
          <Text color="gray.500">
            Projects in the {formattedCategoryName} category
          </Text>
          <RouterLink to="/projects">
            <Button variant="outline" size="sm">
              View All Projects
            </Button>
          </RouterLink>
        </VStack>

        {categoryProjects.length > 0 ? (
          <ProjectsGrid projects={categoryProjects} />
        ) : (
          <VStack py={12}>
            <Text>No projects found in this category.</Text>
          </VStack>
        )}
      </VStack>
      <Footer />

      {/* Floating GitHub Link */}
      <FloatingGithubLink link={githubProfileUrl} text="Profile" />
    </Box>
  );
};

export default CategoryProjects;
