import PropTypes from 'prop-types';
import React from 'react';
import Review from './Review';

const List = ({ reviews }) => (
  <div id="reviews-list" className="reviewsList">
    {reviews.map( (review, key) =>
      <div key={key}>
        <Review review={review} />
      </div>
    )}
  </div>
);

List.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default List;
