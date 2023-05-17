import React from 'react';

// no span className='mr-4'

//imagens
import Image from '../assets/eu.png'

//icons 
//import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'

//tipos de animacoes 
import {TypeAnimation} from 'react-type-animation'

//motion
import {motion} from 'framer-motion'

//variantes
import {fadeIn} from '../variants'


const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto text-center'> 
    <div className='text-center'>
      {/* texto */}
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.h1 
        variants={fadeIn('up',0.3)} 
        initial="hidden" 
        whileInView={'show'} 
        viewport={{once: false,amount:0.7}} 
        className='text-[35px] font-bold leading-[0.8] lg:text-[40px]'>LEONARDO SABINO</motion.h1>
      </div >
       <div className='mb-6 text-[36px] lg:text-[20px] font-secondary
       font-semibold uppercase leading-[1]'>
        <span className='text-white' >I AM </span>
        <TypeAnimation sequence={[
          'Computer Engineering Student',
          2000,
          'Passionate about technologies',
          2000,
          'Ambitious and driven',
          2000,
        ]}
         speed={50}
         className='text-accent'
         wrapper='span'
         repeat={Infinity}
        />
       </div>
        {/* imagem*/}
      <div className='img'> 
        <img src={Image} alt =''/>
      </div>
      <p className='mb-8 max-w-max-lg max-auto lg:mx-0'>
          "The biggest problem in computing is not the hardware or the software, it is almost always located between the chair and the monitor."
        </p>
        <div className=''>
        <button className='btn btn-lg'>Contact me</button>
        <a href='#' className='text-gradient btn-link  text-center'> My Portfolio</a>
        </div>
    </div>
    </div>
  </section>;
};

export default Banner;
