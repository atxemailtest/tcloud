process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose();
var app = express();

// Use the Express application instance to listen to the '5000' port
app.listen(3000);

// Log the server status to the console
console.log('===============================');
console.log('Server running at port:3000/');
console.log('===============================');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;
