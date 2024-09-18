import React, { useState, useEffect } from "react";
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiPowerbi, SiTableau, SiMysql, SiTensorflow, SiKeras, SiJupyter, SiScikitlearn, SiPytorch } from "react-icons/si";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

/* eslint-disable react/jsx-key */

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Machine Learning Engineer',
        icons: [
          <FaPython />,
          <SiTensorflow />,
          <SiKeras />,
          <SiJupyter />,
          <SiScikitlearn />,
          <SiPytorch />,
        ],
      },
      {
        title: 'Web Developer',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'Data Analytics',
        icons: [<SiPowerbi />, <SiTableau />, <SiMysql />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Technical Team - DSAII College Club',
        stage: '2022 - 2023',
      },
      {
        title: 'Design Team - Devkraft College Club',
        stage: '2022 - 2023',
      }
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Introduction to Artificial Intelligence - Infosys',
        stage: '2023',
      },
      {
        title: 'Neural Network and Deep Learning - DeepLearning.Ai',
        stage: '2023',
      },
      {
        title: 'Natural Language Processing - Infosys',
        stage: '2023',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'About';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  return (
  <div className="h-full py-32 
                  bg-white/90 
                  text-center xl:text-left 
                  overflow-auto ">
      <Head>
        <meta name="description" 
              content="Detailed description about me." />
        <link rel="icon" 
              href="/favicon.svg" 
              type="image/svg+xml" />
      </Head>

      <div>
        <Circles />
        <motion.div variants={fadeIn('right', 0.2)} 
                    initial='hidden' 
                    animate='show' 
                    exit='hidden' 
                    className=" hidden 
                                xl:flex xl:flex-row-reverse 
                                absolute -bottom-9 -right-[40px] transform-none  w-[400px] ">
          <Avatar />
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

          <div className="flex-1 flex flex-col justify-center 
                          relative py-12 xl:py-[100px]">
            <motion.h2  variants={fadeIn('right', 0.2)} 
                        initial='hidden' 
                        animate='show' 
                        exit='hidden' 
                        className="h2 text-black"><span className="text-accent">Journey</span> Till Now.</motion.h2>
            <motion.p variants={fadeIn('right', 0.4)} 
                      initial='hidden' 
                      animate='show' 
                      exit='hidden' 
                      className="text-black">
              Almost three years ago, I began learning <span className='text-accent'>UI/UX designing</span>  and parallel to that started learning <span className="text-accent">Web Development</span>  and honed my skills. After that, I began my journey into <span className="text-accent">Machine Learning</span>  and <span className="text-accent">Data Analyst</span> by learning and making projects at the same time.
            </motion.p>
            <motion.div variants={fadeIn('right', 0.6)} 
                        initial='hidden' 
                        animate='show' 
                        exit='hidden' 
                        className=" hidden 
                                    md:flex 
                                    md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
              <div className="flex flex-1 
                              xl:gap-x-6 py-0">
                <div className="relative 
                                flex-1 
                                after:w-1px after:h-full 
                                after:bg-white/10 
                                after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl 
                                  font-extrabold text-accent 
                                  mb-2">
                    <CountUp start={0} end={3} duration={10} />+
                  </div>
                  <div className="text-xs text-black uppercase tracking-[1px] leading-[1.4] 
                                  max-w-[100px]">
                    Years of Experience
                  </div>
                </div>
                <div className="relative 
                                flex-1 
                                after:w-1px after:h-full 
                                after:bg-white/10 
                                after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent 
                                  mb-2">
                    <CountUp start={0} end={10} duration={10} />+
                  </div>
                  <div className="text-xs text-black uppercase tracking-[1px] leading-[1.4] 
                                  max-w-[100px]">
                    Finished Projects
                  </div>
                </div>
                <div className="relative 
                                flex-1 
                                after:w-1px after:h-full 
                                after:bg-white/10 
                                after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={200} duration={5} />+
                  </div>
                  <div className="text-xs text-black uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Contributions on Github
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeIn('left', 0.4)} 
                      initial='hidden' 
                      animate='show' 
                      exit='hidden' 
                      className=" flex flex-col 
                                  w-full xl:max-w-[48%] h-[300px]">
            <div className="flex 
                            gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 
                            text-black">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={item.title} // Use the title as a unique key
                  className={`${index === itemIndex && ' text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 '} 
                            cursor-pointer 
                            capitalize xl:text-lg 
                            relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="py-2 xl:py-6 gap-y-2 xl:gap-y-4
                            flex flex-col items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row 
                                                max-w-max gap-x-2 items-center  
                                                text-black/60 
                                                relative">
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex 
                                  gap-x-4">
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={uuidv4()} className="text-2xl text-black">{icon}</div> // Generate unique keys using uuid
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
