import React from 'react';

//icon
import {BsArrowUpRight} from 'react-icons/bs'

// motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants'

// services data 
//proprieties
const services = [
  {
    name: 'Computer engineering student',
    description: 'I am a 4th year computer engineering student at the University of Mindelo.',
    link: 'Learn more'
  },

  {
    name: 'Developer',
    description: 'Future programmer in training, with ambition to learn more and more.',
    link: 'Learn more'
  },

  {
    name: 'Hobbies',
    description: 'I like to train, relax and enjoy life.',
    link: 'Learn more'
  },

]

const Services = () => {
  return <section className='section' id='services'>
    
    <div className='container mx-auto'>

      <div className='flex flex-col lg:flex-row'>
        {/*Text  e image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
          <h2 className='h2 text-accent mb-6' >About me</h2>
          {/* <h3 className='h3-title max-w-[455px] mb-16'>
          Ut dignissim viverra facilisis. Phasellus faucibus lorem sem, eget efficitur erat faucibus
          vitae. 
          </h3> */}
          <button className='btn btn-sm'>See my work</button>
        </motion.div>

        {/*services*/}
        
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'
        >
          {/*services list*/}
          <div>
            {services.map((service,index) => {
              //destructure service
              const {name,description,link} = service;
              return (
              <div className='border-b border-white/20 h-[126px] mb-[38px] flex' key={index}>
                <div className='max-w-[420px]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-4 text-teal-300'>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                    <BsArrowUpRight/>
                  </a>
                  <a href="#" className='text-gradient text-sm'>{link}</a>
                </div>
              </div>
            );   
            }
            )}
          </div>
        </motion.div>
      </div>
    </div>
    
    
    </section>;
};

export default Services;
