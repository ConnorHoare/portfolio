'use client'
import React from 'react'
import Image from 'next/image'
import { createClient } from 'next-sanity'

import { CarRentDesktop } from '../../../../assets'
import { apiVersion, dataset, projectId, useCdn } from '../../../../sanity/env'

const page = ({ projects }) => {
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
          {projects?.length > 0 && (
            <ul>
            {
                projects?.map((project) => (
                  <div className='flex-col'>
                    <div className='bg-pink-1 pt-8 rounded'>
                      <div className='px-6'>
                        <Image src={project.figmaImage} height={300} width={300}/>
                      </div>
                    </div>
                    <div className='px-6 py-4'>
                      <p className='font-bold text-2xl text-purple-2 dark:text-white py-2'>{project.name}</p>
                      <p className='font-light text-purple-3 dark:text-grey-3'>Car Rental Application</p>
                    </div>
                  </div>
                ))
              }
            </ul>
          )}
        </div>
      </div>
    </div>
  )
};

const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: useCdn
});

export async function getStaticProps() {
  
  const projects = await client.fetch(`*[_type == "projects"]`);

  if (!projects.ok) {
    throw new Error('failed to fetch data')
  }

  return {
    props: {
      projects,
    },
  }
}

export default page