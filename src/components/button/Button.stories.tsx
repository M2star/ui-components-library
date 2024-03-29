// Import the new Button component

import type { Meta } from '@storybook/react';
import GrowButton from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
    title: 'growpital-libary/Button',
    component: GrowButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        btnType: {
            control: 'select',
            options: ['default', 'secondary', 'ghost', 'outline', 'destructive'],
            description: 'this is default css variable'
        },
        asChild: {
            type: 'boolean',
            options: ['div', 'button'],
            description: 'to convert div for passing link',
            defaultValue: false
        },
        children: {
            description: 'pass button property if asChild true pass any type links'
        }
        // You can add more argTypes here based on your component's props
    }
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
        btnType: 'default',
        children: 'Default'
    }
};

export const Secondary = {
    args: {
        btnType: 'secondary',
        children: 'Secondary'
    }
};

export const Destructive = {
    args: {
        btnType: 'destructive',
        children: 'Destructive'
    }
};

export const Outline = {
    args: {
        btnType: 'outline',
        children: 'Outline'
    }
};

export const Ghost = {
    args: {
        btnType: 'ghost',
        children: 'Ghost'
    }
};
