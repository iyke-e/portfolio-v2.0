import React from 'react'
import Aipics from "@/assets/aipics.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Link from 'next/link';
import FullExperience from '@/components/home/About/FullExperience';
import TechStack from '@/components/home/About/TechStack';


const About = () => {
    return (
        <div className='py-4'>
            <div className='pad-auto mb-6'>
                <p className='mb-6 px-4 py-2 rounded-full gradientAnimate w-fit '>More About Me</p>


                <h1 className='text-4xl leading-12 mb-4 md:text-5xl max-w-200 mt-4 md:leading-18 '>
                    I'm Ikechukwu, a <br /> creative developer
                </h1>

                <div className='grid md:grid-cols-[3fr_2fr] gap-6 md:gap-16 md:items-center'>
                    <div className='block md:order-2  h-120 md:aspect-[3/4] bg-top bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Aipics.src})` }} />
                    <div className='md:order-1'>
                        <p className='text-lg  leading-8'>
                            I am Ikechukwu Egwim, a proactive software developer passionate about creating smooth dynamic web experiences. from Web to Mobile, I thrive on solving complex problems with clean, optimized and efficient code. My expertise include React, Next.js and Node.js, and I am always eager to learn More
                            <br /><br />

                            When i am not immersed in work, You would find me exploring new ideas and staying curious. I also enjoy Music and Travelling.
                            Life is full of so many interesting experiences, and I am open to every part of it

                            <br /><br />

                            I believe with consitency and the right attitude I can achieve anything

                        </p>
                        <ul className=' flex items-center mt-4 gap-4 cursor-pointer'>

                            <li className='w-fit '>
                                <a target='_blank' href="https://github.com/iyke-e" className='flex items-center gap-4'>
                                    <FaGithub className='w-8 h-8' />
                                </a>
                            </li>
                            <li className='w-fit'>
                                <a target='_blank' href="linkedin.com/in/iyke-gp" className='flex items-center gap-4'>
                                    <FaLinkedin className='w-8 h-8' />
                                </a>
                            </li>


                        </ul>
                    </div>

                </div>

            </div>


            <TechStack />

            <FullExperience />

            <div className='pad-auto py-14 border-t border-white/20  space-y-6  items-center'>

                <h1 className='text-2xl md:text-4xl leading-12 md:leading-16 text-center'>FROM CONCEPT TO <b>CREATION</b>
                    <br /> LET's MAKE IT <b>HAPPEN</b>
                </h1>

                <div className='grid  place-content-center'>
                    <Link href="/contact" className='text-center' >
                        <div className='flex gradientAnimate bg-white/20 rounded-[500px] p-2 pr-6 gap-2 w-fit h-fit pl-2 items-center'>
                            <div className='bg-background w-12 h-12 grid place-content-center rounded-full'>
                                <MdOutlineKeyboardDoubleArrowRight className='w-8 h-8' />
                            </div>
                            Get In Touch
                        </div>
                    </Link>

                </div>


            </div>






        </div>
    )
}

export default About