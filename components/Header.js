import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import Socials from "../components/Socials";


const Header = () => {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Header Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  
  return (
    <header className=" absolute flex 
                        z-50 w-full px-16 xl:px-0 xl:py-3 xl:h-[90px]
                        items-center 
                        bg-opacity-16 bg-white-300 backdrop-filter backdrop-blur-sm 
                        rounded-lg shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row 
                        justify-between items-center 
                        gap-y-0 pt-0">
          <Link href={'/'}>
            <Image  src={'/aklogo.svg'} 
                    width={100} 
                    height={48} 
                    alt="" 
                    priority= {true}  />
          </Link>
        <Socials/>
        <a  href="https://drive.google.com/file/d/1LlBLxXsd3z8BCvxM7VDRMbHxBFSbbQ-k/view?usp=sharing" 
            target='_blank'>
          <button
            className=" xl:ml-4 px-4 py-2 z-0
                      text-white bg-accent 
                      rounded-md 
                      transition-all duration-300 "
          >
            Resume
          </button>
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
