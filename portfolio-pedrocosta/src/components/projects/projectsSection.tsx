import React from "react";
import { StyledHeader } from "../Header/styles";
import { StyledProjects, StyledProject } from "./styles";

export const ProjectsSection = () => {
  return (
    <>
      <StyledHeader />
      <StyledProjects>
        <div>
          <p>Icon</p>
          <p>Projects I Like</p>
        </div>
        <StyledProject>
          <p>Description project</p>
          <p>
            img project com click para levar ao projeto e hover mostrando as
            tecnologias usadas
          </p>
        </StyledProject>
        <StyledProject>
          <p>Description project</p>
          <p>
            img project com click para levar ao projeto e hover mostrando as
            tecnologias usadas
          </p>
        </StyledProject>
        <StyledProject>
          <p>Description project</p>
          <p>
            img project com click para levar ao projeto e hover mostrando as
            tecnologias usadas
          </p>
        </StyledProject>
      </StyledProjects>
    </>
  );
};
