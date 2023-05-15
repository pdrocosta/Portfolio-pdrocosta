import React from "react";
import { CardProjectProps } from "../../interfaces/Projects/projects.interfaces";
import { StyledCardTech } from "../../styles/about.styles";
import { StyledProjectDescriptionDiv, StyledProjectInfosDiv } from "../../styles/projects.styles";

export const ProjectCard = ({ title, img, description }: CardProjectProps): JSX.Element => {
  return (
    <StyledCardTech>
      <StyledProjectInfosDiv>
        <p id="p_title">{title}</p>
        <StyledProjectDescriptionDiv>
          <p id="p_status">{description}</p>
        </StyledProjectDescriptionDiv>
      </StyledProjectInfosDiv>
      <img src={img} alt={title} />
    </StyledCardTech>
  );
};
