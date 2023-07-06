
import React from 'react'
import Image from 'next/image'

import { client, getProjects } from '../../../utils'
import { urlForImage } from '../../../utils/sanity/image.builder'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

const page = async () => {
  const projects = await getProjects();
  // const imageSources = urlForImage(projects?.figmaImage);

  console.log(projects);

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
          {projects.length > 0 && (
            <ul className='flex justify-center gap-4'>
              {
                projects.map((project) => (
                  <Link href={`/case-studies/${project._id}`}>
                    <div className='flex-col'>
                      <div className='bg-pink-1 py-6 rounded'>
                        <div className='px-6'>
                          <Image src={urlFor(project.figmaImage).url().toString()} width={750} height={100} className='h-[500px] rounded' />
                        </div>
                      </div>
                      <div className='px-6 py-4'>
                        <p className='font-bold text-2xl text-purple-2 dark:text-white py-2'>{project.name}</p>
                        <p className='font-light text-purple-3 dark:text-grey-3'>Car Rental Application</p>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </ul>
          )}
        </div>
      </div>
    </div>
  )
};



export default page