'use client'
import Image from 'next/image'
import { next, heroDark, heroLight, lineDecoration, cssIcon, expressIcon, gitIcon, githubIcon, htmlIcon, jsIcon, mongodbIcon, muiIcon, nodejsIcon, reactIcon, reduxIcon, tailwindIcon, typescriptIcon } from '../../assets';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-grey-2 dark:bg-black-1">
      <div className='flex'>
        <div className='flex-col space-y-4'>
          <div>
            <p className='text-[16px] text-blue-1 font-semibold self-start dark:text-blue-3'>HI, I AM CONNOR HOARE</p>
          </div>
          <div>
            <p className='text-bold text-5xl self-start text-black-1'>Professional Web Developer based in UK</p>
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
              <Image src={lineDecoration} />
            </div>
          </div>
        </div>
        <div className='hidden md:flex'>
          <Image src={heroLight} />
        </div>
      </div>

      <div className='flex-col'>
        <div className='flex justify-around relative'>
          <p className='text-black-1 z-10 font-bold text-4xl'>My Skills</p>
          <div className='absolute z-0 bg-yellow-1 py-4 px-8 right-[50%] top-1' />
        </div>
        <div className='flex items-center gap-2'>
          <div>
            <Image src={reactIcon} height={100} width={100} />
          </div>
          <div>
            <Image src={next} />
          </div>
          <div>
            <Image src={cssIcon} />
          </div>
          <div>
            <Image src={expressIcon} />
          </div>
          <div>
            <Image src={gitIcon} />
          </div>
          <div>
            <Image src={githubIcon} />
          </div>
          <div>
            <Image src={htmlIcon} />
          </div>
          <div>
            <Image src={jsIcon} />
          </div>
          <div>
            <Image src={mongodbIcon} />
          </div>
          <div>
            <Image src={muiIcon} />
          </div>
          <div>
            <Image src={nodejsIcon} />
          </div>
          <div>
            <Image src={reduxIcon} />
          </div>
          <div>
            <Image src={tailwindIcon} />
          </div>
          <div>
            <Image src={typescriptIcon} />
          </div>
        </div>
      </div>
    </main>
  )
}
