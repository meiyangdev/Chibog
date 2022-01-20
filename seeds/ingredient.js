
exports.seed = function(knex) {
  // Deletes ALL existing entries

  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 201, name: 'canola oil'},
        {id: 202, name: 'chicken drumsticks'},
        {id: 203, name: 'chicken thighs'},
        {id: 204, name: 'onion'},
        {id: 205, name: 'garlic'},
        {id: 206, name: 'bay leaves'},
        {id: 207, name: 'black peppercorns'},
        {id: 208, name: 'vinegar'},
        {id: 209, name: 'soy sauce'},

        {id: 210, name: 'shaved ice'},
        {id: 211, name: 'banana'},
        {id: 212, name: 'shreded coconut'},
        {id: 213, name: 'sweet corn'},
        {id: 214, name: 'evaporated milk'},
        {id: 215, name: 'gelatin'},
        {id: 216, name: 'mangoes'},
        {id: 217, name: 'jackfruit'},
        {id: 218, name: 'sweet yams'},
        {id: 219, name: 'ice cream'},
        {id: 220, name: 'rice pops'},

        {id: 221, name: 'white rice flour'},
        {id: 222, name: 'oxtails'},
        {id: 223, name: 'scallion'},
        {id: 224, name: 'bok choy'},
        {id: 225, name: 'chinese eggplant'},
        {id: 226, name: 'string beans'},
        {id: 227, name: 'fish sauce'},
        {id: 228, name: 'peanut butter'},
        {id: 229, name: 'annatto powder'},
        {id: 230, name: 'bagoong'},
        {id: 231, name: 'roasted, unsalted peanuts'},
        {id: 232, name: 'fried garlic'},
        {id: 233, name: 'white rice'},

        {id: 234, name: 'duck egg'},
        {id: 235, name: 'salt'},

      ]);
    });
};

