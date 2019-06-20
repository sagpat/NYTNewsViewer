const INITIAL_STATE = {
    newsData: [],
    showLoading: true,
    isError: false
}

const NewsDataReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case "SET_POPULAR_NEWS_DATA":
            return {
                newsData: action.payload,
                showLoading: false
            };

        case "DATA_FETCH_ERROR":
            return {
                isError: action.payload.error,
                showLoading: false
            }

        default:
            return state;
    }
};

export default NewsDataReducer;