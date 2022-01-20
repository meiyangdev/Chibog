
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 301, recipe_id: '101', ingredients_id: '201', amount: '2 tablespoons'},
        {id: 302, recipe_id: '101', ingredients_id: '202', amount: '5'},
        {id: 303, recipe_id: '101', ingredients_id: '203', amount: '5'},
        {id: 304, recipe_id: '101', ingredients_id: '204', amount: '1'},
        {id: 305, recipe_id: '101', ingredients_id: '205', amount: '8 cloves'},
        {id: 306, recipe_id: '101', ingredients_id: '206', amount: '5'},
        {id: 307, recipe_id: '101', ingredients_id: '207', amount: '1/4 teaspoon'},
        {id: 308, recipe_id: '101', ingredients_id: '208', amount: '1 cup'},
        {id: 309, recipe_id: '101', ingredients_id: '209', amount: '1/3 cup'},

        {id: 310, recipe_id: '102', ingredients_id: '210', amount: '2 cups'},
        {id: 311, recipe_id: '102', ingredients_id: '211', amount: '1'},
        {id: 312, recipe_id: '102', ingredients_id: '212', amount: '1 cup'},
        {id: 313, recipe_id: '102', ingredients_id: '213', amount: '1/2 cup'},
        {id: 314, recipe_id: '102', ingredients_id: '214', amount: '2 cups'},
        {id: 315, recipe_id: '102', ingredients_id: '215', amount: '1 cup'},
        {id: 316, recipe_id: '102', ingredients_id: '216', amount: '2'},
        {id: 317, recipe_id: '102', ingredients_id: '217', amount: '1 cup'},
        {id: 318, recipe_id: '102', ingredients_id: '218', amount: '1 cup'},
        {id: 319, recipe_id: '102', ingredients_id: '219', amount: '4 scoops'},
        {id: 320, recipe_id: '102', ingredients_id: '220', amount: '1/2 cup'},

        {id: 321, recipe_id: '103', ingredients_id: '221', amount: '2 tablespoons'},
        {id: 322, recipe_id: '103', ingredients_id: '201', amount: 'tablespoons'},
        {id: 323, recipe_id: '103', ingredients_id: '222', amount: '2 1/2 pounds'},
        {id: 324, recipe_id: '103', ingredients_id: '205', amount: '14 cloves'},
        {id: 325, recipe_id: '103', ingredients_id: '204', amount: '1/2'},
        {id: 326, recipe_id: '103', ingredients_id: '223', amount: '1'},
        {id: 327, recipe_id: '103', ingredients_id: '224', amount: '4'},
        {id: 328, recipe_id: '103', ingredients_id: '225', amount: '1'},
        {id: 329, recipe_id: '103', ingredients_id: '226', amount: '4 ounces'},
        {id: 330, recipe_id: '103', ingredients_id: '227', amount: '2 tablespoons'},
        {id: 331, recipe_id: '103', ingredients_id: '228', amount: '8 1/2 ounces'},
        {id: 332, recipe_id: '103', ingredients_id: '229', amount: '1 tablespoon'},
        {id: 333, recipe_id: '103', ingredients_id: '230', amount: '2 ounces'},
        {id: 334, recipe_id: '103', ingredients_id: '231', amount: '2 1/2 ounces'},
        {id: 335, recipe_id: '103', ingredients_id: '232', amount: '2 tablespoons'},
        {id: 336, recipe_id: '103', ingredients_id: '233', amount: 'for seving'},

        {id: 337, recipe_id: '104', ingredients_id: '234', amount: '1'},
        {id: 338, recipe_id: '104', ingredients_id: '235', amount: 'heaps'},
      ]);
    });
};
