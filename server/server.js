const app = require('./app')
const { mongoose } = require('./db/mongo')
app.listen(3000, () => console.log('App started on 3000'))