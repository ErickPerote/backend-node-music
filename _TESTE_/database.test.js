const knex = require('../src/database');



knex("teste").insert({ cpf: "081.005.983-55" }).then(function(data) {
    console.log(data)
}).catch(function(error) {
    console.log(error)
})


knex("teste").where({ cpf: "081.005.983-55" }).update({ cpf: "081.005.983-66" }).then(function(data) {
    console.log(data)
}).catch(function(error) {
    console.log(error)
})


knex.raw("SELECT * FROM teste").then(function(data) {
    console.log(data)
}).catch(function(error) {
    console.log(error)
})
