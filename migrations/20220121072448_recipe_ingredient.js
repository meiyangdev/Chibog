
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredient', (table) => {
      table.increments('id')
      table.integer('recipe_id')
      table.integer('ingredient_id')
      table.string('amount')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('recipe_ingredient')
};
