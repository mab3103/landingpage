import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import background from "../assets/background.jpg";
import { Social } from "./Social";

const HeroContainer = styled.div`
  /* background: red; */
`;

const NameLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const HeroImg = styled.img`
  width: 100%;
`;

const Text = styled.span`
  display: block;
  @media (min-width: 959px) {
    font-size: 50px;
  }
  font-size: 6vw;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Colour = styled.span`
  color: #85bdbf;
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <NameLogo src={logo} alt="logo" />
      <Social />
      <Text>Hello, my name is Michael.</Text>
      <Text>
        I <Colour>code</Colour>, <Colour>design</Colour> and{" "}
        <Colour>learn</Colour>.
      </Text>
      <HeroImg src={background} />
    </HeroContainer>
  );
};
