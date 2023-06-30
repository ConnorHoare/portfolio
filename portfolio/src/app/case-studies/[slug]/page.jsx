import React from 'react'
import Image from 'next/image'

import { CarImage, CarRentDesktop, CarRentFigma, CarRentMobFull, ColorCssIcon, ColorExpressIcon, ColorGitIcon, ColorGithubIcon, ColorHtmlIcon, ColorMongoDbIcon, ColorNextIcon, ColorNodejsIcon, ColorReactIcon, ColorReduxIcon, ColorTailwindIcon, ColorTypescriptIcon, DefinitionIcon, DeliveryIcon, DevlopmentIcon, PlanningIcon, ShortBlueLineIcon, UserFlowIcon, UserFlowImage } from '../../../../assets'

const techStackIcon = [
  <Image src={ColorCssIcon} width={125} />,
  <Image src={ColorExpressIcon} width={125} />,
  <Image src={ColorGithubIcon} width={125} />,
  <Image src={ColorGitIcon} width={125} />,
  <Image src={ColorHtmlIcon} width={125} />,
  <Image src={ColorMongoDbIcon} width={125} />,
  <Image src={ColorNextIcon} width={125} />,
  <Image src={ColorNodejsIcon} width={125} />,
  <Image src={ColorReactIcon} width={125} />,
  <Image src={ColorReduxIcon} width={125} />,
  <Image src={ColorTailwindIcon} width={125} />,
  <Image src={ColorTypescriptIcon} width={125} />
]
const page = () => {
  return (
    <div>

      <div className='flex justify-center py-6'>
        <div className='flex flex-col space-y-8'>
          <div className='text-center'>
            <p className='text-blue-1 font-bold '>WEB DEV PROJECT</p>
          </div>
          <div className='text-center'>
            <p className='font-bold text-6xl text-blue-1'>MORENT - A Car Rental Project</p>
          </div>
          <div className='flex items-center justify-around'>
            <Image src={CarRentDesktop} />
            <Image src={CarRentMobFull} />
          </div>
          <div className='flex justify-around'>
            <div className='flex gap-4'>
              <p className='font-bold text-lg text-blue-1'>Demo Site</p>
              <Image src={ShortBlueLineIcon} className='' />
            </div>
            <div className='flex gap-4'>
              <p className='font-bold text-lg text-blue-1'>Source Code</p>
              <Image src={ShortBlueLineIcon} />
            </div>
          </div>
        </div>
      </div>

      <div className='flex bg-grey-6 justify-around p-10'>
        <div className='flex-col space-y-3'>
          <p className='font-bold text-black-1 text-sm'>MY ROLE</p>
          <p className='font-bold text-grey-3 text-2xl'>Software Engineer</p>
        </div>
        <div className='flex-col space-y-3'>
          <p className='font-bold text-black-1 text-sm'>START DATE</p>
          <p className='font-bold text-grey-3 text-2xl'>24/01/2023</p>
        </div>
        <div className='flex-col space-y-3'>
          <p className='font-bold text-black-1 text-sm'>END DATE</p>
          <p className='font-bold text-grey-3 text-2xl'>02/03/2023</p>
        </div>
      </div>

      <div className='flex justify-around'>
        <div className='flex-col p-24 space-y-8'>
          <div className='flex-col space-y-2'>
            <p className='font-bold text-blue-1 text-sm'>TECHNOLOGIES USED</p>
            <p className='font-bold text-4xl'>Tech Stack</p>
          </div>
          <div className='flex gap-4 flex-wrap'>
            {techStackIcon.map((icon, i) => (
              <div className=''>
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-grey-6'>
        <div className='space-y-5 py-24 px-48 text-4xl text-blue-2'>
          <p>
            Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenitent pickup and drop-off location options and a comprehensive list of available cars.
          </p>
          <p>
            My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles.
          </p>
          <p>
            Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, we've created an intuitive and user-friendly MVP verisoin of the platform that will make renting a car a breeze.
          </p>
        </div>
      </div>

      <div className='flex justify-center p-44'>
        <div className='flex-col space-y-10'>
          <div className='flex-col space-y-11 border-blue-1 border p-16'>
            <div className=''>
              <p className='text-blue-1 text-sm font-bold'>PROBLEM</p>
              <p className='font-bold text-4xl'>Problem Statement</p>
            </div>
            <div>
              <p className='text-blue-2 text-3xl'>
                One of the main problems that people face when looking to rent a car is the hassle ofinding a reliable and uesr-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitbale platform to list their cars and manage their rentals.
              </p>
            </div>
          </div>
          <div className='rounded flex justify-center'>
            <Image src={CarImage} />
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='flex-col w-full'>
          <div className='bg-blue-1 py-8'>
            <p className='text-white text-center font-bold text-lg'>HIGH-FIDELITY FIGMA DESIGN</p>
          </div>
          <div className=''>
            <Image src={CarRentFigma} style={{ objectFit: 'cover' }} className='w-full h-[800px]' />
          </div>
        </div>
      </div>

      <div className='flex flex-col w-full py-24 px-24'>
        <div className='pb-12'>
          <p className='text-center font-bold text-3xl'>My Process</p>
        </div>
        <div className='flex flex-row justify-around '>
          <div className='flex-col space-y-4'>
            <Image src={DefinitionIcon} />
            <p className='text-center font-bold'>Definition</p>
          </div>
          <div className='flex-col space-y-4'>
            <Image src={PlanningIcon} />
            <p className='text-center font-bold'>Planning</p>
          </div>
          <div className='flex-col space-y-4'>
            <Image src={DevlopmentIcon} />
            <p className='text-center font-bold'>Development</p>
          </div>
          <div className='flex-col space-y-4'>
            <Image src={DeliveryIcon} />
            <p className='text-center font-bold'>Delivery</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
          <div className='flex-col'>
              <Image src={UserFlowIcon}/>
              <p className='font-bold text-4xl'>User Flow</p>
              <p className='text-blue-2'>In order to design the best experience, I've looked at the possible paths the uesr might take during their journey and examined what happens during each step. I usually create a map in Figma to get a detailed view of the User Flow</p>
          </div>
          <div>
            <Image src={UserFlowImage} />
          </div>
      </div>

    </div>
  )
}

export default page