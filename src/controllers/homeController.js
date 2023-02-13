const router = require('express').Router();
const db = require('../database.json');
const fs = require('fs/promises');

const Cube = require('../models/Cube');

router.get('/', async(req, res) => {
    const { search, from, to } = req.query;
    let cubes = await Cube.find().lean();

    //Use DB filtration instead of in memory filter
    if(search){
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(from){
        cubes = cubes.filter(cube => cube.difficultyLevel >= from);
    }

    if(to){
        cubes = cubes.filter(cube => cube.difficultyLevel <= to);
    }

    res.render('index', {cubes, search, from, to});
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