import React from 'react';
import './button.css';
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    btnClassName?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children, backgroundColor, color, style, btnClassName, ...rest }) => {
    let _style: React.CSSProperties = style || {};

    // override defaults
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...rest} className={`btn btn-${btnClassName}`}>
            {children}
        </button>
    );
};

export default Button;
