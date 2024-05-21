import { Container, Heading, VStack, Text } from "@chakra-ui/react";

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Life is what happens when you're busy making other plans. - John Lennon"
];

const Quotes = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">Quotes</Heading>
        {quotes.map((quote, index) => (
          <Text key={index} fontSize="lg" textAlign="center">
            {quote}
          </Text>
        ))}
      </VStack>
    </Container>
  );
};

export default Quotes;