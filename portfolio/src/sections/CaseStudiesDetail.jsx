'use client'
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'
import Image from 'next/image'

import { BullseyeIcon, CarImage, CarRentDesktop, CarRentFigma, CarRentMobFull, ColorCssIcon, ColorExpressIcon, ColorGitIcon, ColorGithubIcon, ColorHtmlIcon, ColorMongoDbIcon, ColorNextIcon, ColorNodejsIcon, ColorReactIcon, ColorReduxIcon, ColorTailwindIcon, ColorTypescriptIcon, DarkDefinitionIcon, DarkDeliveryIcon, DarkDevelopmentIcon, DarkLine, DarkPlanningIcon, DarkUserFlowIcon, DarkUserFlowImage, DefinitionIcon, DeliveryIcon, DevlopmentIcon, JobitFigma, PlanningIcon, ShortBlueLineIcon, TickIcon, UserFlowIcon, UserFlowImage } from '../../assets';
import Link from "next/link";
import { client, getProjects } from "../../utils";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
function urlFor(source) {
    return builder.image(source)
}

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


const CaseStudiesDetail = ({ data, projects }) => {

    const { theme } = useTheme();
    const [isDark, setIsDark] = useState(theme === 'dark');


    useEffect(() => {
        if (theme === 'dark') {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, [theme])

    return (
        <div>

            <div className='flex justify-center py-6 dark:bg-black-1'>
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
            </div>

            <div className='md:flex-row flex flex-col bg-grey-6 justify-around p-10 dark:bg-grey-5 space-y-4 md:space-y-0'>
                <div className='flex-col md:space-y-3'>
                    <p className='font-bold text-black-1 text-sm dark:text-white'>MY ROLE</p>
                    <p className='font-bold text-grey-3 text-2xl'>{data.myRole}</p>
                </div>
                <div className='flex-col md:space-y-3'>
                    <p className='font-bold text-black-1 text-sm dark:text-white'>START DATE</p>
                    <p className='font-bold text-grey-3 text-2xl'>{data.startDate}</p>
                </div>
                <div className='flex-col md:space-y-3'>
                    <p className='font-bold text-black-1 text-sm dark:text-white'>END DATE</p>
                    <p className='font-bold text-grey-3 text-2xl'>{data.endDate}</p>
                </div>
            </div>

            <div className='flex justify-around'>
                <div className='flex-col md:p-24 p-10 space-y-8'>
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

            <div className='flex justify-center bg-grey-6 dark:bg-grey-5'>
                <div className='space-y-5 md:py-24 md:px-48 px-10  py-16 text-4xl text-blue-2 dark:text-grey-3'>
                    <p>
                        {data.appDescription}
                    </p>
                </div>
            </div>

            <div className='flex justify-center md:p-44 p-10'>
                <div className='flex-col space-y-10'>
                    <div className='flex-col space-y-11 border-blue-1 border p-16 dark:border-blue-4'>
                        <div className=''>
                            <p className='text-blue-1 text-sm font-bold dark:text-blue-4'>PROBLEM</p>
                            <p className='font-bold text-4xl'>Problem Statement</p>
                        </div>
                        <div>
                            <p className='text-blue-2 text-3xl dark:text-grey-3'>
                                {data.problemStatement}
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex'>
                <div className='flex-col w-full'>
                    <div className='bg-blue-1 py-8 dark:bg-blue-4'>
                        <p className='text-white text-center font-bold text-lg'>HIGH-FIDELITY FIGMA DESIGN</p>
                    </div>
                    <div className=''>
                        <Image src={urlFor(data.figmaImage).url().toString()} height={200} width={10000} style={{ objectFit: 'cover' }} className='w-full' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full md:py-24 md:px-24 p-10'>
                <div className='pb-12'>
                    <p className='text-center font-bold text-3xl'>My Process</p>
                </div>
                <div className='flex md:flex-row flex-col md:space-y-0 space-y-8 justify-around '>
                    <div className='flex-col space-y-4 mx-auto md:mx-0'>
                        {isDark ? (
                            <Image src={DarkDefinitionIcon} />
                        ) : (
                            <Image src={DefinitionIcon} />
                        )}

                        <p className='text-center font-bold dark:text-white md:text-base text-xl'>Definition</p>
                    </div>
                    <div className='flex-col space-y-4 mx-auto md:mx-0'>
                        {isDark ? (
                            <Image src={DarkPlanningIcon} />
                        ) : (
                            <Image src={PlanningIcon} />
                        )}

                        <p className='text-center font-bold dark:text-white md:text-base text-xl'>Planning</p>
                    </div>
                    <div className='flex-col space-y-4 mx-auto md:mx-0'>
                        {isDark ? (
                            <Image src={DarkDevelopmentIcon} />
                        ) : (
                            <Image src={DevlopmentIcon} />
                        )}

                        <p className='text-center font-bold dark:text-white md:text-base text-xl'>Development</p>
                    </div>
                    <div className='flex-col space-y-4 mx-auto md:mx-0'>
                        {isDark ? (
                            <Image src={DarkDeliveryIcon} />
                        ) : (
                            <Image src={DeliveryIcon} />
                        )}

                        <p className='text-center font-bold dark:text-white md:text-base text-xl'>Delivery</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:px-24 md:py-12 space-y-8 '>
                <div className='flex-col md:w-1/2 w-full px-6'>
                    {isDark ? (
                        <Image src={DarkUserFlowIcon} height={75} width={75} />
                    ) : (
                        <Image src={UserFlowIcon} height={75} width={75} />
                    )}

                    <div className='flex-col pl-4 space-y-4'>
                        <p className='font-bold text-4xl'>User Flow</p>
                        <p className='text-blue-2'>In order to design the best experience, I've looked at the possible paths the uesr might take during their journey and examined what happens during each step. I usually create a map in Figma to get a detailed view of the User Flow</p>
                    </div>

                </div>
                <div className='w-full'>
                    {isDark ? (
                        <Image src={urlFor(data.userFlowImages).url().toString()} height={200} width={1000} style={{ objectFit: 'fill' }} />
                    ) : (
                        <Image src={urlFor(data.userFlowImages).url().toString()} height={200} width={1000} style={{ objectFit: 'fill' }} />
                    )}
                </div>
            </div>

            <div className='flex justify-around items-center bg-grey-6 dark:bg-grey-5 py-12'>
                <div className='flex flex-col w-full'>
                    <div className='text-left w-full self-start md:px-36 px-10'><p className=' text-sm font-bold text-blue-1 dark:text-blue-4'>IMAGES</p></div>
                    <div className='text-left w-full md:px-36 px-10'><p className=' text-4xl font-bold dark:text-white'>Product</p></div>
                    <div className='flex justify-center w-full py-12'>
                        <div className='flex-col'>
                            <div className='flex flex-row justify-center items-center'>
                                <div>
                                    <Image src={urlFor(data.mobileProductImage).url().toString()} width={200} height={200} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center w-full px-36 py-6'>
                        <p className='font-semibold text-blue-1 dark:text-blue-4'>Demo Site</p>
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
                </div>
            </div>

            <div className='flex justify-around items-center py-12 dark:bg-black-1'>
                <div className='flex flex-col w-full'>
                    <div className='text-left w-full self-start md:px-36 px-10'><p className=' text-sm font-bold text-blue-1 dark:text-blue-4'>LEARNINGS & CHALLENGES</p></div>
                    <div className='text-left w-full md:px-36 px-10'><p className=' text-4xl font-bold dark:text-white'>Takeaways</p></div>

                    <div className='mt-12 flex flex-col bg-grey-6 rounded md:mx-36 p-10 space-y-4 dark:bg-grey-5'>
                        <p className='font-bold text-green-2'>LEARNINGS</p>

                        <div className='flex flex-row items-center gap-2'>
                            <Image src={TickIcon} />
                            <p className='text-purple-3 dark:text-white'>{data.learnings[0]} </p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src={TickIcon} />
                            <p className='text-purple-3 dark:text-white'>{data.learnings[1]} </p>
                        </div>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src={TickIcon} />
                            <p className='text-purple-3 dark:text-white'>{data.learnings[2]} </p>
                        </div>
                    </div>

                    <div className='mt-12 flex flex-col bg-grey-6 rounded md:mx-36 p-10 space-y-4 dark:bg-grey-5'>
                        <p className='font-bold text-red-1'>CHALLENGES</p>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src={BullseyeIcon} />
                            <p className='text-purple-3 dark:text-white'>{data.challenges[0]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around items-center py-12 dark:bg-grey-5'>
                <div className='flex flex-col w-full'>
                    <div className='text-left w-full self-start md:px-36 px-10'><p className=' text-sm font-bold text-blue-1 dark:text-blue-4'>PROJECTS</p></div>
                    <div className='text-left w-full md:px-36 px-10'><p className=' text-4xl font-bold'>Other Case Studies</p></div>
                        {projects.length > 0 && (
                            <div className='flex md:flex-row flex-col md:justify-between md:px-36 px-10 py-8 space-y-8 md:space-y-0 gap-6 '>
                                {
                                    projects.map((project) => (
                                        <div className="md:max-w-sm w-full rounded overflow-hidden shadow-lg bg-grey-3 flex flex-col dark:bg-grey-7 pb-4 ">
                                                <Image
                                                    src={urlFor(project.figmaImage).url().toString()}
                                                    style={{ objectFit: 'fill' }}
                                                    height={500}
                                                    width={500}
                                                    className='w-full'
                                                />
                                            <div className="px-6 py-4 flex-1">
                                                <div className="font-bold text-2xl mb-2 text-blue-1 dark:text-blue-4">{project.name}</div>
                                                <p className="text-blue-2 text-base dark:text-grey-3">{project.appDescription.slice(0, 100)}</p>
                                            </div>
                                            <div className="px-6 pt-4 pb-2">
                                                <a href={project._id} className="inline-block bg-blue-1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center dark:bg-blue-4">See Case Study</a>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                </div>
            </div>
        </div>

    )
}

export default CaseStudiesDetail