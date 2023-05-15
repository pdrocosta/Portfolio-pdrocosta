import React from "react";
import { StyledHeader } from "../styles/header.styles";
import { StyledProject, StyledProjectDescriptionDiv, StyledProjectInfosDiv, StyledOtherProjectsDiv, StyledProjectsMain, SyledProjectsUl } from "../styles/projects.styles";
import { ProjectCard } from "../components/projects/projectCard.component";
import { SyledOtherProjectsUl } from "../styles/projects.styles";

export const Projects = () => {
  return (
    <>
      <StyledProjectsMain>
        <div>
          <p>Icon</p>
          <p>03. Projects I Like</p>
        </div>
        < SyledProjectsUl>
        <ProjectCard title="name" img="img" description="description" />
        <ProjectCard title="name" img="img" description="description" />
        <ProjectCard title="name" img="img" description="description" />
        <ProjectCard title="name" img="img" description="description" />

        </SyledProjectsUl>

        <StyledOtherProjectsDiv>
          <h3>See other noteworthy projects</h3>
          <SyledOtherProjectsUl>
            <li>
              <a href="">Projeto X</a>
              <p>Title</p>
              <p>Resumo</p>
            </li>
            <li>
              <a href="">Projeto X</a>
              <p>Title</p>
              <p>Resumo</p>
            </li>
            <li>
              <a href="">Projeto X</a>
              <p>Title</p>
              <p>Resumo</p>
            </li>

          </SyledOtherProjectsUl>
        </StyledOtherProjectsDiv>
      </StyledProjectsMain>
    </>
  );
};
