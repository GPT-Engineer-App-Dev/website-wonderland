import { Box, Container, Heading, VStack, Text, Image } from "@chakra-ui/react";

const trips = [
  {
    id: 1,
    title: "Trip to the Mountains",
    description: "A wonderful trip to the Rocky Mountains.",
    date: "2023-08-15",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    id: 2,
    title: "Beach Vacation",
    description: "Relaxing time at the sunny beaches of California.",
    date: "2023-07-10",
    imageUrl: "https://via.placeholder.com/300"
  },
  {
    id: 3,
    title: "City Exploration",
    description: "Exploring the vibrant city life of New York.",
    date: "2023-06-05",
    imageUrl: "https://via.placeholder.com/300"
  }
];

const LastTrips = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">Last Trips</Heading>
      <VStack spacing={8}>
        {trips.map(trip => (
          <Box key={trip.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
            <Heading as="h2" size="md" mb={2}>{trip.title}</Heading>
            <Text fontSize="sm" color="gray.500" mb={4}>{trip.date}</Text>
            <Text mb={4}>{trip.description}</Text>
            <Image src={trip.imageUrl} alt={trip.title} borderRadius="md" />
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default LastTrips;