'use client'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react'
import { logo, sunIcon, moonIcon } from '../assets';

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const navLinks = [
        { url: '/', text: 'Home' },
        { url: 'case-studies', text: 'Case Studies' },
        { url: 'contact', text: 'Contact' },
        { url: 'resume', text: 'Resume' },
    ]

    return (
        <nav className="flex flex-row items-center justify-between p-6 bg-white dark:bg-gray-800">
            <Link href="/" className="flex items-center">
                <Image src={logo} height={24} width={24} alt='logo' />
            </Link>

            <div className="flex flex-row justify-between list-none gap-4">
                <ul className='flex justify-between gap-5'>
                    {navLinks.map((link, i) => (
                        <Link href={link.url} key={i}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
                <div>
                    <button onClick={toggleDarkMode} className="">
                        {darkMode ? <Image src={sunIcon} height={24} width={24} alt='light theme'/> : <Image src={moonIcon} height={24} width={24} alt='dark theme'/>}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar