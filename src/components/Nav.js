import React from 'react';

//para importar os icons

import { BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase,BsChatSquare} from 'react-icons/bs'

//link  

import { Link  } from 'react-scroll'

const Nav = () => {
  return( 
  <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'> 
    <div className='container mx-auto'>
      {/* inside nav */}
      <div className='w-full bg-black/20 h-[60px] backdrop-blur-2x1 
      rounded-full max-w-[350px] mx-auto px-4 flex justify-between 
      items-center text-2x1 text-white/50'>
        <Link to='home' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[45px]] flex item-center
        justify-center' activeClass='active' offset={-200}>
          <BiHomeAlt />
        </Link>
        {/* <Link to='about' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[45px]] flex item-center
        justify-center' activeClass='active'>
          <BiUser />
        </Link  > */}
        <Link to='services' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[45px]] flex item-center
        justify-center' activeClass='active'>
          <BiUser/>
        </Link >
        <Link to='contact' smooth={true} spy={true} className='cursor-pointer w-[50px] h-[45px]] flex item-center
        justify-center' activeClass='active'>
          <BsChatSquare />
        </Link >      
      </div>
    </div>
  </nav>
  );
};

export default Nav;
