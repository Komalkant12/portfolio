// eslint-disable-next-line no-unused-vars
import React from "react";
import SkillsCard from "./SkillCard";


const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
      <SkillsCard title={"Git-Github"} value={70} />
        <SkillsCard title={"ReactJs"} value={60} />
         <SkillsCard title={"Tailwind css"} value={40} />
        <SkillsCard title={"NodeJs"} value={40} />
        <SkillsCard title={"MongoDB"} value={40} />
        <SkillsCard title={"Python"} value={30} />
        <SkillsCard title={"Php"} value={30} />
       
      </div>
    </div>
  );
};

export default SkillsSection;
