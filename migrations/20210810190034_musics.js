
exports.up = function(knex) {
    return knex.schema.createTable('musics', function (table) {
        table.increments('id');
        table.string('path', 255).notNullable();
        table.string('name', 255).notNullable();
        table.string('singer', 255).notNullable();
        table.string('picture_path', 255).notNullable();
        table.string('category', 255).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("musics");
};
