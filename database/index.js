const mysql = require('mysql');
const { user, password } = require('./secrets').login;

const connection = mysql.createConnection({
  host: 'localhost',
  user,
  password,
  database: 'sigsa',
});

connection.connect();

module.exports.getReviews = (id, setReviewsCB) => {
  const queryText = `select 
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

  connection.query(queryText, (error, results) => {
    if (error) setReviewsCB(error, null);

    const reviews = results.map(({
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
