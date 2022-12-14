const express = require('express');
const app = express();
const arr = [{id: 0, name: 'Lewis', age: 25}, {id: 1, name: 'Tom', age: 45}, {id: 2, name: 'Evan', age: 35}]

app.get('/', function (req, res) {
  res.send(arr);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});