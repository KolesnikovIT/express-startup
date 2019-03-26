/* App setup */
const flash = require('connect-flash'),
      config = require('./config/config'),
      express = require('express'),
      bodyParser = require('body-parser'),
      { apiRouter } = require('./routes/api.router')

const app = express()

app
.use(express.static(config.publicPath))
.use(bodyParser.urlencoded({ extended: true }))
.use(bodyParser.json())
.use(flash())
/* Router */
.use('/api', apiRouter)

module.exports = app