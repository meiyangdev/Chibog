const config = require('./knexfile').development
const database = require('knex')(config)

function getRecipes (db = database) {
    return db('recipe').select()
}

function getRecipeById (id, db = database) {
    return db('recipe').select().where('recipe.id', id).first()
}


function getIngredientList (id, db = database) {
    return db('recipe')
    .join ('recipe_ingredient', 'recipe.id', 'recipe_ingredient.recipe_id')
    .join('ingredient', 'ingredient.id', 'recipe_ingredient.ingredient_id')
    .where('recipe_ingredient.recipe_id', id)
    .select('recipe.id',
    'recipe_ingredient.amount',
    'ingredient.name')

}

function addRecipe (obj, db = database) {
    return db("recipe")
    .insert(
        obj
        )
}

// function getIngredientList (db = database) {
//     return db("ingredient")
//     .select()

// }

module.exports = {
    getRecipes: getRecipes,
    getIngredientList: getIngredientList,
    getRecipeById: getRecipeById,
    addRecipe: addRecipe
}