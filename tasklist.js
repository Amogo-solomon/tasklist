console.log(``);
console.log(" WELCOME TO TASK MANAGEMENT SYSTEM");

// Declare taskList at the top-level scope
const taskList = [];

// Function to add a new task
function addTask(title) {
  const newTask = { title, completed: false };
  taskList.push(newTask);
  console.log(`Task "${title}" added.`);
  console.log("");
}

// Function to display tasks
function displayTasks() {
  if (taskList.length === 0) {
    console.log("Task list is empty.");
  } else {
    taskList.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} [${task.completed ? 'Completed' : ' Not Completed'}] `);
      
    });
  }
}

// Function to mark a task as completed
function markAsCompleted(index) {
  if (index >= 1 && index <= taskList.length) {
    taskList[index - 1].completed = true;
    console.log(`Task ${index} marked as completed.`);
  } else {
    console.log("Invalid index. Kindly enter a valid task index.");
  }
}

// User Interaction
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processCommand(command) {
  if (command === "addtask") {
    rl.question("Enter task title: ", function (title) {
      addTask(title);
      askForCommand();
      console.log(" ");
    });
  } else if (command === "displaytask") {
    console.log(" ");
    console.log(`TASK ON THE LIST`);
    displayTasks();
    console.log(" ");
    askForCommand();
    
  } else if (command === "completetask") {
    console.log(" ");
    rl.question("Enter task index to mark as completed: ", function (index) { 
      markAsCompleted(parseInt(index));
      console.log(" ");
      console.log(`TASK ON THE LIST`);
      displayTasks();
      console.log(" ");
      askForCommand();
    });
  } else {
   
    console.log("Invalid command. Kindly enter addtask, displaytask, or completetask.");
    console.log(" ");
    askForCommand();
  }
}

function askForCommand() {

  rl.question("Kindly Enter command (addtask/displaytask/completetask): ", processCommand);
}


console.log(" ");
askForCommand();


