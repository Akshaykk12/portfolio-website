import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
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
    <div className='min-h-screen bg-[#d5d7d9] flex items-center justify-center'>
      <Head>
        <meta
          name='description'
          content='Here are my all the projects.'
        />
      </Head>

      <div className='xl:px-[170px]'>
        <Circles />
        <div className='flex flex-col items-center justify-center relative md:px-8 sm:px-0 lg:px-12 xl:px-16 px-10'>
          <div className='flex flex-col xl:flex-row gap-x-8 justify-center overflow-y-auto'>
            <div className='text-center flex flex-col justify-center xl:w-[30vw] w-[300px] lg:text-left'>
              <motion.h2
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 text-black'
              >
                My Projects<span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('down', 0.3)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='max-w-md md:max-w-xl mx-auto md:mx-0 mb-6 md:ml-16 text-black/90'
              >
                Explore a curated selection of projects that{' '}
                <span className='text-accent'>reflect my passion</span> for
                crafting engaging and functional solutions. Each project is a
                testament to my commitment to{' '}
                <span className='text-accent'>excellence and innovation</span>{' '}
                in the digital space.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full xl:max-w-[65%] xl:px-6 md:px-0'
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;