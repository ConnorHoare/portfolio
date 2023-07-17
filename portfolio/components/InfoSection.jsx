import React from 'react'

const InfoSection = ({title, data}) => {
    return (
        <div className='flex-col md:space-y-3'>
            <p className='font-bold text-black-1 text-sm dark:text-white'>{title}</p>
            <p className='font-bold text-grey-3 text-2xl'>{data}</p>
        </div>
    )
}

export default InfoSection