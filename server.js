const express = require('express');
// Constants
const PORT = 8081;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/one-service/getDetails', (req, res) => {
  res.send('Hello one-service');
});
app.listen(PORT, () => {
  console.log(`Running on localhost:${PORT}`);
});