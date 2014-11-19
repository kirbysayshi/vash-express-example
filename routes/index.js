
/*
 * GET home page.
 */

exports.index = function(req, res){
  var items = [];
  for(var i = 0; i < 1000; i++) {

    items.push({ nick: 'nick' + i, date: new Date(), args: ['zero', 'one'] });
  }
  res.render('index', {
      channel: 'Express'
    , buffer: items
  });
};
