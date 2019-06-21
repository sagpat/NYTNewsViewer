import React from 'react';
import {
    ListedItem,
    ItemDiv,
    HeadingLevelOne,
    Section,
    HeadingTwoAuthor,
    HeadingTwoDate,
    Button,
    Image
} from './NewsFeed-styled';

const NewsItems = (props) => {
    const { url } = props.media[0]["media-metadata"][0];
    return (
        <ListedItem onClick={() => onClickShowCompleteNews(props.newsLink)}>
            <Image src={url} height="100px" width="100px" />
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
