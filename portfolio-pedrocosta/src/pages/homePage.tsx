import React from "react";
import { Header } from "../components/Header/header";
import { Landing } from "./landing.page";
import { About } from "./about.page";
import { Projects } from "./projects.page";
import { Contact } from "./contact.page";

export const HomePage = () => {
  return (
    <>
      <Header/>
      <Landing />
      <About />
      <Projects />
      <Contact/>
    </>
  );
};
