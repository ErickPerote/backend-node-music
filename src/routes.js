const express = require('express')
module.exports =  function (app) {
    var api = express.Router();
    var users = require('./controllers/user.controller');
    api.post('/auth', users.auth);


    app.use('/api/v1', api);
};