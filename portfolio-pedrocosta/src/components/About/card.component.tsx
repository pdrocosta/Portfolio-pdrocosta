import React from "react";

import { StyledCardLoadingTech, StyledCardTech } from "../../styles/about.styles";
import { CardLoadingTechProps, CardTechProps } from "../../interfaces/About/about.interfaces";


const CardTech = ({ title, description, img }: CardTechProps) => {
    return (
      <StyledCardTech>
        <p id="p_title">{title}</p>
        <p id="p_status">{description}</p>
        <img src={img} alt={title} />
      </StyledCardTech>
    );
  };
  

export default CardTech;

export const CardLoadingTech = ({
    title,
    description,
    img,
  }: CardLoadingTechProps) => {
    return (
      <StyledCardLoadingTech>
        <p id="p_title">{title}</p>
        <p id="p_status">{description}</p>
        <img src={img} alt={title} />
      </StyledCardLoadingTech>
    );
  };
