const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const clarifai = require('./clarifai');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

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
      res.send(JSON.stringify(response.outputs[0].data.concepts));
    }, function(err) {
      res.send(err);
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.post('/login', function (req, res) {
   login.login(req, res);
});

app.get('/stam', function () {
  var da = {
    'body': {
      'username': "username",
      'password': "pass"
    }
  }
  login.stam(da);
});
