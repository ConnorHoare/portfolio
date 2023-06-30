import React from 'react'
import Image from 'next/image'

import { CarRentDesktop } from '../../../assets'

const page = () => {
  return (
    <div className=''>

      <div className='flex justify-center py-14 bg-grey-2 dark:bg-grey-5'>
        <div className='flex flex-col justify-center items-center bg-case-studies-banner bg-no-repeat bg-cover bg-center bg-fixed h-96 p-16 rounded'>
          <div className='flex flex-col items-center text-center'>
            <p className='text-white font-bold text-6xl'>Recent Case Studies</p>
            <p className='text-white font-light text-2xl'>Diving Deep into Our Most Recent Projects: Insights, Challenges and Triumphs</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col py-8'>
        <div className='flex justify-center gap-4'>
          
          <div className='flex-col'>
            <div className='bg-pink-1 pt-8 rounded'>
              <div className='px-6'>
                <Image src={CarRentDesktop} />
              </div>
            </div>
            <div className='px-6 py-4'>
              <p className='font-bold text-2xl text-purple-2 dark:text-white py-2'>Morrent</p>
              <p className='font-light text-purple-3 dark:text-grey-3'>Car Rental Application</p>
            </div>
          </div>

          <div className='flex-col'>
            <div className='bg-pink-2 pt-8 rounded'>
              <div className='px-6'>
                <Image src={CarRentDesktop} />
              </div>
            </div>
            <div className='px-6 py-4'>
              <p className='font-bold text-2xl text-purple-2 py-2 dark:text-white'>Morrent</p>
              <p className='font-light text-purple-3 dark:text-grey-3'>Car Rental Application</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default page