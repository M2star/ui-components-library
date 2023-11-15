import React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children, backgroundColor, color, style, ...rest }) => {
    let _style: React.CSSProperties = style || {};

    // override defaults
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...rest}>
            {children}
        </button>
    );
};

export default Button;
