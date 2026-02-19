import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'oss';
    icon?: LucideIcon;
    iconPosition?: 'left' | 'right';
    href?: string;
    external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    icon: Icon,
    iconPosition = 'left',
    href,
    external,
    className = '',
    ...props
}) => {
    const baseClasses = `btn-${variant} ${className}`;

    const content = (
        <>
            {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
            {children}
            {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={baseClasses}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <button className={baseClasses} {...props}>
            {content}
        </button>
    );
};
