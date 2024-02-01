import React from 'react';
import './button.css';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement> {
    btnType?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost';
    asChild?: boolean;
}

const getButtonClass = ({ btnType = 'default', className = '' }: IButtonProps) => {
    const baseClass = 'btn';
    const typeClass = `btn-${btnType}`;

    return `${baseClass} ${typeClass} ${className}`;
};

const GrowButton: React.FunctionComponent<IButtonProps> = ({ children, asChild = false, ...props }) => {
    const Comp = asChild ? 'div' : 'button';
    const buttonClass = getButtonClass(props);
    return (
        <Comp {...props} className={buttonClass}>
            {children}
        </Comp>
    );
};

export default GrowButton;
