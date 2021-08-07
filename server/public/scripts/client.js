$(document).ready(eventHandler);

function eventHandler() {
    // button handlers
    $('#submitBtn').on('click', submitTask);
    $('#tasksList').on('click', '.completeBtn', completeTask);
    $('#tasksList').on('click', '.deleteBtn', deleteTask);

    loadTasks();
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

// handle complete button
function completeTask(){
    console.log('complete button clicked');
};

// handle delete button
function deleteTask(){
    console.log('delete button clicked');
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
    // assign tbody to variable
    let tableBody = $('#tasksList');

    // empty table
    tableBody.empty();

    // loop through tasklist from db and append to DOM
    for (let task of tasks){
        tableBody.append(`
            <tr data-id=${task.id} data-isComplete=${task.complete}>
                <td id="taskDescription">${task.taskDesc}</td>
                <td id="taskStatus">${task.complete}</td>
                <td>
                    <button class="completeBtn">Complete Task</button>
                </td>
                <td>
                    <button class="deleteBtn">Delete Task</button>
                </td>
            </tr>
        `);
    };
};

