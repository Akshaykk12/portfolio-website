import Link from "next/link";
import React, { useEffect } from 'react';

// data


const workSlides = {
  slides: [
    {
      images: [
        {
          title: "AvaWatch-",
          description: "Avalanche Prone Area Detection System",
          path: "/AvaWatch%20Banner.png"
        },
        {
          title: 'LeadX-',
          description: 'Gives you financial scheme recommendations.',
          path: '/LeadXBanner.png',
        },
        {
          title: 'Face Changer-',
          description: 'Will swap faces of the two images.',
          path: '/FaceChangerBanner.png',
        },
        {
          title: 'Swot Analyzer-',
          description: 'Will do SWOT analysis for you.',
          path: '/SWOTBanner.png',
        },
        
          // {
          //   title: 'Sign Language Detection-',
          //   description: 'Will detect sign language.',
          //   path: '/ActionDetection.png',
          // },
      ],
    },
  ],
};
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Pagination } from 'swiper';

import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image';

const WorkSlider = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Work Slider Comp';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);
  
  return (
    <Swiper
      spaceBetween={10} 
      pagination={{
        clickable: true,
      }}
      modules={[ Pagination]}
      className=' h-[280px] sm:h-[480px]'
    >
    {workSlides.slides.map((slide, index) =>{
      return (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 h-[180px] w-[300px] xl:h-[480px] xl:w-[680px]
                          cursor-pointer overflow-scroll '>
            {slide.images.map((image, index)=> {
              return (
                <div className='relative  items-center justify-center 
                                rounded-lg overflow-hidden group ' key={index}>
                <h7 className='relative items-center justify-center text-accent hidden lg:block font-bold'>{image.title}<h9 className=" text-[#121212] font-light">{image.description}</h9> </h7>
                  {/* <div  className=' flex items-center justify-center relative overflow-hidden group top-2'>
                    <Image src={image.path} width={500} height={250} alt="" />
                    
                    <div className='absolute 
                                    inset-0 
                                    bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] 
                                    opacity-0 group-hover:opacity-80 
                                    transition-all duration-700 '></div>
                    <div className='absolute 
                                    bottom-0 items-end
                                    translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                      <div className='flex items-center 
                                      gap-x-2 
                                      text-sm xl:text-[13px] tracking-[0.2em]'>
                        <Link href={'https://github.com/Akshaykk12/'} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className=" hover:text-accent text-black
                                          transition-all duration-300 ">
                          <div className=' delay-200'>Go to </div>
                          <div className=' translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Github</div>
                          <div className=' text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                          <div className=' delay-200'>Go to </div>
                          <div className=' translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Github</div>
                        </Link>
                      </div>
                    </div>
                  </div> */}
                  <div className='relative overflow-hidden group'>
                    <Image 
                      src={image.path} 
                      layout='responsive' 
                      width={500} 
                      height={250} 
                      alt="" 
                      className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    <div className='absolute bottom-0 inset-x-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300'>
                      <div className='flex items-center justify-center gap-x-2 text-sm xl:text-[13px] tracking-[0.2em]'>
                        <Link 
                          href={'https://github.com/Akshaykk12/'} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-accent text-black transition-all duration-300 flex items-center"
                        >
                          <div className='flex items-center gap-x-2'>
                            <div className='delay-200'>Go to </div>
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Github</div>
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </SwiperSlide>
      );
      })
    }
  </Swiper>
  );
};

export default WorkSlider;


