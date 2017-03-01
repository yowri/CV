var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Express' });
});
router.get('/experience', function(req, res, next) {
  res.render('experience', { title: 'Express' });
});
router.get('/education', function(req, res, next) {
  res.render('education', { title: 'Express' });
});
router.get('/about_me', function(req, res, next) {
  res.render('about_me', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
// router.get('/portfolio', function(req, res, next) {
//   res.render('portfolio', { title: 'Express' });
// });

router.get('/pdf', function(req, res, next) {
  res.render('pdf', { title: 'Express' });
});


module.exports = router;
