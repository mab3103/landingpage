import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* flex: 2; */
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Text = styled.p`
  flex-basis: 48%;
  font-size: 18px;
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`;

const Skill = styled.p`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-basis: 30%;
  @media (max-width: 800px) {
    flex-basis: 50%;
  }
  @media (max-width: 400px) {
    flex-basis: 100%;
  }
`;

const Point = styled.span`
  color: #85bdbf;
  margin-right: 10px;
`;

const CVLink = styled.a`
  text-decoration: none;
  color: #85bdbf;
  &:hover {
    text-decoration: underline;
  }
`;

export const Skills = () => {
  return (
    <div>
      <h1>My Skills</h1>
      <span style={{ fontSize: "1.5em" }}>
        You can see my CV{" "}
        <CVLink href="https://mickybizzle.github.io/cv/">here</CVLink>.
      </span>
      <Container>
        <Text>
          I studied computer science at university where I learnt the
          fundamentals of programming and core computing concepts. I was
          introduced to web development where I discovered my love for modern
          web technology and the power of web and mobile apps.
        </Text>
        <Text>
          After graduating, I enrolled on a graduate scheme at{" "}
          <span style={{ color: "#e60000", fontWeight: "bold" }}>Vodafone</span>
          , doing 3 placements over 2 years. In that time I gained experience
          with machine learning and data science, as well as building IoT
          solutions using a range of technologies.
        </Text>
      </Container>
      <Container>
        <Skill>
          <Point>*</Point> Javascript ES6
        </Skill>
        <Skill>
          <Point>*</Point>React
        </Skill>
        <Skill>
          <Point>*</Point>React Native
        </Skill>
        <Skill>
          <Point>*</Point>HTML & CSS
        </Skill>
        <Skill>
          <Point>*</Point>Firebase & AWS Amplify
        </Skill>
        <Skill>
          <Point>*</Point>PHP & SQL
        </Skill>
      </Container>
    </div>
  );
};
