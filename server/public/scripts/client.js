$(document).ready(eventHandler);

function eventHandler() {
    // button handlers
    $('#submitBtn').on('click', submitTask);
    $('.tableDiv').on('click', '.completeBtn', completeTask);
    $('.tableDiv').on('click', '.deleteBtn', deleteTask);

    loadTasks();
};

// handle complete button
// update value of task.complete from pending to Completed
function completeTask(){
    console.log('in completeTask');

    // target task id
    let taskId = $(this).parents('.row').data('id'); // ts id="taskStatus"
    console.log(taskId);
    
    // target task status
    let taskStatus = $(this).parents('.row').data('status');
    console.log(taskStatus);

    // Determine time completed
    let currentTime = new Date();
    let completeTime = currentTime.getMonth() + '/' + currentTime.getDay() + '/' + currentTime.getFullYear();
    console.log(completeTime);

    // update task column
    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskId}`,
        data: {
            taskStatus: `Completed: 
                        ${completeTime}`
        }
    }).then((res) => {
        console.log('PUT /tasks succeeded', res);
        loadTasks();
    }).catch((err) => {
        console.log('PUT /tasks failed', err);
    });
};

// handle submit button 
function submitTask(){
    console.log('submitting task');

    let input = $('#taskDesc').val();

    // assign input values to object
    let newTask = {
        taskDesc: input
    };
    console.log('newTask', newTask);
    // call ajax
    // add task to db
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: newTask
    }).then((res) => {
        console.log('Response from server', res);
        
        // refresh DOM
        // empty input field
        loadTasks();
        $('#taskDesc').val('');
    }).catch((err) => {
        console.log('error in client POST ', err);
        alert(`There was an error grabbing the inputs. Please ensure all fields have been added.`);
    });
};

// handle delete button
function deleteTask(){
    console.log('delete button clicked');

    // target row id button is in
    let taskId = $(this).parents('.row').data('id');
    console.log(taskId);

    $.ajax({
        type: 'DELETE',
        url: `/tasks/${taskId}`
    }).then((res) => {
        console.log(res);
        loadTasks();
    }).catch((err) => {
        console.log('DELETE /tasks failed', err);
    });
};

// load tasks on startup
function loadTasks(){
    console.log('loading tasks');

    // call ajax
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then((res) => {
        console.log('response from router ', res);
        renderTasks(res);
    }).catch((err) => {
        console.log('error in client GET ', err);
        alert(`There was an error loading files. Please try again.`);
    });
};

function renderTasks(tasks) {
    // assign table body 
    let tableBody = $('.tableRows');
    
    // empty table
    tableBody.empty();

    // loop through tasklist from db and append new row to DOM
    for (let task of tasks){

        tableBody.append(`
            <div class="row" data-id=${task.id} data-status=${task.status}>
                <div class="col-6 taskDescription text-break">${task.taskDesc}</div>
                ${pendingOrComplete(task)}
                <div class="col-2 text-center">
                    <button class="btn btn-success completeBtn">Complete Task</button>
                </div>
                <div class="col-2 text-center">
                    <button class="btn btn-danger deleteBtn">Delete Task</button>
                </div>
            </div>
        `);
    };
};

// determine which border to use in the status column 
function pendingOrComplete(task){
    if (task.status === 'Pending') {
        return `<div class="col-2 pendingTask"><i>${task.status}</i></div>`
    } else {
        return `<div class="col-2 completedTask">${task.status}</div>`
    };
};