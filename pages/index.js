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
    <div className="hidden xl:flex xl:col-span-5 items-center justify-center pointer-events-none px-6">
      <div className="w-[42vw] max-w-[480px] aspect-square">
        <div className="w-full h-full">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full h-full relative">
      <div className="container mx-auto min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-[#252422] relative text-[clamp(28px,4vw,56px)]"
          >
            {'Hello, I am '}
            <span className="text-accent">{'Akshay'}</span>
          </motion.h1>

          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 text-black/90 text-[clamp(14px,2.2vw,18px)]"
          >
            {"Welcome to my space. I build around the things that excite me: AI/ML, System design, and modern backend engineering. My toolkit includes Java, Spring Boot, microservices, AWS, DevOps, and a growing love for clean interfaces and human-focused design."}
            <br />
            {"I enjoy creating small things that feel meaningful — hoping they one day become something big."}
          </motion.p>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center"
          >
            {/* <ProjectsBtn /> */}
          </motion.div>
        </div>
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
    <div className="min-h-screen h-screen bg-[#d5d7d9] overflow-hidden">
      <Head>
        <meta name="description" content="This is Home page with a Hero section." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="md:hidden flex justify-center py-6">
        <div className="w-[70vw] max-w-[360px] aspect-square">
          <Avatar />
        </div>
      </div>

      <div className="relative min-h-screen grid items-center py-12 xl:py-0 grid-cols-1 xl:grid-cols-12">
        <div className="xl:col-span-7 flex items-center justify-center px-6">
          <Hero />
        </div>

        <VisualPanel />
      </div>
    </div>
  );
};

export default Home;