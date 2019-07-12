import React from 'react';
import PropTypes from 'prop-types';

const Awards = ({
  awards,
  awardLocality
}) => {

  const numberOfDisplayedAwards = 3;

  return (
    <div>
      <div>
        <div className="reviews-summary-subtitle">Loved For</div>

        <div className="reviews-summary-awards-wrapper">

          <input id="dinersChoiceShowMore" type="checkbox" style={{ display: 'none' }} />

          {awards.map((award, key) => (
            <object key={key} data-hide={key > numberOfDisplayedAwards - 1} className="reviews-summary-awards-individual-wrapper">
              <div className="reviews-summary-awards-individual-container">
                <div className="reviews-summary-awards-individual">
                  <div className="reviews-summary-awards-individual-icon-wrapper reviews-individual-icon-wrapper">
                    <i className="reviews-summary-awards-individual-icon" />
                  </div>

                  <div className="reviews-individual-text-wrapper">
                    <div className="reviews-summary-awards-individual-name">{award}</div>
                    <div className="reviews-summary-awards-individual-locality">{awardLocality}</div>
                  </div>

                </div>
              </div>
            </object>
          ))}

          {awards.length <= 3 ? <div /> : (
            <label htmlFor="dinersChoiceShowMore" className="reviews-summary-awards-individual-wrapper">
              <div className="reviews-summary-awards-individual-container">
                <div className="reviews-summary-awards-individual">
                  <div className="reviews-individual-text-wrapper">
                    <div className="reviews-summary-awards-individual-name">
                      {`+${awards.length - numberOfDisplayedAwards} More`}
                    </div>
                  </div>
                </div>
              </div>
            </label>
          )}

        </div>
      </div>
    </div>
  );
};

Awards.propTypes = {
  awards: PropTypes.array,
  awardLocality: PropTypes.string,
};

export default Awards;
