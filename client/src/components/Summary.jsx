import React from 'react';
import PropTypes from 'prop-types';
import Awards from './Awards';
import Overall from './Overall';
import styles from '../styles/style.css';

const Summary = ({
  summary,
  summary: {
    reviewersCount,
    reviewsCount,
    overallRatings,
    ratingFrequencies,
  },
}) => {

  const awards = ['Best Overall', 'Best Food', 'Best Service', 'Best Ambiance', 'Fit for Foodies', 'Notable Wine List', 'Special Occasion', 'American', 'Best Overall', 'Best Food', 'Best Service', 'Best Ambiance', 'Fit for Foodies', 'Healthy', 'Notable Wine List', 'Special Occasion', 'American'];
  const awardLocality = 'San Francisco Bay Area';

  return (
    <div id="reviews-summary" className={styles[`reviews-summary`]}>
      <div className={styles[`reviews-summary-wrapper`]}>

        <div className={styles[`reviews-summary-title`]}>
          {reviewersCount > 1 ?
            `What ${reviewersCount} People Are Saying` :
            `What ${reviewersCount} Person Is Saying`
          }
        </div>

        <Overall summary={summary} />

        <Awards awards={awards} awardLocality={awardLocality}/>

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
