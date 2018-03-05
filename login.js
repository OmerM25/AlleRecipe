const db = require('./fileHandler');

module.exports = {
    login: function(req, res) {
        var users = db.getUsers();

        if (exists(db.getUsers(), req.body.username).password == req.body.password) {
            res.status(200);
        } else {
            res.status(500);
        }
    }
};

function exists(list, element) {
    list.forEach(item => {
        if(item === element) {
            return element;
        }
    });

    return null;
};