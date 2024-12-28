import React from 'react'
import { NavLink } from "react-router";
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div className='flex place-content-between p-3 px-5 align-middle'>
            {/* Logo */}
            <NavLink to='/'>
            <div className='flex gap-3 items-center text-lg text-white'
            >
            <img 
                className='h-9 rounded-xl'
                src={logo}
                alt="logo" />
                <p>MoviePhilia</p>
            </div>
            </NavLink>            
        <ul className='flex gap-10 align-middle'>
            <li className='leading-loose'
            ><NavLink to='/' className='flex center '>Home</NavLink></li>
            <li className='leading-loose'><NavLink to ='/trending' className='flex center'>Trending</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar
