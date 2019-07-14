import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from './Toolbar';
import List from './List';
import styles from '../styles/style.css';

const Feed = ({ reviews }) => (
  <div id="reviews-feed" className={styles[`reviews-feed`]}>
    <Toolbar />
    <List reviews={reviews} />
  </div>
);

Feed.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default Feed;
