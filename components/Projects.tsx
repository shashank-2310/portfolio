import React from 'react'
import data from '@/data/projects.json';
import ProjectCard from './ui/projectCard'

const { projects } = data;


const Projects = () => {
    return (
        <section className='size-full flex flex-col gap-8 lg:gap-12' id='portfolio'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase text-white tracking-wider">Portfolio</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 size-full">
                {projects.map((item) => (
                    <ProjectCard
                        key={item.name}
                        name={item.name}
                        shortdescription={item.shortdescription}
                        description={item.description}
                        image={item.image}
                        skills={item.skills}
                        github={item.github}
                        live={item.live}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects