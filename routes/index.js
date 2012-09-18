
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
	  title: 'Express'
	  ,reasons: [
		"Razor Syntax"
		,"Still HTML"
		,"You can macro your macros into your macros, if you want"
	  ]
  });
};
