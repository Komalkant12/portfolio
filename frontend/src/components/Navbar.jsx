// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div data-aos="zoom-in-left" className="mt-10">
      <div className="flex justify-end p-4 mb-5  m-1 text-3xl lg:text-2x   space-y-2 gradient-text">
        <ul className="flex space-x-10">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/skill">Skills</Link>
        </li>
        <li>
        <Link to="/project">Projects</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        
        </ul>
      </div>
    </div>
  )
}

export default Navbar



