import React from 'react'
import ScrollLink from './ScrollLink'
import Link from 'next/link'

export const links = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
]

const NavLinks = () => {
    return (
        <nav className="bg-transparent flex-center rounded-full">
            <ul className='flex-between flex-row gap-3 lg:gap-8 text-white py-2 px-1 lg:px-2'>
                <li>
                    <Link href={"/"} className='hover:text-blue-400'>Home</Link>
                </li>
                {links.map((link) => (
                    <li key={link.name}>
                        <ScrollLink href={link.href} className='hover:text-blue-400'>{link.name}</ScrollLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks