exports.up = function(knex) {
    return knex.schema.createTable('service', function(table) {
        table.integer('id_festa').notNullable();
        table.foreign('id_festa').references('id').inTable('festa');
        table.binary('dj').notNullable();
        table.binary('fotografo').notNullable();
        table.binary('bartender').notNullable();
        table.binary('robozao').notNullable();
        table.binary('outros').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('service');
};
