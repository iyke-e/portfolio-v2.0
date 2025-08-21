"use client"

import FilterNav from '@/components/portfolio/FilterNav'
import ProjectsDisplay from '@/components/portfolio/ProjectsDisplay'
import { project } from '@/data/project'
import React, { useState } from 'react'

const Portfolio = () => {
    const [acitveFilter, setActiveFilter] = useState("All")

    const filterResult = acitveFilter === "All" ? project : project.filter(item => item.projectType.includes(acitveFilter))
    return (
        <div className='pad-auto py-4'>
            <p className='mb-6 px-4 py-2 rounded-full gradientAnimate w-fit '>Portfolio</p>

            <h1 className='text-3xl mb-4 md:text-5xl max-w-200 md:leading-18'>A collection of work that tells my story of learning, building, and evolving.</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, officiis ratione ab aspernatur ad beatae?</p>
            <div className='mt-8'>
                <FilterNav acitveFilter={acitveFilter} setActiveFilter={setActiveFilter} />
                <ProjectsDisplay project={filterResult} />

            </div>
        </div>
    )
}

export default Portfolio