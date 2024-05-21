import { Container, Heading, VStack, Box, Text, Image } from "@chakra-ui/react";

const trips = [
  {
    id: 1,
    title: "Trip to Paris",
    description: "Visited the Eiffel Tower and enjoyed the beautiful city of Paris.",
    date: "2023-05-15",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Hiking in the Alps",
    description: "A thrilling adventure in the Alps with breathtaking views.",
    date: "2023-06-20",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Beach Vacation in Hawaii",
    description: "Relaxed on the sunny beaches of Hawaii and enjoyed the ocean.",
    date: "2023-07-10",
    image: "https://via.placeholder.com/300x200",
  },
];

const LastTrips = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Last Trips
      </Heading>
      <VStack spacing={8}>
        {trips.map((trip) => (
          <Box key={trip.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h2" size="md" mb={2}>
              {trip.title}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {trip.date}
            </Text>
            <Image src={trip.image} alt={trip.title} mb={4} borderRadius="md" />
            <Text>{trip.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default LastTrips;