const fs = require('fs');

// images

module.exports.getImages = function() {
  return (JSON.parse(fs.readFileSync('data/images', 'utf8')));
}

module.exports.addImage = function(img) {
  let images = fs.readFileSync('data/images');
  images = JSON.parse(images);
  if (!images) {
    images = [];
  }

  images.push(img);
  fs.writeFileSync('data/images', JSON.stringify(images));
};

// users

module.exports.getUsers = function() {
  return (JSON.parse(fs.readFileSync('data/users', 'utf8')));
}

module.exports.addUser = function(user) {
  let users = fs.readFileSync('data/users');
  users = JSON.parse(users);
  if (!users) {
    users = [];
  }

  images.push(user);
  fs.writeFileSync('data/users', JSON.stringify(users));
};
