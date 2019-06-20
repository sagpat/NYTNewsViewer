import { fetchPopularNewsData } from '../actions/app.actions';

describe('Unit testing application actions', () => {
    it('should dispatch fetch popular news data call', () => {
        const expectedAction = {
            type: 'FETCH_POPULAR_NEWS_DATA'
        };
        expect(fetchPopularNewsData()).toEqual(expectedAction);
    });
});