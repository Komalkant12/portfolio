// eslint-disable-next-line no-unused-vars
import React from 'react'
import Project1 from "../assets/project1.png"
import { FaGithub } from "react-icons/fa";
import { RiSignalTowerLine } from "react-icons/ri";

const ProjectCard = () => {
  return (
    <div className='p-4 m-4 '>
    <div className='h-90% w-[320px] md:w-[320p] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overlow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl'>
      <a href="">
        <img src={Project1} alt="QuickMail"   className="lg:h-48 h-[200px] w-full object-cover object-center" />
      </a>
       <div className='p-4 flex flex-col lg:gap-3'>
        <h2 className="tracking-widest text-2xl text-white" >QuickMail</h2>
         <h1 className='text-lg ld:text-xl font-600 text-gray-300'>
         QuickMail is a automatic AI email generator website built using the MERN stack automates email creation by leveraging AI. Users input subject and content and the AI generates  appropriate emails. 
        </h1>
        <div className="flex items-center justify-between" >
          <a href="#">
          < FaGithub className='text-white font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-gray-600 cursor-pointer' />
          </a>
          <a href="#">
          <RiSignalTowerLine className='text-white font-bold inline-flex item-center text-lg md:text-xl md:mb-2 lg:mb-0 hover:text-gray-600 cursor-pointer' />
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProjectCard
