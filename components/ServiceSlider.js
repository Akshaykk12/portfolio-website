import React, { useEffect } from 'react';

import{
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
}from 'react-icons/rx'

// data

export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Machine Learning & AI Solutions',
    description: 'Building intelligent systems, custom ML models, automation workflows, and data-driven applications.',
  },
  {
    icon: <RxDesktop />,
    title: 'Java Full-Stack Development',
    description: 'Developing scalable full-stack applications using Java, Spring Boot, REST APIs, and modern front-end frameworks.',
  },
  {
    icon: <RxRocket />,
    title: 'Cloud & DevOps Engineering',
    description: 'Implementing CI/CD pipelines, Docker, Kubernetes, cloud deployments, and automation for reliability and scale.',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'Specializing in responsive, high-performance, and modern websites tailored to your business needs.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive, modern, and user-centric digital experiences for web and mobile platforms.',
  },
  {
    icon: <RxReader />,
    title: 'Mobile Application Development (Flutter)',
    description: 'Building fast, beautiful, and cross-platform mobile applications using Flutter for Android and iOS.',
  },
];



const ServiceSlider = () => {

  useEffect(() => {
    document.documentElement.lang = 'en';
    document.title = 'Services';
    return () => {
      document.documentElement.removeAttribute('lang');
    };
  }, []);

  return (
    <div className='max-w-5xl mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 min-h-0'>
        {serviceData.map((item, index) => (
          <div
            key={index}
            className='bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] rounded-lg p-6 flex flex-col justify-between min-h-0 group cursor-pointer'
          >
            <div>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-3 text-lg font-semibold text-black'>{item.title}</div>
              <p className='text-sm leading-normal text-black'>{item.description}</p>
            </div>
            <div className='text-3xl text-black mt-6 self-end'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
