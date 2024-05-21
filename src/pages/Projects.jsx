import { Container, Heading, VStack, Box, Link, Text } from "@chakra-ui/react";

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    link: "https://github.com/project-one"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    link: "https://github.com/project-two"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    link: "https://github.com/project-three"
  }
];

const Projects = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Projects</Heading>
        {projects.map((project, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{project.title}</Heading>
            <Text mt={4}>{project.description}</Text>
            <Link href={project.link} color="teal.500" isExternal mt={2}>View Project</Link>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Projects;