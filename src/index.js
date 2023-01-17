const express = require('express');
const handlebars = require('express-handlebars');

const routes = require('./routes');
const app = express();
const port = 5000;

app.use('/static', express.static('public'));
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views')

app.use(routes);

app.listen(port, () => console.log(`App is working on port ${port}...`));