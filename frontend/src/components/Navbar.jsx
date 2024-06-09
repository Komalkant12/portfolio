// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <div data-aos="zoom-in-left" className="">
      <div className="flex justify-end p-4 mt-10  m-6 text-3xl lg:text-2x mb-10  space-y-4 gradient-text">
        <ul className="flex space-x-10">
        <li>
        <h1><a href="/frontend/src/components/PortfolioCard.jsx">Home</a></h1>
        </li>
        <li>
        <h1><a href="/frontend/src/components/AboutCard.jsx">About</a></h1>
        </li>
        <li>
        <h1><a href="/frontend/src/components/ProjectCard.jsx">Projects</a></h1>
        </li>
        <li>
        <h1><a href="./SkillCard">Skill</a></h1>
        </li>
        <li>
        <h1><a href="">Contact</a></h1>
        </li>
        
        </ul>
      </div>
    </div>
  )
}

export default Navbar



