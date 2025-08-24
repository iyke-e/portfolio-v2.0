import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'default' | 'white';
}

const Button = ({ children, className, variant = 'default', ...props }: ButtonProps) => {
    const baseClasses = `rounded-3xl px-4 py-2 cursor-pointer transition-colors duration-200`;

    const variants = {
        default: `bg-foreground/10 gradientAnimate border border-foreground/20 hover:border-white/50 text-foreground`,
        white: `bg-white gradientAnimateWhite border border-gray-300 hover:bg-gray-100 hover:border-gray-400 text-background`,
    };

    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
