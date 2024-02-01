import React from 'react';
import { render } from '@testing-library/react';
import GrowButton from './Button';

describe('Button', () => {
    test('renders the button component', () => {
        render(<GrowButton>Hello World</GrowButton>);
    });
});
