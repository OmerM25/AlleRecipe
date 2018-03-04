const express = require('express')
const app = express();

function login(req, res) {

    // you might like to do a database look-up or something more scalable here
    if (req.body.username && req.body.username === 'user' && req.body.password && req.body.password === 'pass') {
        req.session.authenticated = true;
        res.redirect('/secure');
    } else {
        req.flash('error', 'Username and password are incorrect');
        res.redirect('/login');
    }

};