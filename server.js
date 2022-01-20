// 1. Require all dependant modules
const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

// 2. Get all Middleware - Handlebars and other
server.engine('hbs', hbs({ extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

// 3. Routes

server.use('/', routes)

module.exports = server