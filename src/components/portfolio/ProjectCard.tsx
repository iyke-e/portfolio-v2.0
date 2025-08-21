import React from 'react'
import { LuExternalLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { projectProp } from '@/data/project';

const ProjectCard = ({ item }: { item: projectProp }) => {
    return (
        <div className=''>
            <div style={{ backgroundImage: `url(${item.imageUrl})` }} className='w-full grid items-end  h-60 rounded-[8px] bg-white/40 bg-center bg-cover'>

                <div className='px-3 pt-3 pb-1 rounded-[8px] bg-gradient-to-t from-background via-background/70 to-black/0 flex justify-between items-center' >
                    <h3 className='text-xl  line-clamp-1 '>{item.name}</h3>


                    <div className='flex items-center justify-end gap-6'>
                        <a target='_blank' href={item.sourceUrl}>
                            <FaGithub className='w-6 h-6' />
                        </a>
                        <a target='_blank' href={item.liveUrl}>
                            <LuExternalLink className='w-6 h-6' />
                        </a>

                    </div>
                </div>

            </div>


        </div >
    )
}

export default ProjectCard

const stack = ["React", "CSS", "MongoDB", "Node JS", "Express JS"]
