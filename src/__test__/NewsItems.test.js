import React from 'react';
import { shallow } from 'enzyme';
import { ListedItem, ItemDiv } from '../components/popularNews/NewsFeed-styled';
import NewsItems from '../components/popularNews/NewsItems';

let wrapper;
const props = {
    summary: 'The little cat that escaped home',
    writtenBy: 'By Laura N',
    publishedDate: '12/05/2019',
    newsLink: 'abc.co.in'
};

beforeEach(() => {
    wrapper = shallow(<NewsItems {...props} />);
});

describe('<NewsItems /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should render one div', () => {
        expect(wrapper.find(ItemDiv)).toHaveLength(1);
    });

    it('should render one li element', () => {
        expect(wrapper.find(ListedItem)).toHaveLength(1);
    });
});

