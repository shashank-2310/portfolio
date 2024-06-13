import Image from 'next/image'
import React from 'react'
import avatar from '@/public/avatar.svg'
import { FlipWords } from './ui/flip-words'
import Link from 'next/link'
import ShineBorder from './magicui/shine-border'
import { MdKeyboardArrowRight } from 'react-icons/md'
import HeroAnimation from './HeroAnimation'

const Hero = () => {
    const words = ['Shashank Gupta', 'a Web Developer'];
    return (
        <div className='flex-row flex-between w-full overflow-hidden'>
            <div className="text-white flex flex-col gap-3">
                <span className='text-4xl font-medium'>
                    Hello, I&apos;m,
                    <FlipWords words={words} duration={1500} /> <br />
                    based in India
                </span>
                <p className='text-lg w-3/4'>
                    I&apos;m an aspiring software engineer with an interest in <span className='font-medium'>Frontend Frameworks.</span>
                </p>
                <div className="flex flex-row gap-6">
                    <ShineBorder
                        className="text-center rounded-full px-4 py-3 hover:bg-gradient-to-bl from-[#A07CFE] via-[#FE8FB5] to-[#FFBE7B]"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                    >
                        <Link href={"#portfolio"} className='capitalize bg-transparent flex-center gap-2'>View my work <MdKeyboardArrowRight /></Link>
                    </ShineBorder>
                    <Link href={"#portfolio"} className='capitalize bg-white text-black hover:bg-black hover:text-white rounded-full px-4 py-3 flex-center gap-2'>Contact Me <MdKeyboardArrowRight /></Link>
                </div>
            </div>
            <HeroAnimation/>
        </div>
    )
}

export default Hero