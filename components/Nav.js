import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

//  links
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'projects', path: '/work', icon: <HiViewColumns /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];


const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Navigation Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  return (
    <nav className='flex flex-col items-center xl:justify-center 
                    gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
      
      <div className='flex xl:flex-col items-center justify-between xl:justify-center
                      w-full gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] xl:h-max py-0  xl:py-8 
                      backdrop-blur-sm backdrop-filter
                      text-3xl xl:text-xl 
                      xl:rounded-full bg-opacity-16 rounded-lg 
                      xl:border xl:border-[#232323] shadow-md'>
        {navData.map((linkItem, index) => {
          return (
            <Link href={linkItem.path} key={index} as={linkItem.path}>

              <div className={` ${linkItem.path === pathname ? 'text-accent' : '' }
                                relative flex items-center group 
                                text-black/70 hover:text-accent 
                                transition-all duration-300` }>
                <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                  <div className=' bg-white 
                                    relative flex items-center
                                    p-[6px] rounded-[3px]
                                    text-primary '>

                    <div className='text-[12px] leading-none font-semibold capitalize'>{linkItem.name}</div>
                    <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                  </div>
                </div>
                {linkItem.icon}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
