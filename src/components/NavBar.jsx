import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <nav>
    <Link to="/">Inicio</Link>
    <div>
      <Link to="/Productos">Productos</Link>
    </div>
   </nav>

  )
}

export default NavBar