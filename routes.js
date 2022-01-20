const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req,res)=>{
    db.getRecipes()
     .then(recipe => {
        console.log(recipe)
        res.render('home', {recipe: recipe})
    })
    // res.send('CHIBOG!!!!!')
})

router.get('/recipe/:id', (req, res) => {
    db.getRecipeById(req.params.id)
    .then(recipe => {
        db.getIngredientList(req.params.id)
        .then(ingredientList => {
            console.log({recipe: recipe, ingredientList: ingredientList})
            res.render('recipe', {recipe: recipe, ingredientList: ingredientList})
        })
    })
})

module.exports = router