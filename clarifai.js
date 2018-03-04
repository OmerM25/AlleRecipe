const Clarifai = require('clarifai');

const app = new Clarifai.App({apiKey: 'f106bed564d746c9abb461ebc63f9d34'}); // Our Clarifai user
const food_model = 'bd367be194cf45149e75f01d59f77ba7';

module.exports.predict = function(file) {
    return (app.models.predict(food_model, {base64: file}));
}