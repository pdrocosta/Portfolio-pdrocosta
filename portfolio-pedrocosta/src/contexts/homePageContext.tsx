import { createContext, useState } from "react";
import React from 'react';


export interface iContextProps {
    children: React.ReactNode;
  }

  interface iHomeContext{
    coco: ()=> void;
  }
export const HomePageContext = createContext({} as iHomeContext);



export const HomePageProvider= ({ children }: iContextProps) => {
    function coco() {
        return null
    }
  return (
    <HomePageContext.Provider value={{coco}}>{children}</HomePageContext.Provider>
  );
};
