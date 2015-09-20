module.exports = function(app){
	var index = require('../controllers/user.controller');
	app.get('/', index.renderIndex);
	app.get('/signin', index.renderSignin);
	app.get('/signup', index.renderSignup);
};		


/*
module.exports = function(app)
{
	app.get('/',function(req,res){
		res.render('index')
    }); 

    app.get('/signin',function(req,res){
		res.render('signin')
    });

    app.get('/signup',function(req,res){
		res.render('signup')
    }); 
};
*/

