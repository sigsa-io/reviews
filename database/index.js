const mysql = require('mysql');
const { user, password } = require('./secrets').login;

const connection = mysql.createConnection({
  host: 'localhost',
  user,
  password,
  database: 'sigsa',
});

connection.connect();

module.exports.getSummary = (id, setSummaryCB) => {
  const queryText_summary = `select
  restaurant_id,
  COUNT(DISTINCT user_id) as reviewersCount,
  COUNT(DISTINCT review_id) as reviewsCount,
  AVG(rating_overall) as value,
  AVG(rating_food) as food,
  AVG(rating_service) as service,
  AVG(rating_ambience) as ambience
  from reviews
  where
  restaurant_id='${id}'`;

  connection.query(queryText_summary, (err_summary, queryResult_summary) => {
    if (err_summary) setSummaryCB(err_summary, null);

    const {
      restaurant_id,
      reviewersCount,
      reviewsCount,
      value,
      food,
      service,
      ambience,
    } = queryResult_summary[0];

      const summary = {
        restaurant_id,
        reviewersCount,
        reviewsCount,
        overall_ratings: {
          food,
          service,
          ambience,
          value,
        },
      };

      setSummaryCB(null, summary);
  });
};

module.exports.getReviews = (id, setReviewsCB) => {
  const queryText_reviews = `select
  t.restaurant_id, r.restaurant_id, 
  t.restaurant_name, 
  r.review_id, 
  u.user_initials, 
  u.user_name, 
  u.user_location, 
  u.user_review_count, 
  r.dine_date, 
  r.rating_overall, 
  r.rating_food, 
  r.rating_service, 
  r.rating_ambience, 
  r.helpful_count, 
  r.body 
  from reviews r, users u, restaurants t 
  where 
  r.user_id=u.user_id 
  and 
  r.restaurant_id=t.restaurant_id 
  and 
  t.restaurant_id='${id}'`;

  connection.query(queryText_reviews, (err_reviews, queryResults_reviews) => {
    if (err_reviews) setReviewsCB(err_reviews, null);

    const reviews = queryResults_reviews.map(({
      restaurant_id,
      restaurant_name,
      review_id,
      user_initials,
      user_name,
      user_location,
      user_review_count,
      dine_date,
      rating_overall,
      rating_food,
      rating_service,
      rating_ambience,
      helpful_count,
      body,
    }) => {
      const obj = {
        restaurant_id,
        restaurant_name,
        review_id,
        user_initials,
        user_name,
        user_location,
        user_review_count,
        dine_date,
        rating_overall,
        rating_food,
        rating_service,
        rating_ambience,
        helpful_count,
        body,
      };

      return obj;
    });

    setReviewsCB(null, reviews);
  });
};
