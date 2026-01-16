import Image from "next/image";
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import Head from 'next/head';

import React, { useEffect } from 'react';

import {motion} from 'framer-motion';

import { fadeIn } from '../variants';
import InvisibleBackgroundCursor from '../components/InvisibleBackgroundCursor.js';


const VisualPanel = () => {
  return (
    <div className="w-[1200px] h-[800px] absolute -right-[150px] -bottom-[200px]">
      {/* Visual / particle area (kept minimal here) */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full h-full max-w-[737px] absolute -bottom-5 lg:bottom-26 lg:right-[8%] hidden md:block"
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full h-full bg-gradiant-to-r from-white/10 via-white/30 to-white/10 relative">
      <div className="container mx-auto h-full flex flex-col justify-center items-center xl:items-start xl:pt-20 text-center xl:text-left">
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1 text-[#252422] relative"
        >
          {'Transforming Ideas '}
          <br />
          {'Into '}
          <span className="text-accent">{'Digital Reality'}</span>
        </motion.h1>

        <motion.p
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 xl:px-10 text-black/90"
        >
          {"Hello I'm "}
          <span className="text-accent">{"Akshay Kudalkar"}</span>
          {", a proficient data scientist based in Pune. With a strong expertise in developing a machine learning model and analyzing it."}
        </motion.p>

        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>

        <motion.div
          variants={fadeIn('down', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Akshay Kudalkar';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  return (
    <div className="bg-[#d5d7d9] h-full overflow-auto">
      <Head>
        <meta name="description" content="This is Home page with a Hero section." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <motion.div
        variants={fadeIn('up', 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="md:hidden px-10 pt-20 mt-20 justify-center"
      >
        <Avatar />
      </motion.div>

      <div className="justify-center align-center xl:flex py-24 xl:py-40 relative">
        <VisualPanel />

        <Hero />
      </div>
    </div>
  );
};

export default Home;