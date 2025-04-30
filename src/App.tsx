import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import * as Values from "@utils/homepage-values";
import Header from "@components/Header";
import Projects from "@components/Projects";
import Footer from "@components/Footer";
import Skills from "@components/Skills";
import Experience from "@components/Experience";
import Links from "@components/Links";

const App: React.FC = () => {
  const featuredProjects = Values.projects.filter(p => p.featured); // Filter featured projects
  
  return (
      <Box p={4} min-height="100vh">
        <Header />

        <VStack align="stretch" maxW="800px" mx="auto">
          {/* Header */}
          <Box as="header" textAlign="center">
            <Heading as="h1" size="2xl">
              Harrison Surma
            </Heading>
            <Text fontSize="lg">Computer Science Student | Developer</Text>
          </Box>

          {/* Links */}
          <Links links={Values.links} />

          {/* About Section */}
          <Box as="section">
            <Heading as="h2" size="lg">
              About Me
            </Heading>
            <Text mt={2}>
              I am a Computer Science student, soon to be graduate, at the University of Missouri with a minor in
              Psychology and Mathematics, and a passion for software development, robotics, and problem-solving.
            </Text>
            <Text mt={2}>
              I am a self-motivated and goal-oriented worker who believes in working to solve real problems and
              learning new things along the way. Breaking down problems, working with others to find solutions, and
              learning from the process are the elements of development that I'll never get tired of.
            </Text>
          </Box>

          {/* Skills Section */}
          <VStack as="section" gap={2} my={4} align={"start"}>
            <Heading as="h2" mb={4}>Skills</Heading>

            <Skills skills={Values.languages} />
            <Skills skills={Values.skills} />
          </VStack>

          {/* Projects Section */}
          <Projects projects={featuredProjects} showAllLink={true} />

          {/* Experience Section */}
          <Experience experiences={Values.experiences}/>

          {/* Contact Section */}
          <Box as="section">
            <Heading as="h2" size="lg">
              Contact
            </Heading>
            <Text mt={2}>
              Reach out to{" "}
              <Link href="mailto:harry@surmafamily.com" color="teal.500">
                harry@surmafamily.com
              </Link>
            </Text>
          </Box>

          {/* Footer */}
          <Footer />
        </VStack>
      </Box>
  );
};

export default App;
