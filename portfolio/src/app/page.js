'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import {
  next, heroDark, heroLight, lineDecoration,
  cssIcon, expressIcon, gitIcon, githubIcon,
  htmlIcon, jsIcon, mongodbIcon, muiIcon,
  nodejsIcon, reactIcon, reduxIcon,
  tailwindIcon, typescriptIcon, DarkCssIcon, DarkExpressIcon,
  DarkGitIcon, DarkGithubIcon, DarkHtmlIcon, DarkJsIcon,
  DarkMongodbIcon, DarkMuiIcon, DarkNextIcon, DarkNodeJsIcon,
  DarkReactIcon, DarkReduxIcon, DarkTailwindIcon, DarkTypescriptIcon, webDesignIcon,
  FrontEndDevIcon,
  BackEndDevIcon,
  WebOptimisationIcon,
  CarRentDesktop,
  WhiteLineDecoration,
  CarRentMobile,
  JobitDesktop,
  JobitMobile,
  DarkWebDesignIcon,
  DarkBackendDevIcon,
  DarkWebOptimizationIcon
} from '../../assets';
import { useTheme } from 'next-themes';
import ServiceCard from '../../components/ServiceCard';

const lightSkillIcons = [
  { src: reactIcon, height: 150, width: 150, alt: 'icon' },
  { src: next, height: 150, width: 150, alt: 'icon' },
  { src: cssIcon, height: 150, width: 150, alt: 'icon' },
  { src: expressIcon, height: 150, width: 150, alt: 'icon' },
  { src: gitIcon, height: 150, width: 150, alt: 'icon' },
  { src: githubIcon, height: 150, width: 150, alt: 'icon' },
  { src: htmlIcon, height: 150, width: 150, alt: 'icon' },
  { src: jsIcon, height: 150, width: 150, alt: 'icon' },
  { src: mongodbIcon, height: 150, width: 150, alt: 'icon' },
  { src: muiIcon, height: 150, width: 150, alt: 'icon' },
  { src: nodejsIcon, height: 150, width: 150, alt: 'icon' },
  { src: reduxIcon, height: 150, width: 150, alt: 'icon' },
  { src: tailwindIcon, height: 150, width: 150, alt: 'icon' },
  { src: typescriptIcon, height: 150, width: 150, alt: 'icon' }
];

const darkSkillIcons = [
  { src: DarkReactIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkNextIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkCssIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkExpressIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkGitIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkGithubIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkHtmlIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkJsIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkMongodbIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkMuiIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkNodeJsIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkReduxIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkTailwindIcon, height: 150, width: 150, alt: 'icon' },
  { src: DarkTypescriptIcon, height: 150, width: 150, alt: 'icon' }
];

export default async function Home() {

  const { theme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [theme])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-grey-2 dark:bg-black-1">
      <div className='flex p-24'>
        <div className='flex-col space-y-4'>
          <div>
            <p className='text-[16px] text-blue-1 font-semibold self-start dark:text-blue-3'>HI, I AM CONNOR HOARE</p>
          </div>
          <div>
            <p className='text-bold text-5xl self-start text-black-1 dark:text-white'>Professional Web Developer based in UK</p>
          </div>
          <div>
            <p className='text-[16px] text-grey-1 dark:text-grey-3'>
              Transforming the web one line of code at a time: Crafting cutting-edge digital experiences with precision, passion and a profound commitment to excellence
            </p>
          </div>
          <div className='flex items-center justify-between md:w-1/2'>
            <div>
              <button className='py-4 px-2 md:py-5 md:px-3 bg-blue-1 dark:bg-blue-3 rounded-3xl font-semibold text-white text-lg'>Contact us</button>
            </div>
            <div className='flex gap-3'>
              <Image src={next} height={30} width={30} alt='social icon' />
              <Image src={next} height={30} width={30} alt='social icon' />
              <Image src={next} height={30} width={30} alt='social icon' />
            </div>
            <div className='hidden md:flex'>
              <Image src={lineDecoration} />
            </div>
          </div>
        </div>
        <div className='hidden md:flex'>
          <Image src={heroLight} />
        </div>
      </div>

      <div className='flex-col px-24 py-8 bg-white dark:bg-black-1'>
        <div className='flex justify-around relative pb-4'>
          <p className='text-black-1 z-10 font-bold text-4xl dark:text-white'>My Skills</p>
          <div className='absolute z-0 bg-yellow-1 py-4 px-8 right-[50%] top-1' />
        </div>
        {!isDarkMode && (
          <div className='flex items-center gap-2 flex-wrap justify-around'>
            {
              lightSkillIcons.map((icon, index) => (
                <div className='flex-shrink-0' key={index}>
                  <Image src={icon.src} height={icon.height} width={icon.width} alt={icon.alt} />
                </div>
              ))
            }
          </div>
        )}

        {isDarkMode && (
          <div className='flex items-center gap-2 flex-wrap justify-around'>
            {
              darkSkillIcons.map((icon, index) => (
                <div className='flex-shrink-0' key={index}>
                  <Image src={icon.src} height={icon.height} width={icon.width} alt={icon.alt} />
                </div>
              ))
            }
          </div>
        )}
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

        <div className='flex bg-blue-3 py-10 rounded gap-6'>
          <div className='flex-col pl-12'>
            <p className='font-bold text-5xl text-white'>Morrent - A Car Rental Application</p>
            <div className='flex gap-4 py-6 items-center'>
              <div className='bg-grey-4 p-3 rounded text-white font-semibold'>Next Js</div>
              <div className='bg-grey-4 p-3 rounded text-white font-semibold'>MongoDB</div>
            </div>
            <div className='flex items-center gap-6'>
              <a className='flex flex-row items-center gap-6' href='/case-studies/0d14a4ed-4d9b-4f28-a097-04b776c80c01'>
                <p className='text-white'>See Detail Project</p>
                <div><Image src={WhiteLineDecoration} alt='line' /></div>
              </a>
            </div>
          </div>
          <div className='hidden md:flex justify-between items-center box-border overflow-hidden pl-20'>
            <Image src={CarRentDesktop} className='flex' alt='project image' />
            <Image src={CarRentMobile} className='flex self-center' alt='project image' />
          </div>
        </div>

        <div className='flex bg-green-1 py-10 rounded gap-6'>
          <div className='hidden md:flex justify-between items-center box-border overflow-hidden pr-36'>
            <Image src={JobitDesktop} className='flex' alt='project image' />
            <Image src={JobitMobile} className='flex ' alt='project image' />
          </div>
          <div className='flex-col px-12'>
            <p className='font-bold text-5xl text-white'>Jobit - A Job Finding Application</p>
            <div className='flex gap-4 py-6 items-center'>
              <div className='bg-grey-4 p-3 rounded text-white font-semibold'>Next Js</div>
              <div className='bg-grey-4 p-3 rounded text-white font-semibold'>MongoDB</div>
            </div>
            <div className='flex flex-row items-center gap-6'>
              <a className='flex flex-row items-center gap-6' href='/case-studies/646f0e9f-9148-4272-8648-d4520ecf9b95'>
                <p className='text-white'>See Detail Project</p>
                <div><Image src={WhiteLineDecoration} alt='line' /></div>
              </a>
            </div>
          </div>
        </div>

        <div className='items-center flex justify-around'>
          <a href='/case-studies' className="py-2 px-4 bg-blue-1 dark:bg-blue-3 rounded-full text-white">See More Case Studies</a>
        </div>

      </div>
    </main>
  )
}
