const express = require('express')
const app = express();

app.post('/login', (req, res) => {
    clarifai.predict(req.data.picture).then(
        function(response) {
          res.send(JSON.stringify(response.outputs[0].data.concepts));
        }, function(err) {
          res.send(err);
        });
});

app.post('/predict', (req, res) => {
  clarifai.predict(req.data.picture).then(
    function(response) {
      res.send(JSON.stringify(response.outputs[0].data.concepts));
    }, function(err) {
      res.send(err);
    });
});