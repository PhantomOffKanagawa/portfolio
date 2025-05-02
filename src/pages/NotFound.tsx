import React from "react";
import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import Header from "@components/Header";
import { Link as RouterLink } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Box p={4} minHeight="100vh">
      <Header />

      <VStack align="stretch" maxW="800px" mx="auto" gap={8}>
        {/* Header */}
        <Box as="header" textAlign="center" my={16}>
          <Heading as="h1" size="2xl">
            404 - Page Not Found
          </Heading>
          <Text fontSize="lg" mt={4}>
            The page you're looking for doesn't exist or has been moved.
          </Text>
        </Box>

        {/* Link Home */}
        <VStack gap={4} align="center">
          <RouterLink to="/">
            <Button variant="outline" size="sm">
              Go to Homepage
            </Button>
          </RouterLink>
        </VStack>
      </VStack>
    </Box>
  );
};

export default NotFound;
