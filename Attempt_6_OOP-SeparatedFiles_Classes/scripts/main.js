var Task = require('./task');


var task1 = new Task("Saving", 5);
var task2 = new Task("Loading", 6);
var task3 = new Task("Deleting", 7);
var task4 = new Task("Duplicate", 8);

console.log(task1.toString());
console.log(task2.toString());
console.log(task3.toString());
console.log(task4.toString());
