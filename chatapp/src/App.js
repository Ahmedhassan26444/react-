import { Box, Button, Container, VStack } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="red.50">
      <Container h="100vh" bg="white">
        <VStack>
          <Button>Sign out</Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;
