import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'Moment';

const Body = ({
  review: {
    review_id,
    body,
  },
}) => {

  return (

    <div
      data-clamp="3"
      id={`review-body-container-${review_id}`}
      className="reviewBodyContainer reviews-individual-review-content-body">
      <p id={`review-body-original-${review_id}`} style={{}}>
        {body.split('\n').map((i, key) => (
          <object key={key}>
            {`${i} `}
            <br />
          </object>
        ))}
      </p>
    </div>

  );
};

Body.propTypes = {
  review_id: PropTypes.number,
  body: PropTypes.string,
};

export default Body;
