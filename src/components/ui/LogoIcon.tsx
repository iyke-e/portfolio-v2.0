
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/logo.svg"


const LogoIcon = ({ size = 80 }: { size?: number }) => {
    return (

        <Link href={"/"}>
            <Image
                width={size}
                height={size}
                src={Logo}
                alt='Logo'
            />
        </Link>
    )
}

export default LogoIcon