import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Chip } from '@nextui-org/react'
import { Tooltip } from "@nextui-org/tooltip";

type ProjectProps = {
  name: string,
  shortdescription: string,
  description: string,
  image: string,
  skills: string[],
  github: string,
  live: string
}

const ProjectCard = (item: ProjectProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/25 hover:scale-105">
      <div className="relative">
        <Image src={item.image} alt={item.name} width={500} height={300} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-white bg-neutral-800/70 flex flex-col gap-2 rounded-b-xl">
        <div className="flex flex-col gap-1">
          <div className="flex items-center flex-row flex-wrap gap-2 sm:gap-3 my-2">
            {item.skills.map((skill) => (
              <Chip key={skill} color="primary" variant='flat'>{skill}</Chip>
            ))}
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <div className="flex items-center gap-2 text-lg px-3 py-2">
              <Tooltip showArrow={true} color='primary' placement='top-end' content="View Code">
                <Link
                  href={item.github}
                  className="block text-default-300 hover:text-primary"
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <CodeIcon />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} color='primary' placement='top-end' content="View Project">
                <Link
                  href={item.live}
                  className="block text-default-300 hover:text-primary"
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <EyeIcon />
                </Link>
              </Tooltip>
            </div>
          </div>
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