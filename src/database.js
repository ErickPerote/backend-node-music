const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'mybb',
        password: 'changeme',
        database: 'mybb'
    }
});

module.exports = knex;