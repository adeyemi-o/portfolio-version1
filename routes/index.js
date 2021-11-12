var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET Info page. */
/* router.get('/contact.ejs', function(req, res, next) {
    res.render('index', { title: 'Contact' });
}); */

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'contact' });
});


/* GET Product page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});
/* GET About me page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
});

module.exports = router;