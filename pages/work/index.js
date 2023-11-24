import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import Head from 'next/head';


import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import React, { useEffect } from 'react';

const Work = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Projects';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <div className=' h-full bg-[#d5d7d9]  md:py-24 lg:py-32 xl:py-36 py-26 flex items-center overflow-auto'>
      <Head>
        <meta name="description" content="Here are my all the projects." />
      </Head>

    <div className=' xl:px-[170px]  '>
      <Circles />
      <div className='container  md:px-8 sm:px-0 lg:px-12 xl:px-16 justify-center relative px-10'>
        <div className='flex flex-col xl:flex-row gap-x-8 justify-center'>
          <div className=' text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 my-10 sm:px-0 md:mb-0 md:my-10 w-[300px] justify-center bg-white xl:bg-transparent ' >
            <motion.h2 variants={fadeIn('up', 0.3)} initial='hidden' animate='show' exit='hidden' className='h2 xl:mt-8 text-black'>
              My Projects<span className=' text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn('down',0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-md md:max-w-xl mx-auto md:mx-0 mb-6 md:ml-16 text-black/90">
            Explore a curated selection of projects that <span className=' text-accent'>reflect my passion</span> for crafting engaging and functional solutions. Each project is a testament to my commitment to <span className=' text-accent'>excellence and innovation</span> in the digital space.
            </motion.p>
          </div>
          <motion.div variants={fadeIn('down', 0.6)} initial='hidden' animate='show' exit='hidden' className=' w-full xl:max-w-[65%] xl:
          xl:px-6 md:px-0'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
    </div>
  );
};

export default Work;