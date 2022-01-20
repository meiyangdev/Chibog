
exports.up = function(knex) {
  return knex.schema.createTable('recipe', (table) => {
      table.increments('id').primary
      table.string('name')
      table.string('category')
      table.string('type')
      table.string('instructions')
      table.string('youtubelink')
      table.string('about')
      table.string('image_food')
      table.string('origin')
      table.string('image_origin')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipe')
};
