import React from 'react';

//intersection observer hook
import {useInView} from 'react-intersection-observer'

//variant
import {fadeIn} from '../variants'

//image
import image from '../assets/services.png' 

const About = () => {
  const [ref,inVIew] = useInView({
    threshold: 0.5,
  });
  return (
  <section className=''  id='about' ref={ref}>
      <div className=''>
        {/*Texto*/}
        <div className=''>
          <h2 className='about-me-title text-accent text-center'>About me</h2>
          <h3 className=' h3 mb-4'>Academic education</h3>
          <div className='about-me-items'>
          <p className='mb-6 text-about_me'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> 
            Lorem Ipsum has been the industry's<br></br> 
            standard dummy text ever since the 1500s, when an unknown.
          </p>
          <div>
        {/*Imagem*/}
        <div className='img_about'>
          <img src={image} alt='foto'/>
          </div>
          </div>
          <div className='contact-about'> 
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </div>
          </div>
        </div>
        </div> 
      </div>
  </section>
)};

export default About;
