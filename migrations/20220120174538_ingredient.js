
exports.up = function(knex) {
  return knex.schema.createTable('ingredient', (table)=>{
    table.increments('id').primary
    table.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingredient')
};
