import { put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import { getData } from '../sagas/GetMostPopularDataSaga';

const newsJson = {
    results: [
        {
            byline: 'By Laura N',
            title: 'Article',
            abstract: 'The little cat that escaped home',
            published_date: '12/05/2019'
        }
    ]
};

describe('the fetch result for most popular news data', () => {
    let generator;

    beforeEach(() => {
        generator = cloneableGenerator(getData)({});
        generator.next();
    });

    it('fetched result for news data', () => {
        const clone = generator.clone()
        let response = clone.next(newsJson).value;
        expect(response).toEqual(
            put({
                type: 'SET_POPULAR_NEWS_DATA',
                payload: response
            })
        )
    });
});