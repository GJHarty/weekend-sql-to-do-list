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

// PUT task change
// update task to show complete instead of pending
router.put('/:id', (req, res) => {
    console.log('inside router PUT');
    let taskId = req.params.id;
    let taskStatus = req.body.taskStatus;
    console.log('in router, task id: ', taskId);
    console.log('in router, task status: ', taskStatus);

    // setup sql query and params
    let sqlQuery = `UPDATE "todo-list" SET "status"=$1 WHERE "id"=$2`;
    let sqlParams = [
        taskStatus,
        taskId
    ];

    // call pool to send sql to db
    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('PUT Router error', err);
            res.sendStatus(500);
        });
});

module.exports = router;