"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// Static imports for logos
import LogoDark from "@/assets/logo.svg";
import LogoLight from "@/assets/logo2.svg";

const LogoIcon = ({ size = 80 }: { size?: number }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <Link href={"/"}>
                <Image width={size} height={size} src={LogoLight} alt="Logo" priority />
            </Link>
        );
    }

    return (
        <Link href={"/"}>
            <Image
                width={size}
                height={size}
                src={LogoDark}
                alt="Logo"
                priority
            />
        </Link>
    );
};

export default LogoIcon;
