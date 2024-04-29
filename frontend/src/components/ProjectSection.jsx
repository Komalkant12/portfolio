// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProjectCard from './ProjectCard'
const ProjectSection = () => {
  return (
    <div className='mb-20 lg:mb-36'>
        <h1 className='text-5xl lg:text-7xl gradient-text mb-10'>Personal Projects</h1>
         <div className='flex overflow-x-scroll gap-6  lg-3'>
           <ProjectCard/>
           <ProjectCard/>
           <ProjectCard/>
           <ProjectCard/>
           <ProjectCard/>
      </div>
  </div>
   
  )
}

export default ProjectSection
