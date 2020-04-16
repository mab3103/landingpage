import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Link = styled.a`
  width: 28px;
  height: 32px;
  margin-right: 30px;
  position: relative;
  svg {
    position: absolute;
  }
  .over {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Social = () => {
  return (
    <Container>
      <Link href="https://www.instagram.com/micky_ballard" target="_blank">
        <FontAwesomeIcon
          className="under"
          icon={["fab", "instagram"]}
          size="2x"
          color="grey"
        />
        <FontAwesomeIcon
          className="over"
          icon={["fab", "instagram"]}
          size="2x"
          color="rgb(220, 41, 123)"
        />
      </Link>
      <Link href="https://github.com/MickyBizzle" target="_blank">
        <FontAwesomeIcon
          className="under"
          icon={["fab", "github"]}
          size="2x"
          color="grey"
        />
        <FontAwesomeIcon
          className="over"
          icon={["fab", "github"]}
          size="2x"
          color="black"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/micky-b/" target="_blank">
        <FontAwesomeIcon
          className="under"
          icon={["fab", "linkedin"]}
          size="2x"
          color="grey"
        />
        <FontAwesomeIcon
          className="over"
          icon={["fab", "linkedin"]}
          size="2x"
          color="#0077b5"
        />
      </Link>
    </Container>
  );
};
