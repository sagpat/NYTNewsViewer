import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularNewsData } from "../actions/app.actions";
import { LoadingDiv } from './DisplayPopularNewsContainer-styled';
import NewsFeed from '../components/popularNews/NewsFeed';


class DisplayPopularNewsContainer extends Component {
    componentDidMount() {
        this.props.fetchPopularNewsData();
    }

    render() {
        const { showLoading, isError, newsData } = this.props.mostPopularNewsData;
        return (
            <React.Fragment>
                {showLoading ? <LoadingDiv>Loading...</LoadingDiv>
                    : isError
                        ? <div>Error fetching data</div>
                        : <NewsFeed popularNewsData={newsData} />
                }
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        mostPopularNewsData: state.newsData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPopularNewsData: () => dispatch(fetchPopularNewsData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPopularNewsContainer);