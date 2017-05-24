'use strict';


/*
 * This way, every object will have 
 * toString and timeToComplete and getTime
 * REINITIALIZED(RECREATED). In other words
 * everry task will have 3 methods created 
 * for the object. To avoid creating 3 methods
 * when instance is created we need to put
 * functions in protorype.
 * 
 */

//With this a protorype is created and it is linked to Task
var Task = function (name, time) {
    this.name = name;
    this.time = time;
    
    this.getTime = function () {
        return this.time;
    };
    
    this.timeToComplete = function () {
        this.time += this.time;
    };
    this.toString = function () {
        return this.name + " " + this.time;
    };
};

function init() {
    var task1 = new Task("Saving", 5);
    var task2 = new Task("Loading", 6);
    var task3 = new Task("Deleting", 7);
    var task4 = new Task("Duplicate", 8);
    
    console.log(task1.toString());
    console.log(task2.toString());
    console.log(task3.toString());
    console.log(task4.toString());
}


window.onload = init;


