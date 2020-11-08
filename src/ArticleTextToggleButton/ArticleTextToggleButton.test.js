import React, { useState } from 'react';
import ArticleTextToggleButton from './ArticleTextToggleButton';
import { fireEvent } from '@testing-library/react';
describe('ArticleTextToggleButton tests', () => {
    const onClick = () => {};
    it('renders correctly', () => {
        const { container } = render(
            <ArticleTextToggleButton onClick={onClick} buttonText="Show less" />
        );
        expect(container).toMatchSnapshot();
    });
});
