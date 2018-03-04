const fs = require('fs');

// images

module.exports.getImages = function() {
  return (JSON.parse(fs.readFileSync('data/images', 'utf8')));
}

module.exports.addImage = function(img) {
  var images = [];

  try {
    var currentImages = fs.readFileSync('data/images');
    images = JSON.parse(currentImages);
  } catch (e) {

  }

  images.push(img);
  fs.writeFileSync('data/images', JSON.stringify(images));
};

// users

module.exports.getUsers = function() {
  return (JSON.parse(fs.readFileSync('data/users', 'utf8')));
}

module.exports.addUser = function(user) {
  var users = [];

  try {
    var currentUsers = fs.readFileSync('data/users');
    users = JSON.parse(currentUsers);
  } catch (e) {

  }

  users.push(user);
  fs.writeFileSync('data/users', JSON.stringify(users));
};
