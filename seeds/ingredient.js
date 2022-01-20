
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







/* Adobo
2 tablespoons 
5 chicken drumsticks (about 1 3/4 pounds)
5 bone-in chicken thighs (about 1 3/4 pounds)
1 large yellow onion, quartered and sliced 1/4 inch thick
8 cloves garlic, smashed
5 bay leaves
¼ teaspoon whole black peppercorns
1 cup cane vinegar (see Tips) or unseasoned rice vinegar
⅓ cup reduced-sodium soy sauce

HaloHalo
2 cups of shaved ice
1 ripe large banana
1 cup young shredded coconut, fresh or bottled
1/2 cup sweet corn or chickpeas (garbanzos)
2 cups evaporated milk
1 cup firm gelatin set into a gel and cut into 1/2 inch cubes
2 ripe mangoes
1 cup ripe jackfruit
1 cup cooked sweet yams or (ube halaya)
4 scoops of favorite ice cream
1/2 cup rice pop

Kare-Kare
2 tablespoons (20g) white rice flour
6 tablespoons (90ml) canola oil, divided
2 1/4 pounds (1kg) oxtails, fat trimmed (see note)
14 medium garlic cloves (60g), minced, divided 
1/2 medium red onion (about 4 ounces; 115g), finely diced, divided 
1 scallion, ends trimmed and sliced thinly on a bias for garnish, trimmings reserved
4 small bok choy (about 1/4 pound; 115g), halved lengthwise
1 medium Chinese eggplant (about 1/2 pound; 225g), ends trimmed and cut into 3-inch-long by 1-inch-thick batons 
4 ounces (115g) Chinese long beans or string beans, stem ends trimmed and beans cut into 3-inch lengths 
2 tablespoons (30ml) fish sauce
8 1/2 ounces (about 1 cup; 240g) natural creamy peanut butter (see note)
1 tablespoon (20g) annatto powder 
2 ounces ginisang bagoong (1/4 cup; 60g), plus more for serving (see note)
2 1/2 ounces roasted, unsalted peanuts (about 1/2 cup; 70g), crushed, for garnish
2 tablespoons (15g) homemade or store-bought fried garlic, for garnish
Cooked white rice, for serving

Balut
Duck Egg
Salt
