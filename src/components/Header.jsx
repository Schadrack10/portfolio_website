import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  //scrolling effect

  const navRef = useRef();
  const [scrolling, setScrolling] = useState(false);
  const [oldScrollY, setOldScrollY] = useState(window.scrollY);
  // var oldScrollY = window.scrollY;

  window.onscroll = () => {
    if (oldScrollY < window.scrollY) {
      setScrolling(true);
      // navRef.current.transition = "1s ease-in";
    } else {
      setScrolling(false);
      // navRef.current.transition = "1s ease-in";
    }
    setOldScrollY(window.scrollY);
  };

  useEffect(() => {
    navRef.current.transition = "1s ease-in";
  }, [scrolling]);

  return (
    <Box
      ref={navRef}
      position={scrolling ? "fixed" : "relative"}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {socials.map((iconName, index) => (
              <a style={{ margin: "0 5px" }} key={index} href={iconName.url}>
                <FontAwesomeIcon icon={iconName.icon} size={"2x"} />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a onClick={() => handleClick("projects")} href="#projects">
                Projects
              </a>
              <a onClick={() => handleClick("contactme")} href="#contact-me">
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
