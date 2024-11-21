import React from "react";
import { Box, Flex, Heading, Button, } from "@chakra-ui/react";
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
}

const Header: React.FC = () => {
    const { appearance, setAppearance } = useTheme();
  
    const toggleTheme = () => {
      setAppearance(appearance === 'dark' ? 'light' : 'dark');
    };
  
    return (
      <Box as="header" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="lg">
            Harrison Surma
          </Heading>
          <Button onClick={toggleTheme}>
            {appearance === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Flex>
      </Box>
    );
  };

export default Header;
