import React from 'react';
import {
    ListedItem,
    ItemDiv,
    HeadingLevelOne,
    Section,
    HeadingTwoAuthor,
    HeadingTwoDate,
    Button
} from './NewsFeed-styled';

const NewsItems = (props) => {
    return (
        <ListedItem onClick={() => onClickShowCompleteNews(props.newsLink)}>
            <ItemDiv>
                <HeadingLevelOne>{props.summary}</HeadingLevelOne>
                <Section>
                    <HeadingTwoAuthor>{props.writtenBy}</HeadingTwoAuthor>
                    <HeadingTwoDate>Published Date: {props.publishedDate}</HeadingTwoDate>
                </Section>
            </ItemDiv>
            <Button>></Button>
        </ListedItem>
    );
};

const onClickShowCompleteNews = (newsLink) => {
    window.open(newsLink, '_blank');
}

export default NewsItems;