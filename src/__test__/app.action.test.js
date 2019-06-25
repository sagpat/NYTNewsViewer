import { fetchPopularNewsData, setPopularNewsData, setDataFetchError } from '../actions/app.actions';

describe('Unit testing fetch popular data actions', () => {
    it('should dispatch fetch popular news data call', () => {
        const expectedAction = {
            type: 'FETCH_POPULAR_NEWS_DATA'
        };
        expect(fetchPopularNewsData()).toEqual(expectedAction);
    });
});

describe('Unit testing set popular data actions', () => {
    it('should dispatch set popular data action call', () => {
        const expectedAction = {
            type: 'SET_POPULAR_NEWS_DATA',
            payload: {}
        };
        expect(setPopularNewsData({})).toEqual(expectedAction);
    });
});

describe('Unit testing set data fetch error actions', () => {
    it('should dispatch set data fetch error action call', () => {
        const expectedAction = {
            type: 'SET_DATA_FETCH_ERROR',
            payload: { error: true }
        };
        expect(setDataFetchError({ error: true })).toEqual(expectedAction);
    });
});
