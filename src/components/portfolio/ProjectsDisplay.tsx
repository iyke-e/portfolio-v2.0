import React from 'react'
import ProjectCard from './ProjectCard'
import { projectProp } from '@/data/project'

const ProjectsDisplay = ({ project }: { project: projectProp[] }) => {
    return (
        <div className='py-5 mt-8 grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
            {
                project?.map((item, index) => (
                    <ProjectCard item={item} key={index} />
                ))
            }
        </div>
    )
}

export default ProjectsDisplay