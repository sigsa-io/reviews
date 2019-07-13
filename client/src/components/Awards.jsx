import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/style.css';

const Awards = ({
  awards,
  awardLocality
}) => {

  const numberOfDisplayedAwards = 3;

  return (
    <div id="reviews-summary-awards">
      <div>
        <div className={styles[`reviews-summary-subtitle`]}>Loved For</div>

        <div className={styles[`reviews-summary-awards-wrapper`]}>

          <input id="dinersChoiceShowMore" type="checkbox" style={{ display: 'none' }} />

          {awards.map((award, key) => (
            <object key={key} data-hide={key > numberOfDisplayedAwards - 1} className={styles[`reviews-summary-awards-individual-wrapper`]}>
              <div className={styles[`reviews-summary-awards-individual-container`]}>
                <div className={styles[`reviews-individual-icon-text-wrapper`]}>
                  <div className={styles[`reviews-summary-awards-individual-icon-wrapper`]+` `+styles[`reviews-individual-icon-wrapper`]}>
                    <i className={styles[`reviews-summary-awards-individual-icon`]} />
                  </div>

                  <div className={styles[`reviews-individual-text-wrapper`]}>
                    <div className={styles[`reviews-summary-awards-individual-name`]}>{award}</div>
                    <div className={styles[`reviews-summary-awards-individual-locality`]}>{awardLocality}</div>
                  </div>

                </div>
              </div>
            </object>
          ))}

          {awards.length <= 3 ? <div /> : (
            <label htmlFor="dinersChoiceShowMore" className={styles[`reviews-summary-awards-individual-wrapper`]}>
              <div className={styles[`reviews-summary-awards-individual-container`]}>
                <div className={styles[`reviews-individual-icon-text-wrapper`]}>
                  <div className={styles[`reviews-individual-text-wrapper`]}>
                    <div className={styles[`reviews-summary-awards-individual-name`]}>
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
