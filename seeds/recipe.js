
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { id: 101, 
          name: 'Adobo', 
          category:'Classic recipes', 
          type: 'meal',
          youtubelink: 'https://www.youtube.com/watch?v=2KsYYmSGKOc&ab_channel=JoshuaWeissman', 
          instructions:`Step 1
          Heat oil in a large pot over medium heat until it starts to shimmer. Add drumsticks and cook until brown on all sides, 4 to 6 minutes. Transfer to a plate. Add thighs to the pot and cook until browned, about 3 minutes per side. Transfer to the plate with the drumsticks.
          
          Step 2
          Add onion, garlic, bay leaves and peppercorns to the pot; cook, stirring occasionally, until the garlic just begins to brown, about 3 minutes. Add vinegar and soy sauce and bring to a simmer, scraping up any browned bits. Return the chicken to the pot and turn to coat with the sauce. Reduce heat to maintain a gentle simmer, cover and cook, stirring occasionally, until the chicken is very tender, about 1 hour.
          
          Step 3
          Transfer the chicken to a clean plate and cover loosely with foil to keep warm. Bring the sauce to a boil and cook, stirring often, until reduced by about one-third, 3 to 5 minutes. Serve the chicken with the sauce.`, 
          about: `Filipino Chicken Adobo is the national dish of the Philippines and may well become your new favourite Asian chicken dish! Just a few everyday ingredients I can practically guarantee you already have, it’s an effortless recipe that yields juicy, tender chicken coated in a sweet savoury glaze with little pops of heat from peppercorns.`, 
          image_food: '/images/food_1.jpg', 
          image_origin: '/images/origins_1.jpg',
          origin: `Filipino or Spanish? Adobo‘s Disputed Origins
          The word adobo is derived from the Spanish word adobar, which means “marinade” or “pickling sauce.” The existence of the tangy dish was first recorded in 1613 by the Spaniard Pedro de San Buenaventura. In the dictionary he was compiling, Buenaventura listed the tart viand as “adobo de los naturales” for its similarity to Spanish and Mexican dishes that went by the same name. But while our favorite ulam’s moniker boasts of a pure Spanish lineage, little else about our adobo can and should be attributed to the Philippines' Hispanic conquerors. According to the food historian Raymond Sokolov, the ingredients for adobo already existed in the Philippines before Ferdinand Magellan even laid eyes on Philippine shores. Because the dish’s original name was never recorded, the Spanish label stuck.`},
        { id: 102, 
          name: 'Halo-Halo', 
          category:'Sweet', 
          type: 'Dessert', 
          youtubelink: `https://www.youtube.com/watch?v=cm4yNGTlQOw&ab_channel=emmymade`,
          instructions:`Step 1 
          Peel mangoes and slice into half-inch cubes.
          
          Step 2 
          Divide each ingredient into 4 equal parts. Get 4 tall glasses, then place each ingredients layer by layer.
          
          Step 3
          Put the one-half cup of shaved ice to each glass.
          
          Step 4 
          Pour a quarter of milk evap over shaved ice to each glass.
          
          Step 5 
          Put a scoop of ice cream on top.
          
          Step 6 
          Drizzle some nuts or rice crispies on top of the ice cream.`, 
          about: `Halo-Halo means “mix-mix" in Tagalog. This refreshing dish layers shaved ice and condensed milk on top of all sorts of ingredients for an end result that packs in lots of contrasting textures, from chewy to crunchy, creamy to sticky. While components vary, you'll find some common add-ins at most halo-halo carts and bars- jellies, flan, macapuno, palm seeds, sweetened red beans, shaved ice, ube ice cream, fresh fruit, toasted coconut flakes, pinipig. My version uses mango jelly with fresh fruit set into it as well as pandan-infused sweetened condensed milk.

          TIP! Zelati on Cuba st serve Halo-Halo occasionally, if you want to try it out. It's somewhat costly, but it's perfect for sharing.`, 
          image_food: '/images/food_2.jpg', 
          image_origin: '/images/origins_2.jpg',
          origin: `Halo-halo's origins can be traced back to Japan. Flourishing trade between the two countries brought over sweet desserts like mitsumame, a combination of cubed jelly, fresh fruit, and red adzuki beans, and kakigori, a shaved iced dessert sweetened with fruit syrup and condensed milk then topped with mochi, fruit, and sweet adzuki bean paste. When Japan occupied the Philippines in the late 19th century, Japanese settlers started selling a sweet creation called mong-ya, similar to mitsumame but with the inclusion of mung beans, and it was an instant hit in the metro Manila area. Filipinos adapted the dessert to suit their tastes—adding fruit preserved in simple syrup, cubed jelly, leche flan (baked custard), and ube ice cream—and halo-halo was born. 

          Each region has their own version of halo-halo showcasing a kaleidoscope of add-ins—from sago (tapioca pearls in syrup) and macapuno (coconut sport strings in syrup) to colorful kaong (sugar palm fruit jelly). In some places, they even add shredded cheese, cornflakes, or polvorón, a crumbly shortbread flavored with cashews, pinipig, ube, or chocolate. Needless to say, It’s an endlessly customizable dessert.`},
        { id: 103, 
          name: 'Kare-Kare', 
          category:'Classic recipes', 
          type: 'meal', 
          youtubelink: `https://www.youtube.com/watch?v=yAd22iZ-xyM&ab_channel=FEATR`,
          instructions:`Step 1
          Rinse oxtail under cold, running water and with a knife, trim excess fat. In a deep pot, place oxtails and enough water to cover. Over medium heat, bring to a boil, skimming any scum that accumulates to top. Lower heat, cover and simmer, adding more water as needed to maintain 6 cups, for about 2 to 3 hours or until oxtails are easily pierced with a fork. Drain oxtail, reserving about 6 cups broth.
          
          Step 2
          Peel and discard the outer, fibrous skin layers of banana heart until you reach the lighter, softer core. Trim off stem and discard. Cut banana core into half and into fourths. In a bowl of cold salted water, place cut banana and soak for about 15 to 20 minutes. Using hands, squeeze to release bitter sap. Rinse with cold water and drain well, discarding liquid.
          
          Step 3
          In a pot over medium heat, bring about 4 cups water to a boil. Add banana heart and blanch for about 1 minute. With a slotted spoon, remove from liquid and set aside. Add eggplant and blanch for about 1 minute. With a slotted spoon, remove from liquid and set aside. Add long beans and blanch for about 1 minute. With a slotted spoon, remove from liquid and set aside. Add pechay and blanch for about 30 seconds. With a slotted spoon, remove from liquid and set aside.
          
          Step 4
          In a skillet over medium heat, add rice flour and cook, stirring occasionally, until lightly browned and toasted. In a bowl, combine toasted rice flour and 1/4 cup reserved broth and whisk until smooth.
          
          Step 5
          In a small bowl, combine annatto powder and 1/4 cup reserved broth. Stir until powder is dissolved and color has dispersed.
          In a bowl, combine peanut butter and 1/2 cup of reserved broth and stir until well-blended.
          
          Step 6
          In a large pot over medium heat, heat oil. Add onions and garlic and cook until limp and aromatic. Add oxtail and cook, stirring occasionally, until lightly browned. Add fish sauce and cook for about 2 to 3 minutes.
          
          Step 7
          Add the remaining 5 cups of reserved broth and bring to a simmer. Add annatto water, rice flour mixture and peanut butter mixture, stirring well to combine. Season with salt and pepper to taste. Continue to simmer for about 10 minutes or until it begins to slightly thicken. Add blanched vegetables and cook for about 2 to 3 minutes or until heated through and tender yet crisp. Serve hot with shrimp paste on the side.`, 
          about: `Kare Kare is a type of Filipino stew with a rich and thick peanut sauce. It is a popular dish in the Philippines served during special occasions. ... The vegetable components of the dish are string beans, eggplant, bok choy, and banana blossoms. Lightly browned toasted ground rice is used to thicken the sauce.`, 
          image_food: '/images/food_3.jpg', 
          image_origin: '/images/origins_3.jpg',
          origin:`The origins of kare-kare—a peanut butter-based curry made with oxtail, tripe, and a wide variety of vegetables—are unclear, but there are a number of theories. It was invented in Pampanga, the culinary epicenter of the Philippines; it was originally a traditional dish of the Moro people, the native inhabitants of the archipelago; it was an attempt by Indian soldiers on British ships trying to recreate curry far from home using local annatto seeds and peanuts.

          Regardless of its origins, at its core, kare-kare is comfort food, which is evident in its name. In the Philippines, if something is particularly good or desirable, it’s common practice to say its name twice, so since “kare” means “curry,” you could say that a loose translation of kare-kare is “really good curry.”` },
        { id: 104, 
          name: 'Balut', 
          category:'Weird food', 
          type: 'Snack', 
          youtubelink: `https://www.youtube.com/watch?v=2MJvug6QOgA&ab_channel=emmymade` ,
          instructions:`(It's probably too traumatising to describe it here, so we'll let you Google it yourselves)`, 
          about: `Balut is a street food widely consumed in the Philippines, but is also popular in places like Vietnam, where it's called hot vit lon, Thailand, China, Malaysia and other southeast Asian countries. There's no creative way to describe balut, but to just tell it like it is — it's a fertilized duck egg. Yes, it's a duck egg that has been incubated at about 104 degrees fahrenheit for a specific period of time. The fertilization process for balut ranges from 16-20 days. So, that means inside this fertilized duck egg is an embryo that is about a week short of hatching. If you can stomach it enough to picture it, this far in the development process the embryo will have feathers and a beak.

          There you have it. Balut, a delicacy that has been a staple in the Filipino culture for more than 200 years, is an unhatched baby duck. 
          
          If you can't stomach balut, there's always the option to try the unfertilized duck egg (which is widely known as Penoy.)`, 
          image_food: '/images/food_4.jpg', 
          image_origin: '/images/origins_4.jpg',
         origin: `Despite the popular association of the consumption of fertilized duck eggs or incubated eggs to the Filipino cuisine, it has been documented to have existed and in many Asian countries. It has been identified that fertilized duck egg consumption was originally developed in China.

         During the sixteenth century, the practice of making incubated eggs was believed to be brought by Chinese traders to the Philippines when they settled along the shorelines of Laguna de Bay. At that time, a particular town near the area has an abundance of Mallard ducks raised mainly for its eggs. In general, ducks are known to adapt in almost all kinds of environmental conditions and varying feeding practices and have immunity to common bird diseases. This municipality initiated and popularized the process of making incubated eggs which is now famously known as “balut.” `}
      ]);
    });
};
