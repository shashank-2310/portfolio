import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectProps = {
  name: string,
  shortdescription: string,
  description: string,
  image: string,
  github: string,
  live: string
}

const ProjectCard = (item: ProjectProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/25 hover:scale-105">
      <div className="relative">
        <Image src={item.image} alt={item.name} width={500} height={300} className="w-full h-full object-cover" />
        <div className="absolute top-1 right-1 p-1 rounded-full cursor-pointer">
          <div className="flex items-center gap-2 text-lg hover:scale-105 bg-gray-900/50 hover:bg-black/15 px-2 py-1 rounded-full text-foreground">
            <Link
              href={item.github}
              className="block text-gray-700  hover:text-blue-700"
              target='_blank'
              rel='noreferrer noopener'
            >
              <CodeIcon />
              <span className="sr-only">View Code</span>
            </Link>
            <Link
              href={item.live}
              className="block text-gray-700 hover:text-blue-700"
              target='_blank'
              rel='noreferrer noopener'
            >
              <EyeIcon />
              <span className="sr-only">View Project</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 text-white bg-neutral-800/70 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-base capitalize">{item.shortdescription}</p>
        </div>
        <p className="text-sm">
          {item.description}
        </p>
      </div>
    </div>
  )
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export default ProjectCard