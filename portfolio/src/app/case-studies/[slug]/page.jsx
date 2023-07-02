import React from 'react'
import Image from 'next/image'

import { BullseyeIcon, CarImage, CarRentDesktop, CarRentFigma, CarRentMobFull, ColorCssIcon, ColorExpressIcon, ColorGitIcon, ColorGithubIcon, ColorHtmlIcon, ColorMongoDbIcon, ColorNextIcon, ColorNodejsIcon, ColorReactIcon, ColorReduxIcon, ColorTailwindIcon, ColorTypescriptIcon, DefinitionIcon, DeliveryIcon, DevlopmentIcon, JobitFigma, PlanningIcon, ShortBlueLineIcon, TickIcon, UserFlowIcon, UserFlowImage } from '../../../../assets'

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

      <div className='flex flex-col px-24 py-12 space-y-8'>
        <div className='flex-col w-1/2 pl-6'>
          <Image src={UserFlowIcon} height={75} width={75} />
          <div className='flex-col pl-4 space-y-4'>
            <p className='font-bold text-4xl'>User Flow</p>
            <p className='text-blue-2'>In order to design the best experience, I've looked at the possible paths the uesr might take during their journey and examined what happens during each step. I usually create a map in Figma to get a detailed view of the User Flow</p>
          </div>

        </div>
        <div className='w-full'>
          <Image src={UserFlowImage} style={{ objectFit: 'fill' }} />
        </div>
      </div>

      <div className='flex justify-around items-center bg-grey-6 py-12'>
        <div className='flex flex-col w-full'>
          <div className='text-left w-full self-start px-36'><p className=' text-sm font-bold text-blue-1'>IMAGES</p></div>
          <div className='text-left w-full px-36'><p className=' text-4xl font-bold'>Product</p></div>
          <div className='flex justify-center w-full py-12'>
            <div className='flex-col'>
              <div className='flex flex-row justify-center items-center'>
                <div>
                  <Image src={CarRentDesktop} />
                </div>
                <div>
                  <Image src={CarRentMobFull} />
                </div>
              </div>
              <div className='text-center'> ... </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center w-full px-36'>
            <p className='font-semibold text-blue-1'>See Demo site</p>
            <Image src={ShortBlueLineIcon} />
          </div>
        </div>
      </div>

      <div className='flex justify-around items-center py-12'>
        <div className='flex flex-col w-full'>
          <div className='text-left w-full self-start px-36'><p className=' text-sm font-bold text-blue-1'>LEARNINGS & CHALLENGES</p></div>
          <div className='text-left w-full px-36'><p className=' text-4xl font-bold'>Takeaways</p></div>

          <div className='mt-12 flex flex-col bg-grey-6 rounded mx-36 p-12 space-y-4'>
            <p className='font-bold text-green-2'>LEARNINGS</p>
            <div className='flex flex-row items-center gap-2'>
              <Image src={TickIcon} />
              <p className='text-purple-3'>Gained Extensive Knowledge of full authentication and authorization implemnetation, including the use of industry-standard security protocols such as JSON Web Tokens (JWT). </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Image src={TickIcon} />
              <p className='text-purple-3'>Sharpened my backend skills, specifically in potimizing database queries, improving performance, and handling server-side logic. </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Image src={TickIcon} />
              <p className='text-purple-3'>Learned how to properly handle files, including file upload, storage, and retrieval, ensuring that the app's data is organized and easily accessible while keeping it secure. </p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Image src={TickIcon} />
              <p className='text-purple-3'>Acquired proficiency in NextJS and implemented various featuers utilizing industry-standard best practices. </p>
            </div>
          </div>

          <div className='mt-12 flex flex-col bg-grey-6 rounded mx-36 p-12 space-y-4'>
            <p className='font-bold text-red-1'>CHALLENGES</p>
            <div className='flex flex-row items-center gap-2'>
              <Image src={BullseyeIcon} />
              <p className='text-purple-3'>As we developed Morent, our team encountered various obstacles. One of our biggest challenges was choosing the right tools and technologies for the project.</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Image src={BullseyeIcon} />
              <p className='text-purple-3'>We conducted brainstorming and carefully weighed our options before making a decision. Furthermore, using NextJS was a new experience for us and we encountered difficulties while implementing its features. Finally, we had to work under time constraints, which added pressure to the project.</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <Image src={BullseyeIcon} />
              <p className='text-purple-3'>However, we collaborated effectively to overcome these obstacles and ultimately delivered a high-quality product within the given timeline.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-around items-center py-12'>
        <div className='flex flex-col w-full'>
          <div className='text-left w-full self-start px-36'><p className=' text-sm font-bold text-blue-1'>PROJECTS</p></div>
          <div className='text-left w-full px-36'><p className=' text-4xl font-bold'>Other Case Studies</p></div>
          <div className='flex flex-row justify-between px-36 py-8'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col">
              <div className="h-64 relative flex-grow">
                <Image
                  src={JobitFigma}
                  style={{ objectFit: 'cover' }}
                  className="w-full"
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-2xl mb-2 text-blue-1">Jobit</div>
                <p className="text-blue-2 text-base">Jobit, a web app made with Reacy and Jsearch API, links developers to millions of job openings by location emploeyment type, level and salary</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a className="inline-block bg-blue-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center">See Case Study</a>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col">
              <div className="h-64 relative flex-grow">
                <Image
                  src={JobitFigma}
                  style={{ objectFit: 'cover' }}
                  className="w-full"
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-2xl mb-2 text-blue-1">Jobit</div>
                <p className="text-blue-2 text-base">Jobit, a web app made with Reacy and Jsearch API, links developers to millions of job openings by location emploeyment type, level and salary</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a className="inline-block bg-blue-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center">See Case Study</a>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col">
              <div className="h-64 relative flex-grow">
                <Image
                  src={JobitFigma}
                  style={{ objectFit: 'cover' }}
                  className="w-full"
                />
              </div>
              <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-2xl mb-2 text-blue-1">Jobit</div>
                <p className="text-blue-2 text-base">Jobit, a web app made with Reacy and Jsearch API, links developers to millions of job openings by location emploeyment type, level and salary</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <a className="inline-block bg-blue-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center">See Case Study</a>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>

  )
}

export default page;