import React from 'react';

//imagens
//import Logo from '../assets/eu.png'

//icons 
//eimport {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#'>
         {/* <img src={Logo} alt=''></img> */}
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
        {/* redes socias
        <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
          <a href='#'>
            <FaGithub/>
            </a>
            </div> */}
      </div>
    </div>
  </header>;
};

export default Header;
