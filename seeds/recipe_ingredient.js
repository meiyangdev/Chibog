
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 301, recipe_id: '101', ingredients_id: 'rowValue1', amount: 'amount'},
        {id: 302, recipe_id: '101', ingredients_id: 'rowValue1', amount: 'amount'},
        {id: 303, recipe_id: '101', ingredients_id: 'rowValue1', amount: 'amount'},

      ]);
    });
};
