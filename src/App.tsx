import React from "react";
import "./app.css";
import styled from "styled-components";
import { Hero } from "./components/Hero";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { CVButton } from "./components/CVButton";

library.add(faInstagram, faGithub, faLinkedin);

const Container = styled.div`
  position: relative;
  @media (min-width: 960px) {
    max-width: 940px;
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
  padding: 20px;
  margin: 75px auto;
`;

function App() {
  return (
    <Container>
      <CVButton />
      <Hero />
      <Skills />
      <Projects />
    </Container>
  );
}

export default App;
