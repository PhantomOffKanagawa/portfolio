import React from "react";
import { Box, Heading, HStack, Flex } from "@chakra-ui/react";
import { Tag } from "@components/ui/tag";

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => (
    <HStack wrap="wrap" gap={2}>
      {skills.map((skill) => (
        <Flex align="flex-start" key={skill}>
          <Tag colorScheme="blue" size="lg">{skill}</Tag>
        </Flex>
      ))}
    </HStack>
);

export default Skills;
