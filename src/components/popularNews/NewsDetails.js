import React from 'react';
import { SummaryParagraph, Section, HeadingTwoAuthor, HeadingTwoDate } from './PopularNews-styled';

const NewsDetails = (props) => {
    return (
        <React.Fragment>
            <SummaryParagraph>{props.summary}</SummaryParagraph>
            <Section>
                <HeadingTwoAuthor>{props.writtenBy ? props.writtenBy : '-'}</HeadingTwoAuthor>
                <HeadingTwoDate>Published Date: {props.publishedDate}</HeadingTwoDate>
            </Section>
        </React.Fragment>
    );
};

export default NewsDetails;
