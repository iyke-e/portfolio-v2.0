import Button from '@/components/ui/Button'
import { projectProp } from '@/data/project'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface MobileProjectAnimatedSectionProp {
    activeIndex: number;
    nextIndex: number;
    animateNext: Boolean;
    nextNextIndex: number;
    project: projectProp[];

    handleProjectClick: (index: number) => void;

}

const MobileProjectAnimatedSection = ({ project, activeIndex, nextIndex, animateNext, nextNextIndex, handleProjectClick }: MobileProjectAnimatedSectionProp) => {


    return (
        <div className="md:hidden py-8">
            <div className="relative overflow-hidden h-130">
                <div className={`${animateNext ? "slideOutLeft" : ""} top-0 absolute`}>
                    <div
                        style={{
                            backgroundImage: `url(${project[activeIndex]?.imageUrl})`,
                        }}
                        className="bg-cover h-60 bg-center"
                    />

                    <div className="flex flex-col pad-auto justify-between gap-8 py-10">
                        <div>
                            <p className="text-white mb-2"> Featured Project</p>
                            <h2 className="text-3xl line-clamp-1 font-semibold mb-2">
                                {project[activeIndex].name}
                            </h2>
                            <p className='line-clamp-2'>{project[activeIndex].description}</p>
                        </div>
                        <div>
                            <Link href="/">
                                <Button>Read More</Button>
                            </Link>
                        </div>
                    </div>


                </div>
                <div className={`${animateNext ? "slideInRight" : ""} opacity-0 top-0 absolute`}>
                    <div
                        style={{
                            backgroundImage: `url(${project[nextIndex]?.imageUrl})`,
                        }}
                        className="bg-cover h-60 bg-center"
                    />

                    <div className="flex flex-col pad-auto justify-between gap-8 py-10">
                        <div>
                            <p className="text-white mb-2"> Featured Project</p>
                            <h2 className="text-3xl line-clamp-1 font-semibold mb-2">
                                {project[nextIndex].name}
                            </h2>
                            <p className='line-clamp-2'>{project[nextIndex].description}</p>
                        </div>
                        <div>
                            <Link href="/">
                                <Button>Read More</Button>
                            </Link>
                        </div>
                    </div>


                </div>



            </div>



            <div className="flex pad-auto w-full  gap-2">
                {project.map((_, index) => (


                    <div key={index} className={`${activeIndex === index ? "w-full" : "w-12"
                        } mt-4  outline outline-white/20 grid rounded-full h-[0.25px]`}>
                        <div
                            className={`${activeIndex === index ? "loading" : ""
                                } bg-white w-0 rounded-full`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default MobileProjectAnimatedSection