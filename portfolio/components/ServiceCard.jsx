import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const ServiceCard = ({ icon, darkIcon, title, description, bgColor, darkColor, textColor }) => {
    const { theme } = useTheme()
    return (
        <div className={`flex-col ${bgColor} dark:${darkColor} rounded justify-between drop-shadow-lg md:w-1/5 ${textColor}`}>
            <div className='flex p-4 dark:hidden'>
                <Image src={icon} height={62} width={62} alt='web design icon' />
            </div>
            <div className='dark:flex p-4 hidden'>
                <Image src={darkIcon} height={62} width={62} alt='web design icon' />
            </div>
            <div className='py-16'></div>
            <div className='flex-col p-4 space-y-2'>
                <p className='text-2xl font-bold'>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ServiceCard