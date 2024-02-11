import { Button, Navbar } from 'flowbite-react';
import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom';

export function NavigationBar() {
  return (
    <Navbar className='bg-gray-200 ' fluid rounded>
      <NavLink to={'/'}><Navbar.Brand>
        <img loading='lazy' src={logo} className="mr-3 h-[3rem] w-[12rem]" alt="logo_heast" />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Heast</span> */}
      </Navbar.Brand>
      </NavLink>
      <div className="flex md:order-2">
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink className='capitalize' to={"/"}><Navbar.Link>
          Home
        </Navbar.Link></NavLink>
        <NavLink to={"/about"} className='capitalize'><Navbar.Link className='capitalize'>About</Navbar.Link></NavLink>
        <Navbar.Link href="#productlist" className='capitalize'>product list</Navbar.Link>
        <NavLink to={'/blogs'}><Navbar.Link className='capitalize'>Blogs</Navbar.Link></NavLink>
        <Navbar.Link href="#contact" className='capitalize'>Contact Us</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}