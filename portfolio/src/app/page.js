'use client'
import Image from 'next/image'
import { next, heroDark, heroLight, lineDecoration } from '../../assets';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-grey-2 dark:bg-black-1">
      <div className='flex'>
        <div className='flex-col space-y-4'>
          <div>
            <p className='text-[16px] text-blue-1 font-semibold self-start dark:text-blue-3'>HI, I AM CONNOR HOARE</p>
          </div>
          <div>
            <p className='text-bold text-5xl self-start'>Professional Web Developer based in UK</p>
          </div>
          <div>
            <p className='text-[16px] text-grey-1 dark:text-grey-3'>
              Transforming the web one line of code at a time: Crafting cutting-edge digital experiences with precision, passion and a profound commitment to excellence
            </p>
          </div>
          <div className='flex items-center justify-between md:w-1/2'>
            <div>
              <button className='py-5 px-3 bg-blue-1 dark:bg-blue-3 rounded-3xl font-semibold text-white text-lg'>Contact us</button>
            </div>
            <div className='flex gap-3'>
              <Image src={next} height={30} width={30} />
              <Image src={next} height={30} width={30} />
              <Image src={next} height={30} width={30} />
            </div>
            <div>
              <Image src={lineDecoration}/>
            </div>
          </div>
        </div>
        <div className='hidden md:flex'>
          <Image src={heroLight}/>
        </div>
      </div>
    </main>
  )
}
