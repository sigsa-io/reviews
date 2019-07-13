import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'Moment';

const Header = ({
  review: {
    review_id,
    dine_date,
    rating_overall,
    rating_food,
    rating_service,
    rating_ambience,
  },
}) => {

  const ratingCategories = ['Overall', 'Food', 'Service', 'Ambience'];
  const ratings = [rating_overall, rating_food, rating_service, rating_ambience];

  return (
    <div
      id={`review-header-container-${review_id}`}
      className="reviews-individual-review-content-header"
    >
      <div className="reviews-individual-review-content-header-top">
        <div className="reviews-star-rating-wrapper">
          ★★★★★
        </div>

        <div className="reviews-individual-review-content-header-dine-date-wrapper">
          <span className="reviews-individual-review-content-header-dine-date-text">
            {`Dined on ${Moment(dine_date).format('LL')}`}
          </span>
        </div>
      </div>

      <div className="reviews-individual-review-content-header-bottom">
        <span className="reviews-individual-review-content-header-rating-category-text">overall </span>
        <span className="reviews-individual-review-content-header-rating-category-number">{ratings[0]}</span>

        <span className="reviews-individual-review-content-header-rating-category-text">food </span>
        <span className="reviews-individual-review-content-header-rating-category-number">{ratings[1]}</span>

        <span className="reviews-individual-review-content-header-rating-category-text">service </span>
        <span className="reviews-individual-review-content-header-rating-category-number">{ratings[2]}</span>

        <span className="reviews-individual-review-content-header-rating-category-text">ambience </span>
        <span className="reviews-individual-review-content-header-rating-category-number">{ratings[3]}</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  review_id: PropTypes.number,
  dine_date: PropTypes.string,
  rating_overall: PropTypes.number,
  rating_food: PropTypes.number,
  rating_service: PropTypes.number,
  rating_ambience: PropTypes.number,
};

export default Header;
