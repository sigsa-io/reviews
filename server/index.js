const express = require('express');
const { getReviews } = require('../database/index');

const app = express();
const port = 3004;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Initial server request successful.'));

app.get('/restaurants/:restaurant_id/reviews', (req, res) => {
  const { restaurant_id } = req.params;

  getReviews(restaurant_id, (err, reviews) => {
    if (err) res.status(500).send(err.message);
    res.send(JSON.stringify(reviews));
  });
});

app.listen(port, () => {
  console.log(`Sigsa - Reviews app listening on port ${port}!`);
});
