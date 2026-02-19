import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = true,
    ...props
}) => {
    return (
        <div
            className={`glass-card p-6 ${hoverEffect ? 'hover:border-cyan-400/30' : ''} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
