import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from './Toolbar';
import List from './List';

const Feed = ({ reviews }) => (
  <div id="reviews-feed" className="reviews-feed">
    <Toolbar />
    <List reviews={reviews} />
  </div>
);

Feed.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Feed;
