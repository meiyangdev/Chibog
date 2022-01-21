const knex = require('knex')

const config = require('./knexfile').test
const testDb = knex(config)
const dbFuncs = require('./db')

beforeAll(() => {
    return testDb.migrate.latest()
  })
  
  beforeEach(() => {
    return testDb.seed.run()
  })

  test('CREATE: db.getIngredientList gets ingredients list', (() => {
    const expectedLength = 9
    return dbFuncs.getIngredientList(101)
    .then((ingredients) => {
        console.log(ingredients.length)
        expect(ingredients.length).toBe(9)
    })
  })
  )