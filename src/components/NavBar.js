import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";



const NavBar = () => {
  
 
  
  return (



    <nav className='border-b-2 border-blue-600 text-center fixed top-0 w-full bg-sky font-semibold text-1xl text-black shadow-md'>
    

      
      <ul>
        <li className=' inline-block pt-2 pb-2 hover:bg-indigo-100  rounded-lg transition duration-500'>
          <Link to='/' className='pl-12 pr-12 font-sans text-lg   '>
            Home
          </Link>
        </li>
        <li className='inline-block pt-2 pb-2 hover:bg-indigo-100   rounded-lg transition duration-500'>
          <Link to='/about' className='pl-12 pr-12 font-sans text-lg '>
            About
          </Link>
        </li>
        <li className='inline-block pt-2 pb-2  hover:bg-indigo-100   rounded-lg transition duration-500'>
          <Link to='/articles-list' className='pl-12 pr-12 font-sans text-lg '
        
          >
            Articles
          </Link>
        </li>
      </ul>
    
    </nav>
  );
};

export default NavBar;
