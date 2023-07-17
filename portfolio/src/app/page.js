'use client'
import { useEffect, useState } from 'react';
import {
  webDesignIcon,
  FrontEndDevIcon,
  BackEndDevIcon,
  WebOptimisationIcon,
  CarRentDesktop,
  CarRentMobile,
  JobitDesktop,
  JobitMobile,
  DarkWebDesignIcon,
  DarkBackendDevIcon,
  DarkWebOptimizationIcon
} from '../../assets';
import { useTheme } from 'next-themes';
import ServiceCard from '../../components/ServiceCard';
import FeaturedProjectCard from '../../components/FeaturedProjectCard';
import SkillSection from '../../components/SkillSection';
import HeroSection from '../../components/HeroSection';

export default async function Home() {

  const { theme } = useTheme();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-grey-2 dark:bg-black-1">
      <HeroSection />
      <div className='flex-col px-24 py-8 bg-white dark:bg-black-1'>
        <div className='flex justify-around relative pb-4'>
          <p className='text-black-1 z-10 font-bold text-4xl dark:text-white'>My Skills</p>
          <div className='absolute z-0 bg-yellow-1 py-4 px-8 right-[50%] top-1' />
        </div>
          <SkillSection isDark={theme === 'dark'} />
      </div>

      <div className='flex-col px-24 py-14 bg-white dark:bg-black-1 '>
        <div className='flex justify-around relative pb-10'>
          <p className='text-black-1 z-10 font-bold text-4xl dark:text-white'>What service do I provide</p>
          <div className='absolute z-0 bg-yellow-1 py-4 px-10 right-[40%] top-3' />
        </div>
        <div className='flex justify-between gap-5  flex-wrap items-center'>
          <ServiceCard
            bgColor="bg-grey-2"
            darkColor="bg-grey-4"
            icon={webDesignIcon}
            darkIcon={DarkWebDesignIcon}
            title="Web Design"
            description="Creating visually appealing and user-friendly website that adapt to different screen sizes and devices."
          />
          <ServiceCard
            bgColor="bg-blue-1"
            darkColor="bg-blue-3"
            textColor="text-white"
            icon={FrontEndDevIcon}
            darkIcon={FrontEndDevIcon}
            title="Front-End Dev"
            description="Implementing the client-side functionality of a website using HTML, CSS and JavaScript."
          />
          <ServiceCard
            bgColor="bg-grey-2"
            darkColor="bg-grey-4"
            icon={BackEndDevIcon}
            darkIcon={DarkBackendDevIcon}
            title="Back-End Dev"
            description="Building the server-side components and functionality if a website using Node.js"
          />
          <ServiceCard
            bgColor="bg-grey-2"
            darkColor="bg-grey-4"
            icon={WebOptimisationIcon}
            darkIcon={DarkWebOptimizationIcon}
            title="Web Optimization"
            description="Improving website performance by optimizing page load times, and minimizing resource usage."
          />
        </div>
      </div>

      <div className='flex-col m-4 space-y-6'>
        <div className='flex justify-around relative py-10'>
          <p className='text-black-1 z-10 font-bold text-4xl dark:text-white'>Featured Projects</p>
          <div className='absolute z-0 bg-yellow-1 py-4 px-10 right-[40%] top-12' />
        </div>

        <FeaturedProjectCard
          title="Morrent - A Car Rental Application"
          tech="Next Js"
          database="MongoDB"
          url="0d14a4ed-4d9b-4f28-a097-04b776c80c01"
          desktopImage={CarRentDesktop}
          mobileImage={CarRentMobile}
          bgColor="bg-blue-3"
        />

        <FeaturedProjectCard
          title="Jobit - A Job Finding Application"
          tech="Next Js"
          database="MongoDB"
          url="646f0e9f-9148-4272-8648-d4520ecf9b95"
          desktopImage={JobitDesktop}
          mobileImage={JobitMobile}
          bgColor="bg-green-1"
        />

        <div className='items-center flex justify-around'>
          <a href='/case-studies' className="py-2 px-4 bg-blue-1 dark:bg-blue-3 rounded-full text-white">See More Case Studies</a>
        </div>

      </div>
    </main>
  )
}
