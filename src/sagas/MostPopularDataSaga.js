import { put, takeEvery } from "redux-saga/effects";
import { setPopularNewsData, setDataFetchError } from "../actions/app.actions";
import nytApis from '../config';


export default function* getMostPopularData() {
    yield takeEvery("FETCH_POPULAR_NEWS_DATA", getData);
}

export function* getData() {
    try {
        const response = yield fetchNewData();
        yield put(setPopularNewsData(response));

    } catch (err) {
        yield put(setDataFetchError({ error: true }));
    }
}


const fetchNewData = () => {
    return new Promise((resolve, reject) => {
        fetch(nytApis.mostPopularAPI)
            .then(result => result.json())
            .then(data => {
                data.results.length > 0 ? resolve(data.results) : reject(data.errors)
            })
    })
}
