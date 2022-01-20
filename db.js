const config = require('./knexfile').development
const database = require('knex')(config)

function getRecipes () {

}

module.exports = {
    getRecipes
}