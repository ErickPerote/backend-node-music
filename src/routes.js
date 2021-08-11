const express = require('express')
const access = require('./middleware/access.middleware')

module.exports =  function (app) {
    // CONTROLLERS
    var users = require('./controllers/user.controller');
    var musics = require('./controllers/musics.controller');

    // EXPRESS ROUTES
    var api = express.Router();

    api.post('/auth', users.auth);

    api.get('/musics', [
        access(['admin', 'client']),
        musics.listAll
    ]);


    app.use('/api/v1', api);
};