const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET tasks on startup
router.get('/', (req, res) => {
    console.log('getting task list');

    // add sql query
    let queryText = `SELECT * FROM "todo-list"`;

    // call pool
    pool.query(queryText)
    .then((dbRes) => {
        console.log('Tasks sent to client succesfully');
        res.send(dbRes.rows);
    })
    .catch((err) => {
        console.log('Server Error grabbing task list', err);
        res.sendStatus(500);
    });
});

module.exports = router;