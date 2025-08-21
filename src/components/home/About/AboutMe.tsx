import Image from 'next/image'
import React from 'react'
import dp from "@/assets/nobgimg.png"
import Aipics from "@/assets/aipics.png"
import { stackList } from '@/data/stacklist'
import TechStack from './TechStack'

const AboutMe = () => {
    const uniqueStack = Array.from(
        new Map(stackList.map(item => [item.name, item])).values()
    );
    return (
        <div className='py-10 mt-10'>
            <div className='pad-auto mb-6'>
                <p className='mb-6 px-4 py-2 bg-gradient-to-r from-white/20  to-white/0 w-fit '>About Me</p>


                <h1 className='text-[32px] md:text-5xl max-w-80  md:max-w-200 md:leading-16 mb-4'>For me, it’s not  just about pixels or code,
                    but creating experiences that truly resonate. </h1>

                <div className='max-w-220 mx-auto md:flex gap-8 md:items-center md:justify-end '>
                    <div className='h-86 w-66 grid place-content-center rounded-full mx-auto gradientAnimate'>
                        <div className='block  h-80 w-60   rounded-full bg-top bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Aipics.src})` }} />
                    </div>



                    <p className='leading-10 text-[20px]  mt-8 md:mt-0'>I’m a Junior Software Developer with 2+ years of professional experience. over the years, I've gained hands-on experience through software engineering and frontend development internships. This year, I graduated in Computer Science from FUNAAB and am now a trainee at Rise Academy, building websites and mobile apps. I specialize in frontend and mobile development, enjoy crafting creative digital experiences, and bring curiosity and a fun, problem-solving mindset to every project I tackle.</p>
                </div>

                <TechStack />


            </div>



        </div>
    )
}

export default AboutMe