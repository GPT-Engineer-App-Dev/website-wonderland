import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I'm a passionate web developer creating modern and responsive designs.</Text>
        </Box>
        <Box>
          <Image borderRadius="full" boxSize="150px" src="https://via.placeholder.com/150" alt="Profile Picture" mb={4} />
        </Box>
        <Box>
          <Button as="a" href="https://github.com" leftIcon={<FaGithub />} colorScheme="teal" variant="solid" m={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" leftIcon={<FaLinkedin />} colorScheme="linkedin" variant="solid" m={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:example@example.com" leftIcon={<FaEnvelope />} colorScheme="red" variant="solid" m={2}>
            Email
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;