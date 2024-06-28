import React from 'react'
import ProjectCard from './ui/projectCard'

const projects = [
    {
        name: 'NamasteUI',
        shortdescription: 'An innovative UI library',
        description: 'A sleek component library built on Next.js, Tailwind CSS, and TypeScript. Elevate your web projects with responsive navbar, grid, carousel, etc. more designed for seamless integration and enhanced user experiences.',
        image: '/soon.jpg',
        github: 'https://github.com/shashank-2310/namasteui',
        live: 'https://github.com/shashank-2310/namasteui',
    },
    {
        name: 'Evently',
        shortdescription: 'an event management platform',
        description: 'Evently is a robust event management platform featuring secure event management with CRUD operations, related event connections, dynamic categorization, Stripe payments, and streamlined order management.',
        image: '/evently.png',
        github: 'https://github.com/shashank-2310/eventify',
        live: 'https://eventify-inky.vercel.app/',
    },
    {
        name: 'Portfolio',
        shortdescription: 'Innovative projects portfolio showcase',
        description: 'Crafted using components from Magic UI, leveraging the power of Next.js, Tailwind CSS, and other innovative technologies.',
        image: '/portfolio.png',
        github: 'https://github.com/shashank-2310/portfolio',
        live: 'https://shashankgupta-portfolio.vercel.app/',
    },
    {
        name: 'Deluxe Dhaba',
        shortdescription: 'an indian restaurant landing page',
        description: 'Discover Deluxe Dhaba: Where timeless Indian flavors blend seamlessly with contemporary dining, crafted with care in every dish. Experience authentic tastes and warm hospitality in every visit.',
        image: '/dhaba.png',
        github: 'https://github.com/shashank-2310/Deluxe-Dhaba/',
        live: 'https://deluxe-dhaba.vercel.app/',
    },
];

const Projects = () => {
    return (
        <section className='size-full flex flex-col gap-8 lg:gap-12'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase text-white tracking-wider">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 size-full">
                {projects.map((item) => (
                    <ProjectCard
                        key={item.name}
                        name={item.name}
                        shortdescription={item.shortdescription}
                        description={item.description}
                        image={item.image}
                        github={item.github}
                        live={item.live}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects