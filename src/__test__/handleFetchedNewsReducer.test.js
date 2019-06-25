import handleFetchedNewsReducer from '../reducers/HandleFetchedNewsReducer';

describe('Customer API Reducer', () => {
    it('should return the initial state', () => {
        const INITIAL_STATE = {
            newsData: [],
            showLoading: true,
            isError: false
        };
        expect(handleFetchedNewsReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should get news data', () => {
        const action = {
            type: "SET_POPULAR_NEWS_DATA",
            payload: {
                abstact: 'This news is test data',
                byline: 'Adam A',
                date: '20/06/2000'
            }
        };

        const expectedAction = {
            newsData: {
                abstact: 'This news is test data',
                byline: 'Adam A',
                date: '20/06/2000'
            },
            showLoading: false,
            isError: false
        }
        expect(handleFetchedNewsReducer({}, action)).toEqual(expectedAction);
    });
});