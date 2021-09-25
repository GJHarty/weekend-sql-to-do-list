# Weekend To-Do List

A simple to-do list created using JQuery and a Node.js server. This application also uses a postgresql database. Bootstrap was used for styling.

## Installation

Simply clone the respository and install the node modules. You can start the application using npm start
```
npm install
```
You will then have to setup your postgres database. The first step is to navigate to the pool.js file in the modules folder and update the config database to the name of the database you created.
```
const  config = {
	database:  'YOUR_DB_NAME_HERE', // Here is where you put your database's name
	host:  'localhost',
	port:  5432,
	max:  10,
	idleTimeoutMillis:  30000
}
```
Finally, you can use the information in the weekend-to-do-app.sql file to get your table setup.
```
CREATE  TABLE  "todo-list"(
	"id"  SERIAL  PRIMARY  KEY,
	"taskDesc"  VARCHAR (250) NOT  NULL,
	"status"  VARCHAR(105) DEFAULT  'Pending'
);
```

## Usage

Simply type a task's name or description into the input field and hit submit. The new task will populate in the list below with a default status of pending highlighted by an orange border. 

<a href="https://imgur.com/KeNCxSq"><img src="https://i.imgur.com/KeNCxSq.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/qBjssXY"><img src="https://i.imgur.com/qBjssXY.png" title="source: imgur.com" /></a>

There are two actions that can be done for tasks which have been added: Complete Task and Delete Task. Clicking Complete Task will update the status to 'Complete', change the border color to green and mark down the date which the task was completed. Clicking the Delete Task button will remove that task from the list. This cannot be reversed.

<a href="https://imgur.com/7KpOxgk"><img src="https://i.imgur.com/7KpOxgk.png" title="source: imgur.com" /></a>





