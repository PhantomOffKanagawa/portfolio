import React from "react";
import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";

interface ExperienceProps {
  experiences: {
    role: string;
    company: string;
    description: string;
    duration: string;
  }[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <Box my={8}>
    <Heading as="h2" mb={4}>Experience</Heading>
    <VStack align="stretch" gap={3}>
      {experiences.map((exp) => (
        <Box key={exp.role} p={4}>
        <HStack justify="space-between">
          <Text fontWeight="bold">{exp.role} at {exp.company}</Text>
            <Text opacity={0.6}>({exp.duration})</Text>
          </HStack>
            <Text opacity={0.6}>
            {exp.description} 
            </Text>
        </Box>
      ))}
    </VStack>
  </Box>
);

export default Experience;
