'use client'
import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react'
import { logo, sunIcon, moonIcon, hamburger, cross } from '../assets';
import { useTheme } from 'next-themes';

const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
    const navLinks = [
        { url: '/', text: 'Home' },
        { url: 'case-studies', text: 'Case Studies' },
        { url: 'contact', text: 'Contact' },
        { url: 'resume', text: 'Resume' },
    ]

    return (
        <div className="flex flex-row justify-between list-none gap-4 items-center">
            <ul className={`list-none flex ${isMobile
                ? 'flex-col justify-end w-full border-b border-black'
                : 'flex flex-row justify-between list-none gap-4'
                }`}>
                {navLinks.map((link, i) => (
                    <Link href={link.url} key={i}
                        onClick={() => {
                            setActive(link)
                            setIsOpen(false)
                        }}
                        className={`flex flex-row items-center font-semibold text-2xl hover:text-blue-1 
                ${isMobile ? 'mb-8' : false}
                ${active === link ? 'text-blue-1' : 'text-blue-2'}
                `}
                    >
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>
    )
}

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [darkMode, setDarkMode] = useState(theme === 'dark');
    const [active, setActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <nav className="flex flex-row items-center justify-between p-6 bg-white dark:bg-gray-800 z-40">
            <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Image src={logo} height={30} width={30} alt='logo' />
            </Link>

            <div className="md:flex flex-row justify-between list-none gap-4 items-center hidden ">
                <MenuItems active={active} setActive={setActive} setIsOpen={setIsOpen} />
                <div>
                    <button onClick={toggleDarkMode} className="flex">
                        {darkMode ? <Image src={sunIcon} height={24} width={24} alt='light theme' className='' /> : <Image src={moonIcon} height={24} width={24} alt='dark theme' />}
                    </button>
                </div>
            </div>

            <div className="flex md:hidden w-full justify-end">
                <Image
                    src={isOpen ? cross : hamburger}
                    className="object-contain aspect-square cursor-pointer grayscale"
                    width={30}
                    height={30}
                    alt={isOpen ? 'Menu' : 'close'}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                />

                {isOpen && (
                    <div className="fixed inset-0 top-16 z-4 nav-h flex justify-between flex-row z-40">
                        <div className="flex container mx-auto w-full flex-col justify-start items-start p-4 gap-8 bg-white dark:bg-black-1">
                            <MenuItems
                                active={active}
                                setActive={setActive}
                                isMobile
                                setIsOpen={setIsOpen}
                            />
                        </div>
                    </div>
                )}
                <div className="hidden flex-1 justify-center md:flex">
                    <MenuItems
                        active={active}
                        setActive={setActive}
                        setIsOpen={setIsOpen}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar