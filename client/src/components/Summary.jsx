import React from 'react';

const Summary = () => {

  let averageRating = 4.9;
  let reviewersCount = 55;

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
          </div>
        </div>
      </div>
    </div>
);
};

export default Summary;
