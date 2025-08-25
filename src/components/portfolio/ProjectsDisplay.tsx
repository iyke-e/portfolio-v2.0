import React from 'react'
import ProjectCard from './ProjectCard'
import { ProjectProp } from '@/data/project'

const ProjectsDisplay = ({ project }: { project: ProjectProp[] }) => {
    return (
        <div className='py-5 mt-8 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
            {
                project?.map((item, index) => (
                    <ProjectCard item={item} key={index} />
                ))
            }
        </div>
    )
}

export default ProjectsDisplay