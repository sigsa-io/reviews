import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/style.css'

const Stars = ({
  id,
  rating,
}) => {
  let fullStarsCount = Math.floor(rating);
  let fractionalStar = Math.ceil((rating-fullStarsCount)*4)/4;
  let emptyStarsCount = 5-fullStarsCount-Math.ceil(fractionalStar);

  return (
    <div id={`reviews-star-rating-${id}`} className={styles[`reviews-star-rating-wrapper`]}>
      {Array(fullStarsCount).fill(1).map((_unused,key)=>{
        return(
        <object key={key} className={styles[`reviews-star-rating-individual-wrapper`]}>
          <div className={styles[`reviews-star-rating-individual-icon-full`]} />
        </object>
        )
      })}

      {
        fractionalStar===0?
          ``
          :
          fractionalStar===0.25?
            <object className={styles[`reviews-star-rating-individual-wrapper`]}>
              <div className={styles[`reviews-star-rating-individual-icon-quarter`]} />
            </object>
            :
            fractionalStar===0.5?
              <object className={styles[`reviews-star-rating-individual-wrapper`]}>
                <div className={styles[`reviews-star-rating-individual-icon-half`]} />
              </object>
              :
              fractionalStar===0.75?
                <object className={styles[`reviews-star-rating-individual-wrapper`]}>
                  <div className={styles[`reviews-star-rating-individual-icon-threequarter`]} />
                </object>
              :
              <object className={styles[`reviews-star-rating-individual-wrapper`]}>
                <div className={styles[`reviews-star-rating-individual-icon-full`]} />
              </object>
      }

      {Array(emptyStarsCount).fill(1).map((_unused,key)=>{
        return(
        <object key={key} className={styles[`reviews-star-rating-individual-wrapper`]}>
          <div className={styles[`reviews-star-rating-individual-icon-empty`]} />
        </object>
        )
      })}

    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.number,
};

export default Stars;
