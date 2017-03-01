var express = require('express');
var app = express();

var routes = require('./routes/index');


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

var cons = require('consolidate');

app.engine("html",cons.swig);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use('/', routes);

// var sendmail = require('sendmail')();
 
// sendmail({
//     from: 'vanloo38@gmail.com',
//     to: 'yori_vanloo@live.nl',
//     subject: 'test sendmail',
//     html: 'Mail of test sendmail ',
//   }, function(err, reply) {
//     console.log(err && err.stack);
//     console.dir(reply);
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

