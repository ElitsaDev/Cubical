const router = require('express').Router();
const Cube = require('../models/Cube');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    let cube = new Cube({ name, description, imageUrl, difficultyLevel });
    await cube.save();

    res.redirect('/');
});

router.get('/details', async (req, res) => {
    let cube = await Cube.findById(req.params.cubeId).lean();

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
})

module.exports = router;