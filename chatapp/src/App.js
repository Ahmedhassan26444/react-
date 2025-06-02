import { Box, Button, Container, VStack, Input, HStack } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="red.50">
      <Container h="100vh" bg="white">
        <VStack h="full" bg="telegram.100" justifyContent="space-between">
          <Button colorScheme="red" w="full">
            Logout
          </Button>

          <VStack
            w="full"
            h="full"
            bg="purple.100"
            flexGrow={1}
            justifyContent="flex-end"
            p={4}
          >
            <HStack as="form" w="full">
              <Input flex={1} placeholder="Type your message..." />
              <Button colorScheme="purple" type="submit">
                Send
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}

export default App;