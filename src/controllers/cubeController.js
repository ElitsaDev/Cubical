const router = require('express').Router();
const Cube = require('../models/Cube');
const db = require('../database.json')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    let cube = new Cube(name, description, imageUrl, difficultyLevel);
    cube.save();
    
    res.redirect('/');
});

router.get('/details/:cubeId', (req, res) => {
    let cubeId = Number(req.params.cubeId);
   
    if(!cubeId){
        return res.redirect('/404');   
    }

    let cube = db.cubes.find(x => x.id === cubeId);
    
    if(!cube){
        return res.redirect('/404');  
    }

    res.render('details', { cube });
})  

module.exports = router;