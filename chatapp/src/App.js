import { Box, Button, Container, VStack, Input, HStack } from "@chakra-ui/react";
import Message from "./Componets/Message";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";
const auth = getAuth(app); 

const loginhandler = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

function App() {
  return (
    <Box bg="red.50">
      <Container h="100vh" bg="white">
        <VStack h="full" bg="telegram.100" justifyContent="space-between">
          <Button colorScheme="red" w="full" onClick={loginhandler}>
            Logout
          </Button>

          <VStack
            overflowY="auto"
            w="full"
            h="full"
            bg="purple.100"
            flexGrow={1}
            justifyContent="flex-end"
            p={4}
          >
            <Message text={"sample message"} />
            <Message text={"sample message"} />
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
