import React, { Component } from 'react';
import {
    ListedItem,
    ItemWrapper,
    TitleButton,
    Button,
    Image
} from './PopularNews-styled';
import NewsDetails from './NewsDetails';

class NewsItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewsDetails: false
        }
    };

    toggleNewsDetails = () => {
        this.setState((prevState) => ({ showNewsDetails: !prevState.showNewsDetails }));
    }

    onClickShowCompleteNewsButton = (newsLink) => {
        window.open(newsLink, '_blank');
    }

    render() {
        const [{ 'media-metadata': [{ url }] }] = this.props.media;

        return (
            <ListedItem >
                <Image src={url} height="100px" width="100px" />
                <ItemWrapper>
                    <TitleButton onClick={this.toggleNewsDetails}>{this.props.title}</TitleButton>
                    {this.state.showNewsDetails &&
                        <NewsDetails
                            summary={this.props.summary}
                            writtenBy={this.props.writtenBy}
                            publishedDate={this.props.publishedDate}
                            section={this.props.section}
                        />
                    }
                </ItemWrapper>
                <Button onClick={() => this.onClickShowCompleteNewsButton(this.props.newsLink)}>></Button>
            </ListedItem>
        );
    }
};

export default NewsItems;