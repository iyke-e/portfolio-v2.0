import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={`bg-white/10 border border-white/20 hover:border-white/50 rounded-3xl px-4 py-2 gradientAnimate cursor-pointer
         ${className}`}>
            {children}
        </button>
    )
}

export default Button