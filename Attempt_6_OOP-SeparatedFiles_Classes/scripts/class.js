'use strict'


class Task { 
    constructor (name, time) {
        this.name = name;
        this.time = time;
    };
    
    toString()  {
        return this.name + " " + this.time;
    };
    
    timeToComplete( ) {
        this.time += this.time;
    };
    
    getTime( ) {
        return this.time;
    };
}

// Export reference constructor
var task1 = new Task("Saving", 5);
var task2 = new Task("Loading", 6);
var task3 = new Task("Deleting", 7);
var task4 = new Task("Duplicate", 8);

console.log(task1.toString());
console.log(task2.toString());
console.log(task3.toString());
console.log(task4.toString());
