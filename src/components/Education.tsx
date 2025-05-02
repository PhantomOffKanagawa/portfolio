import React from "react";
import { 
  Box, 
  Heading, 
  VStack, 
  HStack, 
  Text, 
  Flex,
  Badge,
  SimpleGrid
} from "@chakra-ui/react";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@components/ui/card";

interface EducationProps {
  education: {
    university: string;
    location: string;
    degree: string;
    graduation: string;
    gpa: string;
    minors: string[];
    certifications: string[];
    distinctions: string[];
    duration: string;
  };
  honors: {
    title: string;
    duration: string;
    description: string;
  }[];
}

const Education: React.FC<EducationProps> = ({ education, honors }) => {
  return (
    <Box as="section" py={4}>
      <Heading as="h2" size="lg" mb={4}>
        Education
      </Heading>

      {/* Main Education */}
      <Box 
        p={5} 
        borderWidth="1px" 
        borderRadius="md" 
        mb={4}
        transition="all 0.2s"
        _hover={{ 
          shadow: "md",
          borderColor: "colorPalette.500" 
        }}
      >
        <Flex justify="space-between" align={["flex-start", "center"]} direction={["column", "row"]} mb={2}>
          <HStack gap={2}>
            <GraduationCap />
            <Heading as="h3" size="md">
              {education.university}
            </Heading>
          </HStack>
          <Text fontSize="sm" opacity={0.7}>
            {education.duration}
          </Text>
        </Flex>

        <Text fontWeight="medium">
          {education.degree}
        </Text>

      <Flex justify="space-between" align={["flex-start", "center"]} direction={["column", "row"]} mb={2} flexWrap="wrap" gap={2}>
        <HStack mt={1} gap={2} wrap="wrap" maxW="100%">
          {education.minors.length > 0 && (
            <Text fontSize="sm">
              Minor in {education.minors.join(" and ")}
            </Text>
          )}
        </HStack>
        <HStack mt={1} gap={2} flexWrap="wrap" maxW={["100%", "60%"]} justify={["flex-start", "flex-end"]}>
          {education.certifications.map((cert, index) => (
            <Badge key={index} colorScheme="teal" variant="subtle" whiteSpace="normal" wordBreak="break-word" maxW="100%" px={2} py={1} fontSize="sm">
              {cert}
            </Badge>
          ))}
        </HStack>
      </Flex>
        
        {/* <Flex
          justify="space-between"
          align={["flex-start", "center"]}
          direction={["column", "row"]}
          mb={2}
          flexWrap="wrap"
          gap={2}
        >
          <HStack mt={1} gap={2} flexWrap="wrap" maxW="100%">
            {education.minors.length > 0 && (
              <Text fontSize="sm" whiteSpace="normal">
          Minor in {education.minors.join(" and ")}
              </Text>
            )}
          </HStack>
          <HStack
            mt={1}
            gap={2}
            flexWrap="wrap"
            maxW={["100%", "60%"]}
            justify={["flex-start", "flex-end"]}
          >
            {education.certifications.map((cert, index) => (
              <Badge
          key={index}
          colorScheme="teal"
          variant="subtle"
          whiteSpace="normal"
          wordBreak="break-word"
          maxW="100%"
          px={2}
          py={1}
          fontSize="sm"
              >
          {cert}
              </Badge>
            ))}
          </HStack>
        </Flex> */}

        <Box as="hr" my={3} borderColor="gray.200" borderWidth="1px" />
        <SimpleGrid columns={[1, 2]} gap={2}>
          <Box>
            <Text fontSize="sm" opacity={0.7}>Location</Text>
            <Text>{education.location}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" opacity={0.7}>Graduation</Text>
            <Text>{education.graduation}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" opacity={0.7}>GPA</Text>
            <Text>{education.gpa}</Text>
          </Box>
          <Box>
            <Text fontSize="sm" opacity={0.7}>Distinction</Text>
            <Text>{education.distinctions.join(", ")}</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Majors & Minors */}

      {/* <VStack align="stretch" gap={4} mb={4}>
      {education.minors.map((minor, index) =>  (
          <Box 
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderLeftWidth="4px"
            borderLeftColor="colorPalette.500"
            transition="all 0.2s"
            _hover={{ shadow: "sm" }}
          >
            <Flex justify="space-between" align={["flex-start", "center"]} direction={["column", "row"]} mb={1}>
              <HStack gap={2}>
                <GraduationCap size={16} />
                <Text fontWeight="bold">Minor in {minor}</Text>
              </HStack>
            </Flex>
          </Box>
      ))}
      {education.certifications.map((certification, index) =>  (
          <Box 
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderLeftWidth="4px"
            borderLeftColor="colorPalette.500"
            transition="all 0.2s"
            _hover={{ shadow: "sm" }}
          >
            <Flex justify="space-between" align={["flex-start", "center"]} direction={["column", "row"]} mb={1}>
              <HStack gap={2}>
                <Award size={16} />
                <Text fontWeight="bold">Certificate in {certification}</Text>
              </HStack>
            </Flex>
          </Box>
      ))}
      </VStack> */}
        
      {/* Honors & Awards */}
      <Heading as="h3" size="md" mb={3}>
        Honors & Recognitions
      </Heading>
      
      <VStack align="stretch" gap={4}>
        {honors.map((honor, index) => (
            <Card 
                key={`honor-${index}`}
                title={honor.title}
                subtitle={honor.duration}
                description={honor.description}
                icon={<Award size={16} />}
            />
        ))}
      </VStack>
    </Box>
  );
};

export default Education;
