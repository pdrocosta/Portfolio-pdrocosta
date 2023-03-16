import React from "react";
import {
  StyledAbout,
  StyledAboutInfos,
  StyledNameTitle,
  StyledNavs,
  StyledSectionNav,
  StyledWelcome,
} from "./styles";

export const AboutSection = () => {
  return (
    <StyledAbout>
      <div>
        <StyledNameTitle />
        <StyledSectionNav>
          <StyledNavs>
            <a href="">Projects</a>
          </StyledNavs>

          <StyledNavs>
            <a href="">Contact</a>
          </StyledNavs>
          <StyledNavs>
            <a href="">Easter Egg</a>
          </StyledNavs>
        </StyledSectionNav>
      </div>
      <StyledWelcome>WELCOME</StyledWelcome>
      <StyledAboutInfos>
        <h5>About</h5>
        <p>
          Hover que mostra as tecnologias dominadas e hover over me pra indicar
        </p>
      </StyledAboutInfos>
    </StyledAbout>
  );
};
