const express = require('express')
const db = require('./db')

const router = express.Router()

router.get('/', (req,res)=>{
    db.getRecipes()
     .then(recipe => {
        console.log(recipe)
        res.render('home', {recipe: recipe})
    })
    .catch(err => {
        console.log(err)
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
    .catch(err => {
        console.log(err)
    })

})

router.get('/addrecipe', (req,res) => {
    res.render('addRecipe')
})

router.post('/addrecipe', (req,res)=> {
    console.log(req.body)
    db.addRecipe(req.body)
    .then(() => {
        res.render('addRecipe')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router