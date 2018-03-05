const https = require("https");

const url = "https://api.edamam.com/search?q=";
const url2 =  "&app_id=492b1ba9&app_key=6d50af599cd771f37e3c7f4e3e310173&to=10";

module.exports.getRecipe = function(ingredients) {
    var finalUrl = url;
    
    for (ing in ingredients) {
        finalUrl += ingredients;
        finalUrl += ",";
    }

    finalUrl.substring(0, finalUrl.length - 1);
    finalUrl += url2;

    https.get(finalUrl, res => {
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
        })
    });
};