import { Box, Button, Link, Heading, Text, VStack, HStack, Image, Center } from "@chakra-ui/react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useParams, Link as RouterLink } from 'react-router-dom';
import { projects } from '@utils/homepage-values';
import { ExternalLink, Router } from "lucide-react";
import React from "react";

function Project() {
  const { projectName } = useParams<{ projectName: string }>();

  // Find the project based on the key from the URL parameter
  const project = projects.find((p) => p.key === projectName);

  return (
    <Box
      minHeight={"100vh"}
      p={4}
      display="flex"
      flexDirection="column"
    >
      <Header />

      <VStack
        flexGrow={1}
        align="stretch"
        maxW="800px"
        mx="auto"
        p={8}
        gap={6}
      >
        {project ? (
          <VStack align="start" gap={4}>
            {/* Project Header */}
            <HStack gap={4} align="center">
              {project.icon && (
                <Box boxSize="60px" flexShrink={0}> {/* Ensure icon doesn't shrink */}
                  {React.cloneElement(project.icon, { size: "100%" })}
                </Box>
              )}
              <Heading as="h1" size="xl">
                {project.title}
              </Heading>
            </HStack>

            {/* Project Image */}
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                borderRadius="md"
                objectFit="cover"
                w="100%"
                maxH="400px" // Limit image height
              />
            )}

            {/* Description */}
            <Text fontSize="lg">
              {project.description}
            </Text>

            {/* Links */}
            <HStack gap={4} wrap="wrap">
              {project.link && (
                <Link href={project.link}>
                  <Button
                    colorScheme="teal"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Link href={project.link}>
                    <ExternalLink size={16} />
                    View Project / Demo
                    </Link>
                  </Button>
                </Link>
              )}
              {project.repo && (
                  <Button
                    colorScheme="gray"
                    variant="outline"
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    <Link href={project.repo}>
                      <ExternalLink size={16} />
                      View Repository
                    </Link>
                  </Button>
              )}
            </HStack>
          </VStack>
        ) : (
          // Project Not Found State
          <Center flexDirection="column" textAlign="center" h="50vh">
            <Heading as="h1" size="xl" mb={4}>
              Project Not Found
            </Heading>
            <Text mb={4}>
              The project you're looking for doesn't seem to exist.
            </Text>
              <Button colorScheme="teal" variant="outline">
            <RouterLink to="/">
                Back to Home
            </RouterLink>
              </Button>
          </Center>
        )}
      </VStack>

      <Footer />
    </Box>
  );
}

export default Project;