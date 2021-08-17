const knex = require('../database');

exports.listAll = async function(req, res) {
    let musics = await knex('musics').select()
    res.send(musics)
}