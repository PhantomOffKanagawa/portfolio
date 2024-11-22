import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => (
  <Box mt={4} py={2} textAlign="center" width="100%" >
    <Text>&copy; {new Date().getFullYear()} Harrison Surma</Text>
  </Box>
);

export default Footer;
