$(document).ready(eventHandler);

function eventHandler() {
    $('#submitBtn').on('click', submitTask);

    loadTasks();
};

// handle submit button 
function submitTask(){
    console.log('submitting task');
};

// load tasks on startup
function loadTasks(){
    console.log('loading tasks');

    // assign tbody to variable
    let tableBody = $('#tasksList');

    // call ajax
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then((res) => {
        console.log('response from router ', res);
        // empty table
        tableBody.empty();

        // loop through tasklist from db and append to DOM
        for (let task of res){
            tableBody.append(`
                <tr data-id=${task.id} data-isComplete=${task.complete}>
                    <td id="taskDescription">${task.task}</td>
                    <td id="taskStatus">${task.complete}</td>
                    <td>
                        <button id="completeBtn">Complete Task</button>
                    </td>
                    <td>
                    <button id="deleteBtn">Delete Task</button>
                    </td>
                </tr>
            `);
        };
    }).catch((err) => {
        console.log('error in client GET ', err);
        alert(`There was an error processing your request. 
            Please make sure fields are entered correctly.`);
    });
    
};

