import React from 'react'
import Image from 'next/image'

import { CarRentDesktop, CarRentMobile, lineDecoration } from '../../../../assets'

const page = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col'>
        <div>
          <p>WEB DEV PROJECT</p>
        </div>
        <div>
          <p>MORENT - A Car Rental Project</p>
        </div>
        <div className='flex'>
          <Image src={CarRentDesktop} />
          <Image src={CarRentMobile} />
        </div>
        <div className='flex'>
          <div className='flex'>
            <p>Demo Site</p>
            <Image src={lineDecoration} />
          </div>
          <div className='flex'>
            <p>Source Code</p>
            <Image src={lineDecoration} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default page