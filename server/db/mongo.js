const mongoose = require('mongoose')
const config = require('../config/config')
mongoose.Promise = global.Promise
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(e => console.log('Error!', e))

module.exports = { mongoose }