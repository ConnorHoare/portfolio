import React from 'react'
import Image from 'next/image'
import { heroLight, next, lineDecoration } from '../assets'

const HeroSection = () => {
    return (
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
    )
}

export default HeroSection