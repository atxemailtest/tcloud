var	config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	// Use Mongoose to connect to MongoDB
	var db = mongoose.connect(config.db);

	// Load the 'User' model 
	require('../models/user.model');

	// Return the Mongoose connection instance
	return db;
};