import React from 'react';
import PropTypes from 'prop-types';

const Overall = ({
  summary: {
    reviewersCount,
    reviewsCount,
    overallRatings,
    ratingFrequencies,
  },
}) => {

  const averageRatingValue = Object.values(overallRatings).reduce((x, y) => x + y) / Object.values(overallRatings).length;

  const ratingCategories = [5, 4, 3, 2, 1];

  return (
    <div className="reviews-summary-overall-wrapper">
      <div>
        <div className="reviews-summary-subtitle">
          Overall ratings and reviews
        </div>
        <div className="reviews-summary-overall-text">
          Reviews can only be made by diners who have eaten at this restaurant
        </div>
        <div className="reviews-summary-overall-rating-average-wrapper">
          <div className="reviews-star-rating-wrapper">
            ★★★★★
          </div>
          <div className="reviews-short-text">
            <span>{averageRatingValue}</span>
            <span>based on recent ratings</span>
          </div>
        </div>

        <div className="reviews-summary-overall-ratings-wrapper">
          {Object.keys(overallRatings).map((category, key) => (
            <div key={key} className="reviews-summary-overall-ratings-individual-wrapper">
              <div className="reviews-summary-overall-ratings-individual-rating">
                {overallRatings[category]}
              </div>
              <div className="reviews-summary-overall-ratings-individual-category">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-summary-filter-overall-ratings-wrapper">
        <div className="reviews-summary-filter-overall-ratings">

          {ratingCategories.map((ratingCategory, key) => (
            <div key={key} data-value={ratingCategory} data-parameter="filterByOverallRating" className="reviewUpdateParameter">
              <span>{ratingCategory}</span>
              <div className="reviews-summary-filter-overall-ratings-bar-container">
                {ratingFrequencies[ratingCategory] ? (
                  <span
                    style={{ width: `${ratingFrequencies[ratingCategory] / reviewsCount * 100}%` }}
                    className="reviews-summary-filter-overall-ratings-bar"
                  />
                ) : <span />}
                <span />
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

Overall.propTypes = {
  summary: PropTypes.shape({
    overall_ratings: PropTypes.exact({
      food: PropTypes.number,
      service: PropTypes.number,
      ambience: PropTypes.number,
      value: PropTypes.number,
    }),
    ratingFrequencies: PropTypes.objectOf(PropTypes.number),
    restaurant_id: PropTypes.string,
    reviewersCount: PropTypes.number,
    reviewsCount: PropTypes.number,
  }),
};

export default Overall;
