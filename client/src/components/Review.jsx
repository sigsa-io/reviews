import PropTypes from 'prop-types';
import React from 'react';
import Author from './Author';
import Content from './Content';

const Review = ({
  review,
  review: {
    review_id,
  },
}) => {

  return (
    <div id={review.review_id} className="reviewListItem reviews-individual-review-wrapper">
      <div
        id={`review-${review.review_id}`}
        className="reviews-individual-review"
      >
        <Author review={review} />
        <Content review={review} />
      </div>
    </div>
   );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
  review_id: PropTypes.number,
};

export default Review;
