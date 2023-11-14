import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;

    let _style: React.CSSProperties = style || {};

    // override deafautls

    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;
    return (
        <button style={style} {...props}>
            {children}
        </button>
    );
};
