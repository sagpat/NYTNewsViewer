import React from 'react';
import { shallow } from 'enzyme';
import NewsFeed from '../components/popularNews/NewsFeed';
import { Heading } from '../components/popularNews/NewsFeed-styled';
import NewsItems from '../components/popularNews/NewsItems';

let wrapper;
const props = {};

beforeEach(() => {
    wrapper = shallow(<NewsFeed />);
});

describe('NewsFeed rendering', () => {
    it('renders correctly', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should render one heading', () => {
        expect(wrapper.find(Heading)).toHaveLength(1);
    });

    it('should have NewsItems component', () => {
        expect(wrapper.find(<NewsItems />)).toHaveBeenCalled();
    });
});

