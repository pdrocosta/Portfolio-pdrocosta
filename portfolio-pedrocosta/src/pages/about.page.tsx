import React from "react";
import {
  StyledAbout,
  StyledAboutInfos,
  StyledGreetingSection,
  StyledMainAbout,
  StyledNewTechsUl,
  StyledTechsSection,
  StyledWelcome,
} from "../styles/about.styles";
import CardTech, { CardLoadingTech } from "../components/About/card.component";

export const About = () => {
  return (
    <StyledAbout>
      <StyledMainAbout>
        <StyledGreetingSection>
          <StyledWelcome>02. Hey!</StyledWelcome>
          <StyledAboutInfos>
            <h5>
              My full name is Pedro Augusto Costa, I'm a retired business administration student, turned into a Full Stack Web developer, by Kenzie Academy Brazil. Although retired, I enjoy mixing my administration skills such as management, organization, and soft skills, with my technical knowledge for programming! See more below!
            </h5>
            <p>Here are a few technologies I've been working on recently:</p>
          </StyledAboutInfos>
        </StyledGreetingSection>
        <StyledTechsSection>
          <StyledNewTechsUl>
            <CardTech title="HTML5" description="Ok" img="ok.svg" />
            <CardTech title="CSS" description="" img="CSS.svg" />
            <CardTech title="JavaScript (ES6)" description="" img="JavaScript (ES6).svg" />
            <CardTech title="React.js" description={["Vite", "Vercel", "Hooks", "State Management"]} img="React.js.svg" />
            <CardTech title="Redux" description="" img="Redux.svg" />
            <CardTech title="TypeScript" description="" img="TypeScript.svg" />
            <CardTech title="Node.js" description={["Express"]} img="Node.js.svg" />
            <CardTech title="PostgreSQL" description="" img="PostgreSQL.svg" />
            <CardTech title="TypeORM" description="" img="TypeORM.svg" />
            <CardTech title="Git Hub" description="" img="Git Hub.svg" />
          </StyledNewTechsUl>

          <p>Here are some of the technologies I'll learn until the end of October 2023!</p>

          <StyledNewTechsUl>
            <CardLoadingTech title="Python" description="" img="Python.svg" />
            <CardLoadingTech title="Django" description="" img="Django.svg" />
            <CardLoadingTech title="MongoDB" description="" img="MongoDB.svg" />
            <CardLoadingTech title="Amazon AWS" description="" img="Amazon AWS.svg" />
            <CardLoadingTech title="Kanban" description="" img="Kanban.svg" />
            <CardLoadingTech title="JIRA" description="" img="JIRA.svg" />
          </StyledNewTechsUl>
        </StyledTechsSection>
      </StyledMainAbout>
    </StyledAbout>
  );
};
