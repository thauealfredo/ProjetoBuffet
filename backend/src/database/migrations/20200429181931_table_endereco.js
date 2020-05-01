
exports.up = function(knex) {
return knex.schema.createTable('endereco', function(table) {
    table.integer('id_contratante').notNullable();
    table.foreign('id_contratante').references('id').inTable('contratante');
    table.string('logradouro').notNullable();
    table.string('bairro').notNullable();
    table.string('cidade').notNullable();
    table.specificType('uf', 'char(2)').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('endereco');
};
