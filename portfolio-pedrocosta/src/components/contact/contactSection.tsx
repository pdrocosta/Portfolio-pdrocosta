import React from "react";
import { StyledHeader } from "../Header/styles";
import { StyledContactsSection, StyledLinks } from "./styles";

export const ContactSection = () => {
  return (
    <>
      <StyledHeader />
      <StyledContactsSection>
        <h3>Texto para contato </h3>
        <StyledLinks>
          <p>Link para github</p>
          <p>Link para email</p>
          <p>Link para telefone</p>
          <p>Link para curriculo</p>
        </StyledLinks>
      </StyledContactsSection>
    </>
  );
};
