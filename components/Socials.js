import Link from "next/link";
import React, { useEffect } from 'react';
import {RiLinkedinBoxLine, RiTwitterLine,  RiGithubLine } from 'react-icons/ri'
import { SiLeetcode } from 'react-icons/si'


const Socials = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Social Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <div className="flex items-center gap-x-5 text-lg xl:pl-[780px]">
    <Link href={'https://github.com/Akshaykk12/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/akshay-kudalkar/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiLinkedinBoxLine />
    </Link>
    <Link href={'https://twitter.com/Akshay12kk'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black">
      <RiTwitterLine />
    </Link>
    <Link href={'https://leetcode.com/u/Akshaykk12/'} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300 text-black" aria-label="LeetCode">
      <SiLeetcode />
    </Link>
    </div>
  );
};

export default Socials;
