import React from 'react';
import { shallow } from 'enzyme';

import App from '../../client/src/components/App';
import Summary from '../../client/src/components/Summary';
import Feed from '../../client/src/components/Feed';


describe('<App />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('#reviews')).toHaveLength(1);
    expect(wrapper.find('#menu')).toHaveLength(0);
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('should render two child components', () => {
      let wrapper = shallow(<App />);
      expect(wrapper.children()).toHaveLength(2);
  });

});

describe('<Summary />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Summary />);
    expect(wrapper.find('#reviews-summary')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);
  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Summary />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});


describe('<Feed />', () => {

  it('should render correctly', () => {
    let wrapper = shallow(<Feed />);
    expect(wrapper.find('#reviews-feed')).toHaveLength(1);
    expect(wrapper.find('#reviews-toolbar')).toHaveLength(1);
    expect(wrapper.find('#reviews-results')).toHaveLength(1);
    expect(wrapper.find('#reviews')).toHaveLength(0);

  });

  it('should render at least one component', () => {
      let wrapper = shallow(<Feed />);
      expect(wrapper.children().length).toBeGreaterThan(0);
  });

});
