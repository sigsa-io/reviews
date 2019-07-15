import React from 'react';
import { shallow } from 'enzyme';

import initialState from '../../client/src/InitialState.js';
import App from '../../client/src/components/App';
import Summary from '../../client/src/components/Summary';
import Feed from '../../client/src/components/Feed';
import Overall from '../../client/src/components/Overall';
import Awards from '../../client/src/components/Awards';
import Toolbar from '../../client/src/components/Toolbar';
import List from '../../client/src/components/List';
import Review from '../../client/src/components/Review';
import Author from '../../client/src/components/Author';
import Content from '../../client/src/components/Content';
import Header from '../../client/src/components/Header';
import Body from '../../client/src/components/Body';
import Stars from '../../client/src/components/Stars';

describe('<App />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<App initialState={initialState} />);
    expect(wrapper.find('#reviews')).toHaveLength(1);
    expect(wrapper.find('#menu')).toHaveLength(0);
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('should render two child components', () => {
      let wrapper = shallow(<App initialState={initialState} />);
      expect(wrapper.children()).toHaveLength(2);
  });

});

describe('<Summary />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Summary summary={initialState.summary} />);
    expect(wrapper.find('#reviews-summary')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);
  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Summary summary={initialState.summary} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});


describe('<Feed />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Feed reviews={initialState.reviews} />);
    expect(wrapper.find('#reviews-feed')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Feed reviews={initialState.reviews} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});


describe('<Overall />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Overall summary={initialState.summary} />);
    expect(wrapper.find('#reviews-summary-overall')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Overall summary={initialState.summary} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});


describe('<Awards />', () => {
  const awards = ['Best Overall', 'Best Food', 'Best Service', 'Best Ambiance', 'Fit for Foodies', 'Notable Wine List', 'Special Occasion', 'American', 'Best Overall', 'Best Food', 'Best Service', 'Best Ambiance', 'Fit for Foodies', 'Healthy', 'Notable Wine List', 'Special Occasion', 'American'];
  const awardLocality = 'San Francisco Bay Area';

  it('should render correctly', () => {
    let wrapper = shallow(<Awards awards={awards} awardLocality={awardLocality}/>);
    expect(wrapper.find('#reviews-summary-awards')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Awards awards={awards} awardLocality={awardLocality}/>);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});


describe('<Toolbar />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Toolbar />);
    expect(wrapper.find('#reviews-toolbar')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });
  if (process.env.NODE_ENV !== 'test') {
    it('should render at least one component', () => {
        let wrapper = shallow(<Toolbar />);
        expect(wrapper.children().length).toBeGreaterThan(0);
    });
  }

});


describe('<List />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<List reviews={initialState.reviews} />);
    expect(wrapper.find('#reviews-list')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<List reviews={initialState.reviews} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});

describe('<Review />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Review review={initialState.reviews[0]} />);
    expect(wrapper.find(`#review-${initialState.reviews[0].review_id}`)).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Review review={initialState.reviews[0]} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});

describe('<Author />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Author review={initialState.reviews[0]} />);
    expect(wrapper.find(`#reviews-${initialState.reviews[0].review_id}-author`)).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Author review={initialState.reviews[0]} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});

describe('<Content />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Content review={initialState.reviews[0]} />);
    expect(wrapper.find(`#review-content-container-${initialState.reviews[0].review_id}`)).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Content review={initialState.reviews[0]} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});


describe('<Header />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Header review={initialState.reviews[0]} />);
    expect(wrapper.find(`#review-header-container-${initialState.reviews[0].review_id}`)).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Header review={initialState.reviews[0]} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});

describe('<Body />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Body review={initialState.reviews[0]} />);
    expect(wrapper.find(`#review-body-container-${initialState.reviews[0].review_id}`)).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Body review={initialState.reviews[0]} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});

describe('<Stars />', () => {

  it('should render correctly in the summary', () => {
    let overallRatings = initialState.summary.overallRatings;
    const averageRatingValue = Object.values(overallRatings).reduce((x, y) => x + y) / Object.values(overallRatings).length;
    let wrapper = shallow(<Stars id={`restaurant-${initialState.summary.restaurant_id}`} rating={averageRatingValue} />);
    expect(wrapper.find(`#reviews-star-rating-restaurant-${initialState.summary.restaurant_id}`)).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);
  });

  it('should render correctly in a review', () => {
    let wrapper = shallow(<Stars id={`review-${initialState.reviews[0].review_id}`} rating={initialState.reviews[0].rating_overall} />);
    expect(wrapper.find(`#reviews-star-rating-review-${initialState.reviews[0].review_id}`)).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);
  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Stars id={initialState.summary.restaurant_id} rating={initialState.summary.overallRatings.food} />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});
