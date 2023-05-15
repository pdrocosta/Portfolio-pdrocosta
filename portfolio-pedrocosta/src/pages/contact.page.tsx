import React from "react";
import { StyledContactsSection, StyledLinks } from "../styles/contact.styles";

export const Contact = () => {
  return (
    <>
      <StyledContactsSection>
        <h3>04. So, now what? </h3>
        <h5> Get in touch!</h5>
        <p>I`m always available (including for job and project opportunities)! If you wanna chat or ask a question, follow the links below!</p>
        <StyledLinks>
          <a href="github.com">GitHub</a>
          <a href="github.com">Curriculo</a>
          <a href="github.com">LinkedIn</a>
          <a href="github.com">WhatsApp</a>
          <a href="github.com">E-mail</a>
        </StyledLinks>
      </StyledContactsSection>
    </>
  );
};
