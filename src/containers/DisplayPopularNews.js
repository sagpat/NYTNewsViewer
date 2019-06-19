import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopularNewsData } from "../actions/app.actions";

class DisplayPopularNews extends Component {
    // DisplayPopularNews container
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchPopularNewsData();
    }

    render() {
        return (
            <div>HEy</div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPopularNewsData: () => dispatch(fetchPopularNewsData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPopularNews);