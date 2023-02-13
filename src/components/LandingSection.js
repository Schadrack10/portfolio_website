import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
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
  <Avatar size='xl' name="pete" src="https://i.pravatar.cc/150?img=7"/>
    <h1 style={{color:"#fff",fontSize:"40px"}}>{greeting}</h1>
    <h2 style={{color:"#fff"}}>{bio1}</h2>
    <h4 style={{color:"#fff"}}>{bio2}</h4>
    {bio2}

  </FullScreenSection>
);

export default LandingSection;
