import React from 'react'
import Link from 'next/link'

const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
]

const NavLinks = () => {
    return (
        <nav className="bg-transparent flex-col flex-center rounded-full">
            <ul className='flex-between gap-3 lg:gap-8 text-white py-2 px-1 lg:px-2'>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className='hover:text-blue-400'>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks