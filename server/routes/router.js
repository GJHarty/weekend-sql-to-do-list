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

// POST new task
// request body must be task object with taskDesc and 
router.post('/', (req, res) => {
    console.log('Inside router POST');
    
    let newTask = [req.body.taskDesc];

    // add sql query for adding newTask to db
    let queryText = `INSERT INTO "todo-list" 
                        ("taskDesc")
                    VALUES 
                        ($1)`;

    // call pool
    pool.query(queryText, newTask)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Server error adding newTask', err);
            res.sendStatus(500);
        });
});

module.exports = router;