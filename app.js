const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const clarifai = require('./clarifai');
const recipes = require('./recipes');
const bodyParser = require('body-parser');
const dataHandler = require('./fileHandler');

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

app.post('/recipe', function(req, res) {
  var promise = recipes.getRecipe(req.body.ingredients);
  promise.then(function(response) {
    let recipes = [];
    for (currRecipe in response.data.hits) {
      var rcp = response.data.hits[currRecipe].recipe;
      var recipe = {
        image: rcp.image,
        ingrLines: rcp.ingredientLines,
        name: rcp.label,
        calories: rcp.calories,
        cautions: rcp.cautions,
        link: rcp.url
      };

      recipes.push(recipe);
    }

    res.status(200).send(recipes);
  }).catch(function(err) {
    res.status(500).send(err);
  });
});

app.post('/predict', function(req, res) {
  const base64 = req.body.picture;

  clarifai.predict(req.body.picture).then(
    function(response) {
      const ingredients = response.outputs[0].data.concepts;
      let imageModel = {
        src: base64,
        ingredients: ingredients
      };

      dataHandler.addImage(imageModel);
      res.status(200).send(ingredients);
    }, function(err) {
      res.status(500).send(err);
    });
});

app.post('/login', function (req, res) {
   login.login(req, res);
});

app.get('/images', function (req, res) {
  res.send(dataHandler.getImages());
})

app.listen(PORT, function () {
  console.log('Ready');
});
