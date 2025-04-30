import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { Card } from "@components/ui/card";

interface ExperienceProps {
  experiences: {
    role: string;
    company: string;
    description: string;
    duration: string;
    icon: React.ReactNode;
  }[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <Box my={8}>
    <Heading as="h2" mb={4}>Experience</Heading>
    <VStack align="stretch" gap={3}>
      {experiences.map((exp) => (
        // <Box key={exp.role} p={4}>
        // <HStack justify="space-between">
        //   <Text fontWeight="bold">{exp.role} at {exp.company}</Text>
        //     <Text opacity={0.6}>({exp.duration})</Text>
        //   </HStack>
        //     <Text opacity={0.6}>
        //     {exp.description} 
        //   </Text>
        // </Box>
          <Card key={exp.role} title={exp.role} subtitle={exp.company} description={exp.description} icon={exp.icon} />
      ))}
    </VStack>
  </Box>
);

export default Experience;
