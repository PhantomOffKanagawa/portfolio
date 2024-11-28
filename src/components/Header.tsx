import React from "react";
import { Box, Flex, Heading, Button, Link } from "@chakra-ui/react";
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    const { appearance, setAppearance } = useTheme();
  
    const toggleTheme = () => {
      setAppearance(appearance === 'dark' ? 'light' : 'dark');
    };
  
    return (
      <Box as="header" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="lg">
            <Link href="/">
              Portfolio
            </Link>
          </Heading>
          <Button onClick={toggleTheme}>
            {appearance === "dark" ? "Light Mode" : "Dark Mode"}
          </Button>
        </Flex>
      </Box>
    );
  };

export default Header;
