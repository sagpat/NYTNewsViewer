import React from 'react';
import { shallow } from 'enzyme';
import NewsFeed from '../components/popularNews/NewsFeed';
import { Heading, UnorderedList } from '../components/popularNews/PopularNews-styled';

let wrapper;
const popularNewsData = [
    {
        abstract: 'Test news data',
        byline: '"By MICHAEL D. SHEAR',
        published_date: '23/05/2019',
        url: '"https://www.nytimes.com/2019/06/20/world/middleeast/iran-us-drone.html"',
        media: [
            {
                caption: "“Let’s see what happens,” President Trump said Thursday after Iran shot down an American surveillance drone.",
                copyright: "Erin Schaff/The New York Times"
            }
        ]
    }
];

beforeEach(() => {
    wrapper = shallow(<NewsFeed popularNewsData={popularNewsData} />);
});

describe('NewsFeed rendering', () => {
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render one heading', () => {
        expect(wrapper.find(Heading)).toHaveLength(1);
    });

    it('should render one ul element', () => {
        expect(wrapper.find(UnorderedList)).toHaveLength(1);
    });
});

