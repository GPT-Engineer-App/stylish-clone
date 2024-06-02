import { Box, Container, VStack, HStack, Text, Button, Image, IconButton, Heading, SimpleGrid, Link } from "@chakra-ui/react";
import { FaShoppingCart, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="white" boxShadow="sm" py={4}>
        <Container maxW="container.xl" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            KaraKo Suits
          </Heading>
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">Shop</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <VStack spacing={4}>
            <Heading as="h2" size="2xl">
              Discover Your Perfect Suit
            </Heading>
            <Text fontSize="lg">Tailored to fit your style and personality.</Text>
            <Button colorScheme="teal" size="lg">
              Shop Now
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Product Showcase */}
      <Box as="section" py={20}>
        <Container maxW="container.xl">
          <Heading as="h3" size="xl" mb={8} textAlign="center">
            Featured Products
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0fGVufDB8fHx8MTcxNzM2Njk1NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Classic Black Suit
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  $299.99
                </Text>
                <Button mt={4} colorScheme="teal">
                  Add to Cart
                </Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1617137968427-85924c800a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtZW4lMjBzdWl0fGVufDB8fHx8MTcxNzM2Njk1NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Modern Gray Suit
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  $349.99
                </Text>
                <Button mt={4} colorScheme="teal">
                  Add to Cart
                </Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxtZW4lMjBzdWl0fGVufDB8fHx8MTcxNzM2Njk1NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>
                  Elegant Blue Suit
                </Heading>
                <Text fontSize="lg" color="gray.600">
                  $399.99
                </Text>
                <Button mt={4} colorScheme="teal">
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Text>&copy; {new Date().getFullYear()} KaraKo Suits. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} />
              <IconButton aria-label="Facebook" icon={<FaFacebookF />} />
              <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
