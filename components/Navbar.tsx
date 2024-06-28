import React from 'react'
import ShineBorder from './ui/shine-border'
import NavLinks from './NavLinks'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'


const Navbar = () => {
    return (
        <div className='w-full flex-between flex-row px-3 py-5 lg:px-7'>
            <Link
                href={"/"}
                className='text-white font-medium text-base lg:text-xl hover:underline underline-offset-1 hidden sm:flex flex-row gap-2 items-center'
            >
                <Image src="/logo.png" width="64" height="64" alt='logo' className='size-full scale-105' />
            </Link>
            <ShineBorder
                className="text-center rounded-full mx-auto p-3 min-w-[300px] min-h-[60px]"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <NavLinks />
            </ShineBorder>
            <Link
                href={"https://drive.google.com/file/d/11VBDsAwcY50OAmIY4nxRPtUwammv4h66/view"}
                target='_blank'
                rel='noreferrer noopener'
                className='text-white font-medium text-base lg:text-lg hover:underline underline-offset-1 hidden sm:flex flex-row gap-2 items-center'
            >
                <FaExternalLinkAlt /> Resume
            </Link>
        </div>
    )
}

export default Navbar