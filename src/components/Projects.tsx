import React from "react";
import styled from "styled-components";

import gif from "../assets/projects/animated login.gif";
import covid from "../assets/projects/covidtracker.png";
import masonry from "../assets/projects/masonry.gif";
import mwrl from "../assets/projects/mwrl.png";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Project = styled.a`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-basis: 46%;
  background-color: #fafafa;
  margin-bottom: 30px;
  padding: 0 5px;
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: black;
    text-decoration: none;
  }
`;

const ProjectImage = styled.div`
  overflow: hidden;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProjectTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProjectP = styled.span`
  margin-right: 33%;
  margin-bottom: 10px;
  height: 200px;
`;

const ProjectLink = styled.h4`
  &:hover {
    text-decoration: underline;
  }
`;

export const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <p>
        I like to experiment and learn new things. I have worked on a few
        projects that you can check out below.
      </p>
      <Container>
        <Project
          href="https://github.com/MickyBizzle/expo-animated-login"
          target="_blank"
        >
          <ProjectImage
            style={{
              backgroundImage: `url("${gif}")`,
            }}
          />
          <ProjectTitle>React native - animated login</ProjectTitle>
          <ProjectP>
            A sleek login UI using react native reanimated animations.
          </ProjectP>
          <ProjectLink>Have a look</ProjectLink>
        </Project>
        <Project
          href="https://github.com/MickyBizzle/covidtracker"
          target="_blank"
        >
          <ProjectImage
            style={{
              backgroundImage: `url("${covid}")`,
            }}
          />
          <ProjectTitle>React - Covid 19 Tracker</ProjectTitle>
          <ProjectP>
            A ReactJS app to visualise the coronavirus across the earth, using
            the covid19api and react-simple-maps.
          </ProjectP>
          <ProjectLink>Have a look</ProjectLink>
        </Project>
        <Project
          href="https://github.com/MickyBizzle/react-responsive-bricks"
          target="_blank"
        >
          <ProjectImage
            style={{
              backgroundImage: `url("${masonry}")`,
            }}
          />
          <ProjectTitle>React - Masonry Layout</ProjectTitle>
          <ProjectP>
            An NPM package for building responsive masonry layouts using React.
          </ProjectP>
          <ProjectLink>Have a look</ProjectLink>
        </Project>
        <Project href="https://mwrl.co.uk/" target="_blank">
          <ProjectImage
            style={{
              backgroundImage: `url("${mwrl}")`,
            }}
          />
          <ProjectTitle>React - Sports team website</ProjectTitle>
          <ProjectP>
            A website for a Rounders team, using Google Sheets API to pull
            scores from a sheet. Hosted with Firebase.
          </ProjectP>
          <ProjectLink>Have a look</ProjectLink>
        </Project>
      </Container>
    </div>
  );
};
