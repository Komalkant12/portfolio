// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard from "./ProjectCard";
import ProjectCard2 from "./ProjectCard2";
import ProjectCard3 from "./ProjectCard3";
import ProjectCard4 from "./ProjectCard4";
import ProjectCard5 from "./ProjectCard5";
import ProjectCard6 from "./ProjectCard6";
import ProjectCard7 from "./ProjectCard7";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";

const ProjectSection = () => {
  const scrollRef = useRef(null);

  const hScrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const hScrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  return (
    <div data-aos="fade-down" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Projects</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
      >
        <ProjectCard1 />
        <ProjectCard />
        <ProjectCard2 />
        <ProjectCard6 />
        <ProjectCard7 />
        <ProjectCard3 />
        <ProjectCard5 />
        <ProjectCard4 />
        
        
        
        
     
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-blue-600 hidden lg:block"
        />
        <h2 className="gradient-text  font-mono text-xl ">
          Slide for more
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-blue-600 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ProjectSection;