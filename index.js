var express = require('express');
const http = require('http');
var app = express();
var morgan = require('morgan')
var bodyParser = require('body-parser');
var fs=require('fs');
var path = require('path');

var swaggerUi = require('swagger-ui-express');
    swaggerDocument = require('./swagger.json');

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
 
  const Models = require('./app/model');
  //Sync Database
  
  Models.sequelize.sync({
      force : false,
      logging : console.log
  }).then(function () {
      console.log('Nice! Database looks fine')
  }).catch(function (err) {
      console.log(err, "Something went wrong with the Database Update!")
  });
       
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        app.use('/', require('./app/route/account.route.js'));
        app.use('/', require('./app/route/transaction.route.js'));



// Create a Server
const port = parseInt(process.env.PORT, 10) || 8010;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;