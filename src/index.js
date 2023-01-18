const express = require('express');
const routes = require('./routes');
const config = require('../config/config');
const setupViewEngine = require('../config/viewEngine');

const app = express();
setupViewEngine(app);

app.use('/static', express.static('public'));
app.use(express.urlencoded({extended: false}));

app.use(routes);

app.listen(config.PORT, () => console.log(`App is working on port ${config.PORT}...`));