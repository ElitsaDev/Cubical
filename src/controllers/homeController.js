const router = require('express').Router();
const cubes = require('../../config/database.json');

router.get('/', (req, res) => {
    res.render('index', {cubes});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/create', (req, res) => {

});

module.exports = router;