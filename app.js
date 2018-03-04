const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const clarifai = require('./clarifai');
const app = express();
const login = require('./login');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/predict', (req, res) => {
  clarifai.predict(req.data.picture).then(
    function(response) {
      res.send(JSON.stringify(response.outputs[0].data.concepts));
    }, function(err) {
      res.send(err);
    });
});

app.post('/login', function (req, res) {
   login.login(req, res);
});

app.listen(PORT, function () {
  console.log('Ready');
});