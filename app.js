const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const clarifai = require('./clarifai');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// fs.readFile('public/index.html', (err, html) => {
//    if(err) {
//        throw err;
//    }
// );
const login = require('./login');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/predict', function(req, res) {
  clarifai.predict(req.body.picture).then(
    function(response) {
      var ingredients = response.outputs[0].data.concepts;
      res.status(200).send(ingredients);
    }, function(err) {
      res.status(500).send(err);
    });
});

app.post('/login', function (req, res) {
   login.login(req, res);
});

app.listen(PORT, function () {
  console.log('Ready');
});
