import React from 'react'
import ProjectAnimatedSection from './ProjectAnimatedSection'

const Projects = () => {
    return (
        <div className='pt-20 bg-gradient-to-t from-white/10 to-white/0'>
            <div className='pad-auto'>
                <p className='mb-6 px-4 py-2 bg-gradient-to-r from-white/20  to-white/0 w-fit rounded-r-4xl'>Porfolio</p>
                <div className='md:flex justify-between items-start'>
                    <h1 className='text-[32px] md:text-5xl max-w-80 md:max-w-140 md:leading-16 mb-4'>A Glimpse Into My Digital Playground </h1>
                    <p className='max-w-60 md:max-w-50'>Projects that show my growth, creativity, and love for building.</p>
                </div>

            </div>
            <ProjectAnimatedSection />

        </div>
    )
}

export default Projects