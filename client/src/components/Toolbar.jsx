import PropTypes from 'prop-types';
import React from 'react';
import Sort from './Sort';
import Filter from './Filter';

const Toolbar = () => (
    <div id="reviews-toolbar" className="reviews-toolbar">
        <Sort />
        <Filter />
    </div>
);

Toolbar.propTypes = {
};

export default Toolbar;
