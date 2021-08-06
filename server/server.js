const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

// setup server listen
app.listen(port, () => {
    console.log('listening on port ', port);
});