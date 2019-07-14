import PropTypes from 'prop-types';
import React from 'react';
import Sort from './Sort';
import Filter from './Filter';
import styles from '../styles/style.css';

const Toolbar = () => (
    <div id="reviews-toolbar" className={styles[`reviews-toolbar`]}>
        <Sort />
        <Filter />
    </div>
);

Toolbar.propTypes = {
};

export default Toolbar;
