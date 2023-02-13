const router = require('express').Router();
const db = require('../database.json');
const fs = require('fs/promises');

router.get('/', (req, res) => {
    res.render('index', {cubes: db.cubes});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/create', (req, res) => {
    const cube = req.body;
    res.send("Successful");

    db.cubes.push(cube);
    fs.writeFile('../database.json', JSON.stringify(cubes))
    .then(() => {
        res.redirect('/');
    }).catch(err => {
        res.status(400).send(err);
    });
});


router.get('/404', (req, res) => {
    res.render('404');
})

module.exports = router;