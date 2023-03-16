import React from "react";
import { AboutSection } from "../components/About/aboutSection";
import { ContactSection } from "../components/contact/contactSection";
import { LandingSection } from "../components/Landing/landingSection";
import { ProjectsSection } from "../components/projects/projectsSection";

export const HomePage = () => {
  return (
    <>
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};
