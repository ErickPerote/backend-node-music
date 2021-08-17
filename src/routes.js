const express = require('express')
const access = require('./middleware/access.middleware')

module.exports =  function (app) {
    // CONTROLLERS
    var users = require('./controllers/user.controller');
    var musics = require('./controllers/musics.controller');
    var music = require('./controllers/music.controller');

    // EXPRESS ROUTES
    var api = express.Router();

    api.post('/auth', users.auth);
    api.post('/register', users.register);

    api.get('/musics', [
        access(['admin', 'client']),
        musics.listAll
    ]);

    api.get('/music/:file', [
        access(['admin', 'client']),
        music.play
    ]);


    app.use('/api/v1', api);
};