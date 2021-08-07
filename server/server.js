const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 5000;

// Serve back static files by default
app.use(express.static('server/public'))

// link router
//app.use('/todo', router);

// setup server listen
app.listen(port, () => {
    console.log('listening on port ', port);
});