import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export const Card: React.FC<{ title: string; subtitle: string; description: string; icon: React.ReactNode }> = ({ title, subtitle, description, icon }) => {
    return (
          <Box 
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
                {icon}
                <Text fontWeight="bold">{title}</Text>
              </HStack>
              <Text fontSize="sm" opacity={0.7}>{subtitle}</Text>
            </Flex>
            <Text fontSize="sm" mt={3}>
              {description}
            </Text>
          </Box>
    );
}