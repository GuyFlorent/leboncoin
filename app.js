const express = require('express')
const app = express()
//Middleware for parsing json
const bodyParse = require('body-parser');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))
//Using express for routes
require('./models')(app); console.log('loading routes ...');
require('./controllers')(app); console.log('loading routes ...');
require('./routes')(app); console.log('loading routes ...');
// Using 3000 as port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})