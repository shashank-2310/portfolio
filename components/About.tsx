import React from 'react'
import EducationList from './EducationList'
import Skills from './Skills'

const About = () => {
    return (
        <section className='size-full bg-black text-gray-300 flex flex-col gap-8 lg:gap-12 my-8' id='about'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase tracking-wider">About Me</h1>
            <div className="flex-center lg:items-start flex-col-reverse lg:flex-row gap-12 w-full">
                <EducationList />
                <div className="flex flex-col w-4/5">
                    <h2 className='md:text-xl text-base text-center sm:text-left w-full text-gray-400 font-medium mb-3 uppercase'>who am i?</h2>
                    <div className="text-center sm:text-left flex flex-col gap-2">
                        <p>
                            Hey there! I&apos;m Shashank Gupta, a passionate full-stack web developer with a knack for crafting pixel-perfect UIs. My journey into the world of web development began with a love for solving problems and creating seamless user experiences.
                        </p>
                        <p>
                            When I&apos;m not coding, you can often find me immersed in my other passions. I enjoy listening to music - it&apos;s the backdrop to my coding adventures. I also have a soft spot for anime, where I find inspiration in its creativity and storytelling.
                        </p>
                        <p>
                            Driven by curiosity and a dedication to continuous learning, I thrive on challenges that push me to innovate and grow. Whether it&apos;s building robust backend systems or designing elegant frontends, I take pride in delivering clean, efficient code that brings ideas to life.
                        </p>
                    </div>
                </div>
            </div>
            <div className="size-full flex-center flex-col mt-8 sm:mt-16 lg:mt-4 sm:gap-4">
                <h1 className='uppercase text-lg sm:text-xl text-gray-300 tracking-wider'>My Skills</h1>
                <Skills />
            </div>
        </section>
    )
}

export default About