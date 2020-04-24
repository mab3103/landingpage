import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 10000;
  background: red;
  transition: top 0.5s ease-in-out;
  // @ts-ignore
  top: ${(props) => (props.hasScrolled ? 0 : "-100px")};
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

const CVLink = styled.a`
  text-decoration: none;
  color: #85bdbf;
  font-size: 1em;
  font-weight: bold;
`;

export const CVButton = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setHasScrolled(true);
      }, 1000);
    };
    if (hasScrolled === false) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    // @ts-ignore
    <Container hasScrolled={hasScrolled}>
      <CVLink href="https://mickybizzle.github.io/cv/">Check out my CV</CVLink>
    </Container>
  );
};
