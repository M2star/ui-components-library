import React from 'react';

const Button = (props) => {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};
    // override defaults
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    if (color)
        _style.color = color;
    return (React.createElement("button", Object.assign({ style: style }, props), children));
};

export { Button };
