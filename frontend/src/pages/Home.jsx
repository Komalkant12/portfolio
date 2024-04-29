// eslint-disable-next-line no-unused-vars
import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import HomeCard from "../components/HomeCard";
import AboutCard from "../components/AboutCard";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <div className="">
      <PortfolioCard />
      <HomeCard />
      <AboutCard />
      <SkillSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
