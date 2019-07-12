import PropTypes from 'prop-types';
import React from 'react';

const Review = ({
  review,
}) => {
  return (
  <div>
    <h3>Review {review.review_id}</h3>
  </div>
);
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
