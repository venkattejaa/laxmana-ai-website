import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div className={`container ${className}`} {...props}>
            {children}
        </div>
    );
};
