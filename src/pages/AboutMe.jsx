import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const AboutMe = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">About Me</Heading>
        <Text fontSize="lg" textAlign="center">
          Hello! I'm a passionate web developer with a background in creating modern and responsive web applications. I love coding and enjoy learning new technologies. In my free time, I like to read books, travel, and explore new places.
        </Text>
      </VStack>
    </Container>
  );
};

export default AboutMe;