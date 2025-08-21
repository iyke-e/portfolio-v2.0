import Image from 'next/image';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Aipics from "@/assets/aipics.png"
import { stackList } from '@/data/stacklist';

const Hero = () => {

    const duplicateStackList = [...stackList, ...stackList]
    return (
        <div className='relative pt-8 md:pt-4 '>
            <div className='pad-auto relative'>
                <div className='mb-10 md:ml-auto md:pr-20 w-fit space-y-2'>
                    <div className='block  h-40  rounded-2xl w-32 bg-top bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Aipics.src})` }} />
                    <p className='text-center'>Egwim Ikechukwu</p>
                </div>

                <p className='absolute  opacity-10 top-10 right-0 md:left-20 md:right-0 text-center w-fit leading-8 -rotate-45 md:-rotate-35 '>React + React Native + Next.js
                    <br /> Redux + Node + Jest
                </p>




                <div className='md:flex items-end md:-mt-20' >
                    <div className='w-fit mb-10 md:mb-0'>
                        <h1 className='text-7xl mb-2 md:text-[10rem] '>Software <br /> Developer </h1>
                        <div className='flex  gap-4 items-center justify-end'>

                            <a className='text-2xl hover:text-gray-500' target='_blank' href={"https://github.com/iyke-e"}>
                                <FaGithub className='w-8 h-8' />

                            </a>
                            <a className='text-2xl hover:text-gray-500' target='_blank' href={"https://linkedin.com/in/iyke-gp"}>
                                <FaLinkedin className='w-8 h-8' />

                            </a>
                        </div>

                    </div>

                    <p className='w-fit text-right ml-auto'>Hi, I’m  Ikechukwu,
                        A Software <br /> Developer specializing in creating <br /> clean, seamless digital experiences <br /> on
                        both web and mobile.
                    </p>

                </div>


            </div>

            <div className='sliderparent overflow-hidden mb-5 my-16 md:my-20'>
                <ul className='flex slider w-max'>
                    {
                        duplicateStackList.map((stack, index) => <li
                            className='flex mr-4 gap-2 grow-0 shrink-0 opacity-80 items-center border border-white/15 rounded-4xl bg-white/10 px-4 py-2 '
                            key={index}>
                            <Image
                                src={stack.icon.src}
                                width={20}
                                height={20}
                                alt={stack.name + "icon"}

                            />
                            <p>
                                {stack.name}
                            </p>
                        </li>
                        )
                    }

                </ul>

            </div>
            {/* 
            <div className='sliderparent overflow-hidden '>
                <ul className='flex slider_re w-max'>
                    {
                        stackList.map((stack, index) => <li
                            className='flex mr-4 gap-2 grow-0 shrink-0 opacity-80 items-center border border-white/15 rounded-4xl bg-white/10 px-4 py-2 '
                            key={index}>
                            <Image
                                src={stack.icon.src}
                                width={20}
                                height={20}
                                alt={stack.name + "icon"}

                            />
                            <p>
                                {stack.name}
                            </p>
                        </li>
                        )
                    }

                </ul>

            </div> */}



        </div>
    )
}

export default Hero



