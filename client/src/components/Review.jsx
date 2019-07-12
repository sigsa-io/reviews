import PropTypes from 'prop-types';
import React from 'react';

const Review = ({
  review,
  review: {
    review_id,
    user_initials,
    user_name,
    user_location,
    user_review_count,
    dine_date,
    rating_overall,
    rating_food,
    rating_service,
    rating_ambience,
    helpful_count,
    body,
  },
}) => {
  return (
  <div>
    <h3>Review {review.review_id}</h3>
  </div>
);
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
  review_id: PropTypes.number,
  user_initials: PropTypes.string,
  user_name: PropTypes.string,
  user_location: PropTypes.string,
  user_review_count: PropTypes.number,
  dine_date: PropTypes.string,
  rating_overall: PropTypes.number,
  rating_food: PropTypes.number,
  rating_service: PropTypes.number,
  rating_ambience: PropTypes.number,
  helpful_count: PropTypes.number,
  body: PropTypes.string,
};

export default Review;
