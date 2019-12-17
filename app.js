const express = require('express')
const app = express()

//Routes / send 'Hello World'
/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

//require('./routes')(app); console.log('loading routes ...');
require('./models')(app); console.log('loading routes ...');


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})