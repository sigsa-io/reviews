import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Content = ({
  review,
}) => {

  return (
    <div className="reviews-individual-review-content">
      <Header review={review} />
      <Body review={review} />
      <Footer review={review} />
    </div>
  );
};

Content.propTypes = {
  review: PropTypes.object,
};

export default Content;
