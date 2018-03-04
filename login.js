module.exports = {
    login: function(req, res) {

        // you might like to do a database look-up or something more scalable here
        if (req.body.username == 'user' && req.body.password == 'pass') {
            res.body.
        } else {
            req.flash('error', 'Username and password are incorrect');
            res.redirect('/login');
        }
    },

    stam: function(da) {
        if (da.body.username == 'user' && da.body.password == 'pass') {
            return true;
        } else {
            return false;
        }
    }
};