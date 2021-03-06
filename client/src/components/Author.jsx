import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/style.css';

const Author = ({
  review: {
    review_id,
    user_name,
    user_location,
    user_review_count,
  },
}) => {

  const userName = user_name.split(' ')[0].concat(user_name.split(' ')[1][0]);
  const userInitials = user_name.split(' ')[0][0] + user_name.split(' ')[1][0];

  return (
    <div
      id={`reviews-${review_id}-author`}
      className={styles[`reviews-individual-review-author-details`]}
    >
      <div className={styles[`reviews-individual-review-author-initials-wrapper`]}>
        <div className={styles[`reviews-individual-review-author-initials-color`]+` `+styles[`reviews-individual-review-author-initials-shape`]}>
          <div className={styles[`reviews-individual-review-author-initials-text`]}>{userInitials}</div>
        </div>
      </div>
      <div className={styles[`reviews-individual-review-author-name-text`]}>
        <span><span>{userName}</span></span>
      </div>
      <span className={styles[`reviews-individual-review-author-location-text`]}>
        {`${user_location} `}
      </span>
      <div className={styles[`reviews-individual-review-author-review-count`]}>
        <span className={styles[`reviews-individual-review-author-review-count-icon`]} />
        <span>{`${user_review_count} reviews `}</span>
      </div>
    </div>
  );
};

Author.propTypes = {
  user_name: PropTypes.string,
  user_location: PropTypes.string,
  user_review_count: PropTypes.number,
};

export default Author;
