const Clarifai = require('clarifai');

const app = new Clarifai.App({apiKey: 'f5c4dd0e5fa8496ca17f582fa43c6964'}); // Our Clarifai user
const food_model = 'bd367be194cf45149e75f01d59f77ba7';

module.exports.predict = function(file) {
    return (app.models.predict(food_model, {base64: file}));
}