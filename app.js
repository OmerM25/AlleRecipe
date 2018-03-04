const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const clarifai = require('./clarifai');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// fs.readFile('public/index.html', (err, html) => {
//    if(err) {
//        throw err;
//    }
// );

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index')
});

app.post('/predict', function(req, res) {
  clarifai.predict(req.data.picture).then(
    function(response) {
      res.send(JSON.stringify(response.outputs[0].data.concepts));
    }, function(err) {
      res.send(err);
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
