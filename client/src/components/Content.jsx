import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Body from './Body';
// import Footer from './Footer';
import styles from '../styles/style.css';

const Content = ({
  review,
  review: {
    review_id,
  },
}) => {

  return (
    <div
      id={`review-content-container-${review_id}`}
      className={styles[`reviews-individual-review-content`]}
    >
      <Header review={review} />
      <Body review={review} />
      {/* <Footer review={review} /> */}
    </div>
  );
};

Content.propTypes = {
  review: PropTypes.object,
};

export default Content;
