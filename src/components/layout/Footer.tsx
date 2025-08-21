import React from 'react'
import LogoIcon from '../ui/LogoIcon'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='pad-auto border-t border-white/20 pt-10'>
            <div className='pb-4'>
                <div className='mb-16'>
                    <LogoIcon size={100} />
                </div>

                <div className=' space-y-16'>

                    <ul className=' space-y-3 items-center cursor-pointer'>

                        <li className='w-fit '>
                            <a target='_blank' href="https://github.com/iyke-e" className='flex items-center gap-4'>
                                <FaGithub className='w-8 h-8' />
                                <span>github.com/iyke-e</span>
                            </a>
                        </li>
                        <li className='w-fit'>
                            <a target='_blank' href="https://www.linkedin.com/in/iyke-gp" className='flex items-center gap-4'>
                                <FaLinkedin className='w-8 h-8' />
                                <p>linkedin.com/in/iyke-gp</p>
                            </a>
                        </li>
                        <li className='flex items-center gap-4 w-fit'>
                            <TfiEmail className='w-8 h-8' />
                            <p>egwimikechukwu.gp@gmail.com</p>

                        </li>

                    </ul>


                    <ul className='flex gap-4 justify-end items-center'>
                        <li>
                            <Link href="/portfolio">Porfolio</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">About Me</Link>
                        </li>
                        <li>
                            <Link href="/portfolio">Contact</Link>
                        </li>
                    </ul>
                </div>


            </div>
            <div className='flex text-center gap-2 flex-col-reverse md:flex-row md:justify-between border-t py-4 border-white/20'>
                <p >All Rights Reserved &copy; iykee 2025</p>
            </div>
        </div>
    )
}

export default Footer