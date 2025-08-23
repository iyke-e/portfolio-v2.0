import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={`bg-foreground/10 gradientAnimate border border-foreground/20 hover:border-white/50 rounded-3xl px-4 py-2  cursor-pointer
         ${className}`}>
            {children}
        </button>
    )
}

export default Button