import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({
  summary: {
    reviewersCount,
    reviewsCount,
    overallRatings,
    ratingFrequencies,
  },
}) => {

  const averageRatingValue = Object.values(overallRatings).reduce((x, y) => x + y) / Object.values(overallRatings).length;

  const ratingCategories = [5, 4, 3, 2, 1];

  const awards = ['Best Overall', 'Best Food', 'Best Service', 'Best Ambiance', 'Fit for Foodies', 'Notable Wine List', 'Special Occasion', 'American', 'Best Overall', 'Best Food', 'Best Service', 'Best Ambiance', 'Fit for Foodies', 'Healthy', 'Notable Wine List', 'Special Occasion', 'American'];
  const restaurant_locality = 'San Francisco Bay Area';
  const numberOfDisplayedAwards = 3;

  return (
    <div id="reviews-summary" className="reviews-summary">

      <div className="reviews-summary-wrapper">
        <div className="reviews-summary-title">
          {reviewersCount > 1 ? `What ${reviewersCount} People Are Saying` : `What ${reviewersCount} Person Is Saying`}
        </div>
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


        <div>
          <div>
            <div className="reviews-summary-subtitle">Loved For</div>
            <div className="reviews-summary-awards-wrapper">
              <input id="dinersChoiceShowMore" type="checkbox" style={{ display: 'none' }} />

              {awards.map((award, key) => (
                <object key={key} data-hide={key > numberOfDisplayedAwards - 1} className="reviews-summary-awards-individual-wrapper">
                  <div className="reviews-summary-awards-individual-container">
                    <div className="reviews-summary-awards-individual">
                      <div className="reviews-summary-awards-individual-icon-wrapper reviews-individual-icon-wrapper">
                        <i className="reviews-summary-awards-individual-icon" />
                      </div>
                      <div className="reviews-individual-text-wrapper">
                        <div className="reviews-summary-awards-individual-name">{award}</div>
                        <div className="reviews-summary-awards-individual-locality">{restaurant_locality}</div>
                      </div>
                    </div>
                  </div>
                </object>
              ))}
              {awards.length <= 3 ? <div /> : (
                <label htmlFor="dinersChoiceShowMore" className="reviews-summary-awards-individual-wrapper">
                  <div className="reviews-summary-awards-individual-container">
                    <div className="reviews-summary-awards-individual">
                      <div className="reviews-individual-text-wrapper">
                        <div className="reviews-summary-awards-individual-name">
                          {`+${awards.length - numberOfDisplayedAwards} More`}
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              )}

            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

Summary.propTypes = {
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
export default Summary;
