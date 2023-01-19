const express = require('express');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

const router = express.Router();

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/details/:cubeId', cubeController);
router.use('/404', homeController);

module.exports = router;