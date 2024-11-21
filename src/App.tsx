import React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Github, Linkedin, Moon, Sun } from "lucide-react";
import Header from "@components/Header";



const App: React.FC = () => {

  return (
      <Box p={4}>
        <Header />

        <VStack align="stretch" maxW="800px" mx="auto">
          {/* Header */}
          <Box as="header" textAlign="center">
            <Heading as="h1" size="2xl">
              Harrison Surma
            </Heading>
            <Text fontSize="lg">Computer Science Student | Aspiring Developer</Text>
          </Box>

          {/* Links */}
          <HStack justify="center">
            <Link href="https://github.com/PhantomOffKanagawa">
              <Button colorScheme="gray" variant="outline">
              <Github /> GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/harrison-surma/">
              <Button colorScheme="blue" variant="outline">
              <Linkedin /> LinkedIn
              </Button>
            </Link>
          </HStack>

          {/* About Section */}
          <Box as="section">
            <Heading as="h2" size="lg">
              About Me
            </Heading>
            <Text mt={2}>
              I am a Computer Science student at the University of Missouri with a minor in
              Psychology and a passion for software development, robotics, and problem-solving.
            </Text>
          </Box>

          {/* Skills Section */}
          <Box as="section">
            <Heading as="h2" size="lg">
              Skills
            </Heading>
            <Text mt={2}>
              JavaScript, C, Python, HTML, CSS, Java, Node.js, SQL, Assembly, Project Organization,
              Communication
            </Text>
          </Box>

          {/* Projects Section */}
          <Box as="section">
            <Heading as="h2" size="lg">
              Projects
            </Heading>
            <VStack align="stretch">
              <Box>
                <Heading as="h3" size="md">
                  Halloween Laser Tag
                </Heading>
                <Text mt={1}>
                  Created a hardware-software system to register laser hits and interact with IoT
                  devices via API.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md">
                  Personal Web Apps
                </Heading>
                <Text mt={1}>
                  Developed Shuttle Timing, Availability Planning, and Meal Plan Generation apps to
                  solve everyday problems.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" size="md">
                  Disney FastPass Replica Ornament
                </Heading>
                <Text mt={1}>
                  Designed an Arduino-based NFC reading ornament with RGB lighting and a custom 3D
                  printed harness.
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Contact Section */}
          <Box as="section">
            <Heading as="h2" size="lg">
              Contact
            </Heading>
            <Text mt={2}>
              Feel free to reach out at{" "}
              <Link href="mailto:harry@surmafamily.com" color="teal.500">
                harry@surmafamily.com
              </Link>
            </Text>
          </Box>

          {/* Footer */}
          <Box as="footer" textAlign="center" mt={8}>
            <Text>&copy; {new Date().getFullYear()} Harrison Surma. All rights reserved.</Text>
          </Box>
        </VStack>
      </Box>
  );
};

export default App;
