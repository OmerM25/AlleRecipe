const db = require('./fileHandler');

module.exports.login = 
    function(req, res) {
        var users = db.getUsers();

        var currUser = exists(db.getUsers(), req.body.username);

        if (currUser != null &&
            currUser.password == req.body.password) {
            return currUser;
        } else {
            return null;
        }
    };

function exists(list, element) {
    var returnVar = null;

    list.forEach(function(item){
        if(item.username == element) {
            returnVar = item;
            return;
        }
    });

    return returnVar;
};

