import React from 'react'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
//import { PawsContext } from "../context/paws-context";
import { useNavigate } from "react-router-dom";

const Alerts = () => {
  //const { user } = useContext(PawsContext);
  const navigate = useNavigate();

  const alertHandler = () => {
    
    localStorage.removeItem("pawsUserDetails");
    //window.location.reload();
    navigate("/");
  }
  

  return (
    <Container maxW="xl" centerContent margin="auto">
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        textAlign="center"
        height="390px"
        bg="purple.900"
        //color="yellow.300"
        borderRadius="16px"
        borderWidth="2px"
        borderColor="black"
        p={6}
        gap="1em"
      >
        <AlertIcon boxSize="45px" mr={0}  color="yellow.500" />
        <AlertTitle  fontSize={{base:"2xl", md:"3xl"}} color="red.50" fontFamily="Work sans bold" width="100%" style={{ lineHeight: "1.2em"}}>
          Oops !! Something Went Wrong 😵
        </AlertTitle>
        <AlertDescription maxWidth="lg" fontSize={{base:"lg", md:"xl"}} color="gray.300" >
          Just a Moment. Working on it ⌛
        </AlertDescription>
        <Spinner
          thickness="6px"
          speed="0.99s"
          emptyColor="gray.200"
          color="yellow.500"
          size="xl"
        />
        <AlertDescription  maxWidth="md" color="gray.400">
          ( Still ⌛ Click on the Button Below ⬇️ )
        </AlertDescription>
        <Button
          width="100%"
          fontWeight="bold"  
          variant="ghost"
          bg="yellow.500"
          color="white"
          mt={1}
          p={1.5}
          borderColor="black"
          onClick={alertHandler}
          _hover={{ background: "yellow.300", color: "black" }}
          _active={{ background: "yellow.300", color: "black" }}
        >
          Please try Login/Signup again.
        </Button>
      </Alert>
    </Container>
  )
}

export default Alerts