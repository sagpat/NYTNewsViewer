const INITIAL_STATE = {
    newsData: [],
    showLoding: true,
    error: ''
}

const NewsDataReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case "SET_POPULAR_NEWS_DATA":
            return {
                newsData: action.payload,
                showLoding: false
            };

        case "DATA_FETCH_ERROR":
            return {
                error: action.payload.error,
                showLoding: false
            }

        default:
            return state;
    }
};

export default NewsDataReducer;