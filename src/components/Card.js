import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack spacing={8}>
      <Box style={{
        background: "#fff",
        width: "400px",
        height: "300px",
        borderRadius: "10px",
      }}>
       <Image
          borderRadius="inherit"
          boxSize="100%"
          height={"60%"}
          src={imageSrc}
          alt="Segun Adebayo"
        />
        <Box style={{
          padding: "10px 20px",
      }}>
        <Heading as="h6" size="lg" color="#000">
          {title}
        </Heading>
        <Text color="#000">
          {description}
        </Text>
        </Box>
      </Box>
    </HStack>
  )
};

export default Card;
