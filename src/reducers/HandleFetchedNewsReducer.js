const INITIAL_STATE = {
    newsData: [],
    showLoading: true,
    isError: false
}

const handleFetchedNewsReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case "SET_POPULAR_NEWS_DATA":
            return {
                newsData: action.payload,
                isError: false,
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

export default handleFetchedNewsReducer;