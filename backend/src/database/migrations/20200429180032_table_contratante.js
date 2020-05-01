
exports.up = function(knex) {
    return knex.schema.createTable('contratante', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.integer('cpf').notNullable();
        table.integer('rg').notNullable();
        table.datetime('motivoFesta').notNullable();
        table.datetime('horaFesta').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('contratante');
};
