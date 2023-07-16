import React from 'react'
import Image from 'next/image'
import { WhiteLineDecoration } from '../assets'

const FeaturedProjectCard = ({title, tech, database, url, desktopImage, mobileImage, bgColor}) => {
  return (
    <div className={`flex ${bgColor} py-10 rounded gap-6`}>
          <div className='flex-col pl-12'>
            <p className='font-bold text-5xl text-white'>{title}</p>
            <div className='flex gap-4 py-6 items-center'>
              <div className='bg-grey-4 p-3 rounded text-white font-semibold'>{tech}</div>
              <div className='bg-grey-4 p-3 rounded text-white font-semibold'>{database}</div>
            </div>
            <div className='flex items-center gap-6'>
              <a className='flex flex-row items-center gap-6' href={`/case-studies/${url}`}>
                <p className='text-white'>See Detail Project</p>
                <div><Image src={WhiteLineDecoration} alt='line' /></div>
              </a>
            </div>
          </div>
          <div className='hidden md:flex justify-between items-center box-border overflow-hidden pl-20'>
            <Image src={desktopImage} className='flex' alt='project image' />
            <Image src={mobileImage} className='flex self-center' alt='project image' />
          </div>
        </div>
  )
}

export default FeaturedProjectCard