import React from "react";
import { StyledNameTitle } from "../About/styles";
import { StyledHeader } from "./styles";

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
