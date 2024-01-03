// Import the new Button component
import Button from './Button';

import type { Meta } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
    title: 'growpital-libary/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        btnType: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'variant', 'outline'],
            },
        },
        asChild: {
            type:'boolean',
            options:['div','button']
        }
        // You can add more argTypes here based on your component's props
    },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        btnType: 'primary',
        children: 'Button',
    },
};

export const Secondary = {
    args: {
        btnType: 'secondary',
        children: 'Button',
    },
};

export const Destructive = {
    args: {
        btnType: 'destructive',
        children: 'Button',
    },
};

export const Outline = {
    args: {
        btnType: 'outline',
        children: 'Button',
    },
};

export const Ghost = {
    args: {
        btnType: 'ghost',
        children: 'Button',
    },
};
