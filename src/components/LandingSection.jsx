import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="xl" name="pete" src="https://i.pravatar.cc/150?img=7" />
    <Text style={{ color: "#fff", fontSize: "20px" }}>{greeting}</Text>
    <Heading style={{ color: "#fff" }}>{bio1}</Heading>
    <Heading style={{ color: "#fff" }}>{bio2}</Heading>
  </FullScreenSection>
);

export default LandingSection;
