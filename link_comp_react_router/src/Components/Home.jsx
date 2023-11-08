import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  
  return (
    <div >
     <div>React DOm</div>
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
    </div>
  )
}

export default Home