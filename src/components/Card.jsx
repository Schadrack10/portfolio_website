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
      <Box
        style={{
          background: "#fff",
          width: "400px",
          height: "350px",
          borderRadius: "10px",
        }}
      >
        <Image
          borderRadius="inherit"
          boxSize="100%"
          height={"60%"}
          src={imageSrc}
          alt="Segun Adebayo"
        />
        <Box
          style={{
            padding: "10px 20px",
            height: "40%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            style={{
              flex: 1,
               display:"flex",
               alignItems:"flex-start"
            }}
          >
            <Heading as="h6" size="md" color="#000">
              {title}
            </Heading>
          </Box>
          <Box
            style={{
              flex: 2,
               display:"flex",
               alignItems:"flex-start",
            }}
          >
            <Text fontSize={14} color="#000">
              {description}
            </Text>
          </Box>
          <Box
            style={{
              flex: 1,
               display:"flex",
               alignItems:"flex-end"
            }}
          >
            <HStack>
              <Text color="#000">see more</Text>
              <FontAwesomeIcon color="#000" icon={faArrowRight} size={"1x"} />
            </HStack>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};

export default Card;
