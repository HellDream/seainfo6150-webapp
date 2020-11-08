import React from 'react';
import ArticleListItem from './ArticleListItem';
import { fireEvent } from '@testing-library/react';

describe('ArticleListItem tests', () => {
    const article = {
        slug: '181122102925-statue-of-liberty-crown',
        title: "The Statue of Liberty's torch heads to new museum",
        shortText:
            "The Statue of Liberty's original torch is getting a new home",
        pubDate: 'Thu, 22 Nov 2018 15:12:24 GMT',
        pubYear: '2018',
        author: 'Kate Farley',
        authorEmail: 'kate.farley@nytimes.com',
        timeStamp: '2018-11-22T15:12:24.000Z',
        displayDate: 'November 22nd 2018, 7:12 am',
    };
    it('renders correctly', () => {
        const { container } = render(<ArticleListItem article={article} />);
        expect(container).toMatchSnapshot();
    });

    it('renders correctly after button is clicked', () => {
        const { container, getByText } = render(
            <ArticleListItem article={article} />
        );
        const button = getByText('Show more');
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
    });
});
