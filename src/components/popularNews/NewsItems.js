import React, { useState } from 'react';
import {
    ListedItem,
    ItemWrapper,
    TitleButton,
    Button,
    Image
} from './PopularNews-styled';
import NewsDetails from './NewsDetails';


const onClickShowCompleteNewsButton = (newsLink) => {
    window.open(newsLink, '_blank');
}

const NewsItems = (props) => {
    const [showNewsDetails, setNewsDetails] = useState(false);
    const [{ 'media-metadata': [{ url }] }] = props.media;

        return (
            <ListedItem >
                <Image src={url} height="100px" width="100px" />
                <ItemWrapper>
                    <TitleButton onClick={ () => setNewsDetails(!showNewsDetails)}>{props.title}</TitleButton>
                    {showNewsDetails &&
                        <NewsDetails
                            summary={props.summary}
                            writtenBy={props.writtenBy}
                            publishedDate={props.publishedDate}
                            section={props.section}
                        />
                    }
                </ItemWrapper>
                <Button onClick={() => onClickShowCompleteNewsButton(props.newsLink)}>></Button>
            </ListedItem>
        );
    }

export default NewsItems;