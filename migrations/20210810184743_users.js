

exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
       table.increments('id').primary();
       table.string('email', 255).notNullable();
       table.string('full_name', 255).notNullable();
       table.boolean('account_verified').notNullable().defaultTo(false)
       table.enum('role', ['full', 'admin', 'client']).notNullable().defaultTo('client');
    }).createTable('passwords', function (table) {
        table.increments('id').primary();
        table.integer("user_id").unsigned();
        table.foreign("user_id").references("users.id");
        table.string('salt', 255).notNullable();
        table.string('hash', 255).notNullable();
        table.integer('iterations', 255).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable("users")
    .dropTable("passwords");
};
