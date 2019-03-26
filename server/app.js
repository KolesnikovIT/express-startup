/* App setup */
const express = require('express')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const app = express()
const config = require('./config/config')
const { apiRouter } = require('./routes/api.router')

app.use(express.static(config.publicPath))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(flash())

app.use('/api', apiRouter)

module.exports = app