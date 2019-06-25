export function fetchPopularNewsData() {
    return {
        type: "FETCH_POPULAR_NEWS_DATA"
    }
};

export function setPopularNewsData(payload) {
    return {
        type: "SET_POPULAR_NEWS_DATA",
        payload
    }
};

export function setDataFetchError(payload) {
    return {
        type: "SET_DATA_FETCH_ERROR",
        payload
    }
}