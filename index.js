// Use an object to keep track of the state:
// Create a new task
const newTask = function (title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  };
  return task;
};

// Mark provided task as complete
const completeTask = function (task) {
  task.complete = true;
};

// Print out the provided task's details
const logTaskState = function (task) {
  console.log(`${task.title} has ${task.complete ? "" : "not "}been completed`);
};

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);
console.log(tasks);
