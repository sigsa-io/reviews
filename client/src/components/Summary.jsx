import React from 'react';

const Summary = () => {

  let overallRatings = {food:4.9,service:5.0,ambience:4.9,value:4.5};
  let averageRating = 4.9;
  let reviewersCount = 55;
  let ratingCategories = [5,4,3,2,1];
  let numberOfReviewsByRating = {1: 2, 2: 0 , 3: 3, 4: 8, 5: 87};
  let numberOfReviews = Object.values(numberOfReviewsByRating).reduce((x,y)=> x+y);

  return(
    <div id="reviews-summary" className="reviews-summary">
  <div>
    <h2>Summary</h2>
  </div>
      <div className="reviews-summary-wrapper">
        <div className="reviews-summary-title">
          What {reviewersCount} People Are Saying
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
                <span>{averageRating}</span>
                <span>based on recent ratings</span>
              </div>
            </div>

            <div className="reviews-summary-overall-ratings-wrapper">
              {Object.keys(overallRatings).map(category=>(
                <div className="reviews-summary-overall-ratings-individual-wrapper">
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
          </div>

          <div className="reviews-summary-filter-overall-ratings-wrapper">
            <div className="reviews-summary-filter-overall-ratings">

              {ratingCategories.map( (ratingCategory) =>
                <div data-value={ratingCategory} data-parameter="filterByOverallRating" className="reviewUpdateParameter">
                  <span>{ratingCategory}</span>
                  <div className="reviews-summary-filter-overall-ratings-bar-container">
                    <span
                      style={{ width: numberOfReviewsByRating[ratingCategory]/numberOfReviews*100+`%` }}
                      className="reviews-reviews-summary-filter-overall-ratings-bar"
                    />
                    <span />
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default Summary;
