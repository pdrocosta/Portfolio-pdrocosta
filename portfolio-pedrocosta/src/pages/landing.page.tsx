import React from "react";
import { StyledButton, StyledInfosDiv, StyledLanding, StyledMain, StyledName, StyledPictureDiv, StyledProfileSection } from "../styles/landing.styles";

export const Landing = () => {
  return (
    <StyledLanding>
      <StyledMain>
        <StyledProfileSection>
          <StyledInfosDiv>
            <h4>01. Hi, my name is</h4>
            <h1>
              Pedro Costa.
            </h1>
            <h2>I develop things for the web.</h2>
            <h4>Night owl, dark schemes and long runs. Working from Curitiba, Brazil. Full Stack Web Developer. Wanna see more?</h4>
            <button onClick={() => console.log("ir para about")} >Click me!</button>
          </StyledInfosDiv>
          <StyledPictureDiv>
          <img src="./Landing/mockImg.svg" alt="profile_img" /> 
      </StyledPictureDiv>
        </StyledProfileSection>
      </StyledMain>
    </StyledLanding>
  );
};
