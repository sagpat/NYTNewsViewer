import React from 'react';
import { shallow } from 'enzyme';
import { ListedItem, ItemDiv, Button } from '../components/popularNews/PopularNews-styled';
import NewsItems from '../components/popularNews/NewsItems';

let wrapper;
const userProps = {
    summary: 'The little cat that escaped home',
    writtenBy: 'By Laura N',
    publishedDate: '12/05/2019',
    newsLink: 'abc.co.in',
    media: [
        {
            'media-metadata': [
                {
                    url: "https://static01.nyt.com/images/2019/06/21/us/politics/20dc-military1-sub/20dc-arms1-sub-square320.jpg"
                }
            ]
        }
    ]
};


beforeEach(() => {
    wrapper = shallow(<NewsItems
        summary={userProps.abstract}
        writtenBy={userProps.byline}
        publishedDate={userProps.published_date}
        newsLink={userProps.url}
        media={userProps.media} />);
});

describe('<NewsItems /> rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render one div', () => {
        expect(wrapper.find(ItemDiv)).toHaveLength(1);
    });

    it('should render one li element', () => {
        expect(wrapper.find(ListedItem)).toHaveLength(1);
    });


    it('should simulate Button click event', () => {
        global.open = jest.fn()
        wrapper.find(Button).simulate('click');
        expect(global.open.mock.calls.length).toEqual(1);
    });









});

