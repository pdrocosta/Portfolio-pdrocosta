import React from "react";
import { StyledNameTitle } from "../../styles/about.styles";
import { StyledHeader } from "../../styles/header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNameTitle>Pedro Augusto Costa</StyledNameTitle>
      <div>
        <p>horas</p>
        <a href="">Botao para home</a>
      </div>
    </StyledHeader>
  );
};
