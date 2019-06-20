import { put, takeEvery } from "redux-saga/effects";

export default function* getMostPopularData() {
    yield takeEvery("FETCH_POPULAR_NEWS_DATA", getData);
}

function* getData() {
    try {
        const response = yield fetchNewData();

        yield put({
            type: 'SET_POPULAR_NEWS_DATA',
            payload: response
        });
    } catch (err) {
        yield put({ type: 'DATA_FETCH_ERROR', payload: { error: true } });
    }
}


const fetchNewData = () => {
    return new Promise((resolve, reject) => {
        fetch(`http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=HN9XCyMESWlKRAY7Yo38vjIyiK7kghR0`)
            .then(result => result.json())
            .then(data => {
                data.results.length > 0 ? resolve(data.results) : reject(data.errors)
            })
    })
}
