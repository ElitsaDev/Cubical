const router = require('express').Router();
const cubes = require('../../config/database.json');
const fs = require('fs/promises')
router.get('/', (req, res) => {
    res.render('index', {cubes});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/create', (req, res) => {
    const cube = req.body;
    res.send("Successful");

    cubes.push(cube);
    fs.writeFile('../../config/database.json', JSON.stringify(cubes))
    .then(() => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send(err);
    });
});

module.exports = router;