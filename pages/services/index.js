import Head from 'next/head';
import ServiceSlider from '../../components/ServiceSlider';
import Circles from '../../components/Circles';

import React, { useEffect } from 'react';


import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Servies';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <div className='min-h-screen bg-[#d5d7d9] sm:px-0 py-12 flex flex-col'>
      <Head>
        <meta name="description" 
              content="Here I present differnet types of services." />
      </Head>
      
      <div className='flex-1 overflow-auto'>
        <Circles />
        <div className='container mx-auto py-8 mt-8 h-screen pb-24 overflow-auto over'>
          <div className='flex flex-col xl:flex-row 
                          gap-x-8 py-20'>
            <div className='text-center 
                            flex flex-col 
                            xl:w-[30vw] lg:text-left mb-4 xl:mb-0  z-40'>
              <motion.h2  variants={fadeIn('up', 0.3)} 
                          initial='hidden' 
                          animate='show' 
                          exit='hidden' 
                          className=' h2 xl:mt-8 relative
                                      text-black  '>
                My Services <span className=' text-accent'>.</span>
              </motion.h2>
              <motion.p variants={fadeIn('down',0.3)} 
                        initial="hidden" 
                        animate="show" 
                        exit="hidden" 
                        className=" mb-4 max-w-[400px] mx-auto lg:mx-0 relative
                                    text-black/90 ">
                Curious about how I can <span className=' text-accent'>assist your business?</span> Here are a few areas where I <span className=' text-accent'>excel</span>, ensuring you receive the best possible outcomes.
              </motion.p>
            </div>
            <div  variants={fadeIn('down', 0.6)} 
                  initial='hidden' 
                  animate='show' 
                  exit='hidden' 
                  className=' w-full xl:max-w-[65%] py-10 xs:w-[200px] z-40'>
              <ServiceSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
