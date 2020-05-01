
exports.up = function(knex) {
    return knex.schema.createTable('festa', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.integer('convidados').notNullable();
        table.datetime('motivoFesta').notNullable();
        table.datetime('horaFesta').notNullable();
        table.string('nome_contratante').notNullable();
        table.integer('id_contratante').notNullable();
        table.foreign('id_contratante').references('id_contratante').inTable('contratante');
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('festa');
};
