const path = require ('path');
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'public');

const express = require('express');
const { getSummary, getReviews } = require(path.resolve(ROOT_DIR, 'database','index'));

const app = express();
const port = 3004;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Initial server request successful.'));

app.get('/restaurants/:restaurant_id/reviews', (req, res) => {
  const { restaurant_id } = req.params;

  getSummary(restaurant_id, (err_summary, summary) => {
    if (err_summary) res.status(500).send(err_summary.message);

    getReviews(restaurant_id, (err_reviews, reviews) => {
      if (err_reviews) res.status(500).send(err_reviews.message);
      res.send(JSON.stringify({ summary, reviews }));
    });
  });
});

app.listen(port, () => {
  console.log(`Sigsa - Reviews app listening on port ${port}!`);
});
