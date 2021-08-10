const express = require('express');
const body_parser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(body_parser.urlencoded({extended: false}));

routes(app);

app.listen(8000)