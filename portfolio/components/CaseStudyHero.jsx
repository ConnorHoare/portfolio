import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'

import { client } from '../utils'
import { DarkLine, ShortBlueLineIcon } from '../assets'

const builder = imageUrlBuilder(client)
function urlFor(source) {
    return builder.image(source)
}

const CaseStudyHero = ({ data, isDark }) => {
    return (
        <div className='flex flex-col space-y-8'>
            <div className='text-center'>
                <p className='text-blue-1 font-bold dark:text-white'>{data.name}</p>
            </div>
            <div className='text-center'>
                <p className='font-bold text-6xl text-blue-1 dark:text-blue-4'>{data.name}</p>
            </div>
            <div className='md:flex items-center justify-around py-4'>
                <Image src={urlFor(data.productImage).url().toString()} width={700} height={75} className='flex justify-center mx-auto md:mx-0' style={{ objectFit: 'cover' }} />
                <Image src={urlFor(data.mobileProductImage).url().toString()} width={250} height={75} className='hidden md:flex' />
            </div>
            <div className='flex justify-around'>
                <div className='flex gap-4'>
                    <p className='font-bold text-lg text-blue-1 dark:text-blue-4'>Demo Site</p>
                    {isDark ? (
                        <div className='items-center flex'>
                            <Link href={data.demoSiteRef}><Image src={DarkLine} /></Link>
                        </div>
                    ) : (
                        <div className='items-center flex'>
                            <Link href={data.demoSiteRef}><Image src={ShortBlueLineIcon} /></Link>
                        </div>
                    )}
                </div>
                <div className='flex gap-4'>
                    <p className='font-bold text-lg text-blue-1 dark:text-blue-4'>Source Code</p>
                    {isDark ? (
                        <div className='items-center flex'>
                            <Image src={DarkLine} />
                        </div>
                    ) : (
                        <div className='items-center flex'>
                            <Image src={ShortBlueLineIcon} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CaseStudyHero