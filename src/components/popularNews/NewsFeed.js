import React from 'react';
import { Heading, UnorderedList } from './PopularNews-styled';
import NewsItems from './NewsItems';

const NewsFeed = (props) => {
    return (
        <React.Fragment>
            <Heading>NYTimes Most Popular News Feed</Heading>
            {props.popularNewsData.map((data) => {
                return (
                    <UnorderedList key={data.views}>
                        <NewsItems
                            title={data.title}
                            summary={data.abstract}
                            writtenBy={data.byline}
                            publishedDate={data.published_date}
                            newsLink={data.url}
                            section={data.section}
                            media={data.media}
                        />
                    </UnorderedList>
                )
            })
            }
        </React.Fragment>
    );
};

export default NewsFeed;
