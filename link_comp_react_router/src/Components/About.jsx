import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
  return (
 <>
    <div> This is About page</div>
   
    <ul>
     <li>
       <NavLink to="/">Home</NavLink>
     </li>

     <li>
       <NavLink to="about">About </NavLink>
     </li>

     <li>
       <NavLink to="contact">Contact</NavLink>
     </li>
    </ul>
    </>

  )
}

export default About