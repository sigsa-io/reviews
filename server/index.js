const express = require('express');

const app = express();
const port = 3004;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
  console.log(`Sigsa - Reviews app listening on port ${port}!`);
});
