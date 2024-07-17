import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-yellow-500 p-4 flex justify-between'>
       <NavLink to={'/'}>
        <h1>LOGO</h1>
      </NavLink>
      <nav className='space-x-5'>
        <NavLink to={'/about-page'}>About</NavLink>
        <NavLink to={'/contact-page'}>Contact</NavLink>
      </nav>

    </div>
  )
}

export default Header